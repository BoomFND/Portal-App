<script lang="ts" setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import posterUrl from '@/assets/images/poster.jpg'
gsap.registerPlugin(ScrollTrigger)

const videoRef = ref<HTMLVideoElement>()
const isPlaying = ref(true)
const isMuted = ref(true)
const isLoaded = ref(false)
const showTip = ref(true)
const isBuffering = ref(false)
/**
 * hero模块动画
 */
const heroAnimation = () => {
  const tl = gsap.timeline()
  tl.from('.hero-wrapper .hero-info .title', {
    opacity: 0,
    y: 68,
    duration: 1,
    delay: 0.34,
    ease: 'circ.out',
  })
    .from(
      ['.hero-wrapper .hero-info .button, .hero-wrapper .hero-info .link'],
      {
        opacity: 0,
        y: 72,
        duration: 0.88,
        ease: 'circ.out',
      },
      '<=0.12',
    )
    .from(
      '.hero-wrapper .video-wrapper',
      {
        opacity: 0,
        y: 72,
        duration: 0.74,
        ease: 'circ.out',
        onComplete() {
          tl.kill()
        },
      },
      '<=0.14',
    )
}

/**
 * 视频动画
 */

const videoAnimation = () => {
  const isMobile = window.innerWidth <= 958

  gsap.fromTo(
    '.video-wrapper',
    {
      padding: '0px 0px',
      clipPath: 'inset(0px 0% 0px 0% round 0px)',
      transform: 'matrix(1, 0, 0, 1, 0, 0)',
    },
    {
      scrollTrigger: {
        trigger: '.hero-wrapper',
        start: 'top top',
        end: isMobile ? '+=300' : '+=500',
        scrub: 1,
      },
      clipPath: isMobile
        ? 'inset(0px 0% 0px 0% round clamp(16px, calc(32px - 16 / 124 * (958px - 100vw)), 32px))'
        : 'inset(0px 0% 0px 0% round 32px)',
      transform: 'matrix(0.957346, 0, 0, 0.957346, 0, 0)',
      ease: 'none',
    },
  )
}

/**
 * 跳转到dashboard
 */
const goToPerceptron = () => {
  window.open(`https://app.gamerboom.org/`, '_blank')
}

const goToAboutPerceptron = () => {
  window.open(
    'https://gamerboom.medium.com/perceptron-nft-the-key-to-ai-driven-gaming-innovation-540b75456ec6',
    '_blank',
  )
}

const togglePlay = () => {
  if (!videoRef.value || !isLoaded.value) return
  if (videoRef.value.paused) {
    videoRef.value.play()
    isPlaying.value = true
  } else {
    videoRef.value.pause()
    isPlaying.value = false
  }
}

const toggleMute = async () => {
  if (!videoRef.value) return
  isMuted.value = !isMuted.value
  videoRef.value.muted = isMuted.value

  if (!isMuted.value) {
    try {
      await videoRef.value.play()
    } catch (e) {
      // 如果无法播放有声视频，回退到静音
      isMuted.value = true
      videoRef.value.muted = true
    }
  }
}

const handleLoadedMetadata = () => {
  isLoaded.value = true
}

const handleCanPlay = async () => {
  if (!videoRef.value) return

  try {
    // 先确保静音
    videoRef.value.muted = true
    isMuted.value = true

    // 尝试播放
    await videoRef.value.play()
    isPlaying.value = true

    // 显示提示用户点击开启声音
    showTip.value = true

    // 3秒后隐藏提示
    setTimeout(() => {
      showTip.value = false
    }, 3000)
  } catch (error) {
    console.error('Muted autoplay failed:', error)
  }
}

const handleWaiting = () => {
  isBuffering.value = true
}

const handlePlaying = () => {
  isBuffering.value = false
}

// 检测是否是移动设备
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

onMounted(() => {
  heroAnimation()
  videoAnimation()
  if ('connection' in navigator && (navigator as any).connection?.saveData) {
    return
  }
  if (isMobile) {
    // 移动端默认静音自动播放
    isMuted.value = true
  }
})
</script>

