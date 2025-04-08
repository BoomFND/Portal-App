<template>
  <div class="lottie-view" ref="containerRef">
    <div ref="animationContainer" class="lottie-animation"></div>
    <div class="mask"></div>
  </div>
</template>

<script setup lang="ts">
import lottie from 'lottie-web'
import type { AnimationItem } from 'lottie-web'
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  loop: {
    type: Boolean,
    default: true,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
})

const containerRef = ref<HTMLElement | null>(null)
const animationContainer = ref<HTMLElement | null>(null)
const animation = ref<AnimationItem>()
const isVisible = ref(false)
const cleanupRef = ref<(() => void) | undefined>()
// 如果是本地 JSON 文件，可以直接导入
import animationData from '../assets/lotties/artboard.json'

// 防抖函数
const debounce = (fn: Function, delay: number) => {
  let timer: number | null = null
  return function (this: any, ...args: any[]) {
    if (timer) {
      window.clearTimeout(timer)
    }
    timer = window.setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

const loadAnimation = () => {
  if (!animationContainer.value) return

  try {
    // 1. 渲染器设置
    animation.value = lottie.loadAnimation({
      container: animationContainer.value,
      renderer: 'svg',
      loop: props.loop,
      autoplay: false,
      animationData,
      rendererSettings: {
        progressiveLoad: true,
        hideOnTransparent: true,
        viewBoxOnly: true,
        className: 'lottie-animation',
      },
    })

    /// 降低质量以提升性能
    lottie.setQuality('low') 
    animation.value.addEventListener('enterFrame', handleEnterFrame)

    // 禁用子帧 降低播放速度
    animation.value.setSubframe(false) 
    animation.value.setSpeed(0.8) 
  } catch (error) {
    console.error('Animation load error:', error)
  }
}
// 3. 帧率控制
let targetFPS = 24
let lastFrame = 0
let timeoutId: number | null = null

const handleEnterFrame = () => {
  const now = Date.now()
  if (now - lastFrame < 1000 / targetFPS) {
    animation.value?.pause()

    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = window.setTimeout(
      () => {
        if (animation.value) {
          animation.value.play()
        }
        timeoutId = null
      },
      1000 / targetFPS - (now - lastFrame),
    )
  }
  lastFrame = now
}

// 5. 添加监控
let frameCount = 0
let lastTime = Date.now()
let performanceCheckId: number | null = null

const checkPerformance = () => {
  //视图不可见 ,停止检测
  if (!isVisible.value) {
    return
  }

  frameCount++
  const currentTime = Date.now()
  const elapsed = currentTime - lastTime

  if (elapsed >= 1000) {
    const fps = frameCount / (elapsed / 1000)
    console.log('fps:', fps)
    if (fps < 20) {
      lottie.setQuality('low')
      targetFPS = 15
    }
    frameCount = 0
    lastTime = currentTime
  }

  // 存储 requestAnimationFrame 的 ID
  performanceCheckId = requestAnimationFrame(checkPerformance)
}

const setupIntersectionObserver = () => {
  if (!containerRef.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries
      isVisible.value = entry.isIntersecting
      console.log('entry:', entry.isIntersecting, animation.value)
      if (entry.isIntersecting && animation.value) {
        animation.value.play()
        performanceCheckId = requestAnimationFrame(checkPerformance)
      } else if (animation.value) {
        animation.value.pause()
        if (performanceCheckId) {
          cancelAnimationFrame(performanceCheckId)
          performanceCheckId = null
        }
      }
    },
    { threshold: 0.1 },
  )

  observer.observe(containerRef.value)
  return () => observer.disconnect()
}

// 6. 清理函数
const cleanup = () => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  animation.value?.removeEventListener('enterFrame', handleEnterFrame)
  animation.value?.destroy()
}

// 保存清理函数
const existingCleanup = cleanupRef.value
cleanupRef.value = () => {
  existingCleanup?.()
  cleanup()
}
// 处理窗口大小变化
const handleResize = () => {
  if (animation.value) {
    const currentFrame = animation.value.currentFrame
    animation.value.destroy()
    loadAnimation()
    animation.value?.goToAndPlay(currentFrame, true)
  }
}

// 使用防抖包装 handleResize
const debouncedResize = debounce(handleResize, 200) // 200ms 延迟

// 生命周期钩子
onMounted(() => {
  loadAnimation()
  window.addEventListener('resize', debouncedResize)

  // 获取 Intersection Observer 的清理函数
  const observerCleanup = setupIntersectionObserver()

  // 保存之前的清理函数
  const existingCleanup = cleanupRef.value

  // 创建新的组合清理函数
  cleanupRef.value = () => {
    existingCleanup?.() // 执行之前的清理函数（iOS 帧率控制的清理）
    observerCleanup?.() // 执行 Observer 的清理
  }
})

onUnmounted(() => {
  cleanupRef.value?.() // 执行所有清理函数
  animation.value?.destroy()
  window.removeEventListener('resize', debouncedResize)
})
</script>

<style scoped lang="scss">
.lottie-view {
  position: relative;
  width: 100%;
  height: 100%;

  .lottie-animation {
    width: 100%;
    height: 100%;
    transform: translateZ(0);
    will-change: transform;
    backface-visibility: hidden;
    perspective: 1000;
    transform-style: preserve-3d;

    svg {
      width: 100%;
      height: 100%;
      transform: translateZ(0);
      will-change: transform;
      filter: blur(0);
    }
  }

  .mask {
    position: absolute;
    right: clamp(12px, calc(19px - 7 / 480 * (1920px - 100vw)), 19px);
    bottom: clamp(12px, calc(18px - 6 / 480 * (1920px - 100vw)), 18px);
    width: clamp(150px, calc(223px - 73 / 480 * (1920px - 100vw)), 223px);
    height: clamp(32px, calc(47px - 15 / 480 * (1920px - 100vw)), 47px);
    background: #f5f5f7;

    @media (min-width: 1921px) {
      right: calc(19 * 100vw / 1920);
      bottom: calc(18 * 100vw / 1920);
      width: calc(223 * 100vw / 1920);
      height: calc(47 * 100vw / 1920);
    }

    @media (max-width: 1440px) {
      right: 12px;
      bottom: 12px;
      width: 150px;
      height: 32px;
    }

    @media (max-width: 834px) {
      right: clamp(8px, calc(12px - 4 / 459 * (1208px - 100vw)), 12px);
      bottom: clamp(7px, calc(12px - 5 / 459 * (1208px - 100vw)), 12px);
      width: clamp(93px, calc(150px - 57 / 459 * (1208px - 100vw)), 150px);
      height: clamp(22px, calc(32px - 10 / 459 * (1208px - 100vw)), 32px);
    }

    @media (max-width: 375px) {
      right: calc(8 * 100vw / 375);
      bottom: calc(7 * 100vw / 375);
      width: calc(93 * 100vw / 375);
      height: calc(22 * 100vw / 375);
    }
  }
}
</style>