<template>
  <section class="hero-wrapper">
    <div class="hero-info">
      <div class="title">
        <div class="text">A Portal Empowering</div>
        <div class="text">Real Gamers</div>
      </div>
      <div class="actions">
        <div class="button" @click="goToPerceptron">
          <SvgIcon name="perceptron" />
          <div class="text">Perceptron Season</div>
        </div>
        <div class="link" @click="goToAboutPerceptron">
          <div class="text">About Perceptron</div>
          <SvgIcon name="forward" />
        </div>
      </div>
    </div>
    <div class="video-wrapper">
      <div v-if="!isLoaded" class="video-skeleton">
        <img :src="posterUrl" alt="video poster" class="poster" />
        <div class="loading-indicator"></div>
      </div>

      <video
        ref="videoRef"
        class="hero-video"
        preload="metadata"
        :muted="isMuted"
        :poster="posterUrl"
        playsinline
        loop
        :autoplay="true"
        @click="togglePlay"
        @loadedmetadata="handleLoadedMetadata"
        @canplay="handleCanPlay"
        @waiting="handleWaiting"
        @playing="handlePlaying"
        :class="{ 'is-loaded': isLoaded }"
      >
        <source src="https://cdn.gamerboom.org/gamerboom/video/hero.mp4" type="video/mp4" />
      </video>

      <div v-if="isBuffering" class="buffering-indicator">
        <div class="loading-spinner"></div>
      </div>

      <div class="video-controls" v-show="isLoaded">
        <button
          class="control-btn"
          @click.stop="toggleMute"
          @mouseenter="showTip = true"
          @mouseleave="showTip = false"
        >
          <SvgIcon :name="isMuted ? 'volume-mute' : 'volume'" />
          <div class="tooltip" v-show="showTip && isMuted">Click to unmute</div>
        </button>

        <button class="control-btn" @click.stop="togglePlay">
          <SvgIcon :name="isPlaying ? 'pause' : 'play'" />
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-wrapper {
  margin-top: 252px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  align-self: stretch;

  .hero-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    align-self: stretch;

    .title {
      color: #1d1d1f;
      text-align: center;
      font-family: Urbanist;
      font-size: 96px;
      font-style: normal;
      font-weight: 800;
      line-height: 108.333%; /* 108.333% */

      .text {
        font-weight: 800;
      }
    }

    .actions {
      display: flex;
      gap: 32px;

      @media (max-width: 958px) {
        flex-direction: column;
        gap: 16px;
        width: 100%;
        align-items: center;

        .button,
        .link {
          width: 100%;
          max-width: 320px;
          justify-content: center;
        }
      }

      .link {
        display: flex;
        height: 44px;
        padding: 0px 16px;
        justify-content: center;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        overflow: hidden;

        .svg-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        .text {
          color: #1d1d1f;
          font-feature-settings:
            'ss01' on,
            'cv01' on;
          font-family: Urbanist;
          font-size: 18px;
          font-style: normal;
          font-weight: 800;
          line-height: 24px; /* 133.333% */
        }
      }
    }

    .button {
      position: relative;
      display: flex;
      height: 44px;
      padding: 0px 16px;
      justify-content: center;
      align-items: center;
      gap: 12px;
      border-radius: 80px;
      border: 1.5px solid #1d1d1f;
      cursor: pointer;
      overflow: hidden;

      .svg-icon {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
      }

      .text {
        color: #1d1d1f;
        font-feature-settings:
          'ss01' on,
          'cv01' on;
        font-family: Urbanist;
        font-size: 18px;
        font-style: normal;
        font-weight: 800;
        line-height: 24px; /* 133.333% */
      }

      &:hover::after,
      &:active::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 80px;
      }

      &:hover::after {
        background: rgba(255, 255, 255, 0.15);
      }

      &:active::after {
        background: rgba(29, 29, 31, 0.1);
      }
    }
  }

  .video-wrapper {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-self: stretch;
    background-color: rgba(#000, 0.56);
    overflow: hidden;
    padding: 0px 0px;
    clip-path: inset(0px 0% 0px 0% round 0px);
    will-change: padding, clip-path;

    .video-skeleton {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .poster {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .loading-indicator {
        width: 40px;
        height: 40px;
        border: 3px solid rgba(255, 255, 255, 0.3);
        border-top-color: #fff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        z-index: 1;
      }
    }

    .hero-video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0;
      transition: opacity 0.3s;

      &.is-loaded {
        opacity: 1;
      }
    }

    .video-controls {
      position: absolute;
      bottom: 40px;
      right: 40px;
      display: flex;
      gap: 12px;
      opacity: 0;
      transition: opacity 0.2s;

      .control-btn {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: rgb(232, 232, 237);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
        position: relative;

        .svg-icon {
          width: 16px;
          height: 16px;
          color: rgba(0, 0, 0, 0.56);
        }

        &:hover {
          background: #ececf0;
        }

        .tooltip {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.75);
          color: white;
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 14px;
          white-space: nowrap;
          pointer-events: none;

          &::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%);
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 4px solid rgba(0, 0, 0, 0.75);
          }
        }
      }
    }

    &:hover .video-controls {
      opacity: 1;
    }
  }
}

@media (min-width: 1921px) {
  .hero-wrapper {
    margin-top: calc(252 * 100vw / 1920);
    gap: calc(100 * 100vw / 1920);

    .hero-info {
      gap: calc(80 * 100vw / 1920);

      .title {
        font-size: calc(96 * 100vw / 1920);

        .text {
          font-size: calc(96 * 100vw / 1920);
        }
      }

      .actions {
        gap: calc(32 * 100vw / 1920);

        .link {
          height: calc(44 * 100vw / 1920);
          padding: 0px calc(16 * 100vw / 1920);
          gap: calc(12 * 100vw / 1920);

          .svg-icon {
            width: calc(20 * 100vw / 1920);
            height: calc(20 * 100vw / 1920);
          }

          .text {
            font-size: calc(18 * 100vw / 1920);
            line-height: calc(24 * 100vw / 1920);
          }
        }
      }

      .button {
        height: calc(44 * 100vw / 1920);
        padding: 0px calc(16 * 100vw / 1920);
        gap: calc(12 * 100vw / 1920);
        border-radius: calc(80 * 100vw / 1920);

        .svg-icon {
          width: calc(24 * 100vw / 1920);
          height: calc(24 * 100vw / 1920);
        }

        .text {
          font-size: calc(18 * 100vw / 1920);
          line-height: 133.333%; /* Restore to percentage */
        }
      }
    }

    .video-wrapper {
      .video-controls {
        bottom: calc(40 * 100vw / 1920);
        right: calc(40 * 100vw / 1920);

        .control-btn {
          height: calc(36 * 100vw / 1920);
          width: calc(36 * 100vw / 1920);
          margin: calc(40 * 100vw / 1920) 0 0 0;

          .svg-icon {
            height: calc(20 * 100vw / 1920);
            width: calc(20 * 100vw / 1920);
          }
        }
      }
    }
  }
}

@media (max-width: 958px) {
  .hero-wrapper {
    margin-top: clamp(128px, calc(252px - (958px - 100vw)), 252px);
    padding: 0px clamp(0px, calc(32px - 32 / 124 * (958px - 100vw)), 32px);

    .hero-info {
      gap: clamp(40px, calc(80px - 40 / 124 * (958px - 100vw)), 80px);
      .title {
        font-size: clamp(48px, calc(96px - 48 / 124 * (958px - 100vw)), 96px);
        .text {
          &:first-child {
            font-size: clamp(22px, calc(96px - 74 / 124 * (958px - 100vw)), 96px);
          }
        }
      }

      .actions {
        gap: calc(32 * 100vw / 1920);

        .link {
          height: clamp(36px, calc(44px - 8 / 124 * (958px - 100vw)), 44px);
          gap: calc(12 * 100vw / 1920);

          .svg-icon {
            width: clamp(16px, calc(20px - 4 / 124 * (958px - 100vw)), 20px);
            height: clamp(16px, calc(20px - 4 / 124 * (958px - 100vw)), 20px);
          }

          .text {
            font-size: clamp(14px, calc(18px - 4 / 124 * (958px - 100vw)), 18px);
            line-height: clamp(16px, calc(24px - 6 / 124 * (958px - 100vw)), 24px);
          }
        }
      }

      .button {
        height: clamp(36px, calc(44px - 8 / 124 * (958px - 100vw)), 44px);

        .svg-icon {
          width: clamp(16px, calc(24px - 8 / 124 * (958px - 100vw)), 24px);
          height: clamp(16px, calc(24px - 8 / 124 * (958px - 100vw)), 24px);
        }

        .text {
          font-size: clamp(14px, calc(18px - 4 / 124 * (958px - 100vw)), 18px);
        }
      }
    }
  }

  .video-wrapper {
    .video-controls {
      .control-btn {
        width: 48px;
        height: 48px;

        .svg-icon {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.buffering-indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3); // 半透明背景

  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
}
</style>
