<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SvgIcon from './SvgIcon.vue'
import { ref } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const SLIDE_SIZE = 8
const GAP_WIDTH = 24
const MAX_MARGIN_WIDTH = 64
const MIN_MARGIN_WIDTH = 20
const MAX_SLIDER_WIDTH = 405
const MIN_SLIDER_WIDTH = 260
const MAX_SLIDER_HEIGHT = 740
const MIN_SLIDER_HEIGHT = 400
const carouselRef = ref()
const currentIndex = ref(4)
const maxSliderIndex = ref(0)

const sliderItemWidth = ref(0)

const calcSliderItemWidth = () => {
  if (window.innerWidth > 1920) {
    sliderItemWidth.value = (window.innerWidth * MAX_SLIDER_WIDTH) / 1920 //`${(MAX_SLIDER_WIDTH * 100) / 1920}vw`
  } else if (window.innerWidth >= 1280) {
    sliderItemWidth.value = MAX_SLIDER_WIDTH
  } else if (window.innerWidth <= 834) {
    sliderItemWidth.value = MIN_SLIDER_WIDTH
  } else {
    sliderItemWidth.value =
      MAX_SLIDER_WIDTH -
      ((MAX_SLIDER_WIDTH - MIN_SLIDER_WIDTH) / (1280 - 834)) * (1280 - window.innerWidth)
  }
}

const sliderItemHeight = ref(0)

const calcSliderItemHeight = () => {
  if (window.innerWidth > 1920) {
    sliderItemHeight.value = (window.innerWidth * MAX_SLIDER_HEIGHT) / 1920
  } else if (window.innerWidth >= 1280) {
    sliderItemHeight.value = MAX_SLIDER_HEIGHT
  } else if (window.innerWidth <= 834) {
    sliderItemHeight.value = MIN_SLIDER_HEIGHT
  } else {
    sliderItemHeight.value =
      MAX_SLIDER_HEIGHT -
      ((MAX_SLIDER_HEIGHT - MIN_SLIDER_HEIGHT) / (1280 - 834)) * (1280 - window.innerWidth)
  }
}

const marginWidth = ref(0)

const calcMarginWidth = () => {
  if (window.innerWidth > 1920) {
    marginWidth.value = (window.innerWidth * MAX_MARGIN_WIDTH) / 1920
  } else if (window.innerWidth >= 1280) {
    marginWidth.value = MAX_MARGIN_WIDTH
  } else if (window.innerWidth <= 834) {
    marginWidth.value = MIN_MARGIN_WIDTH
  } else {
    marginWidth.value =
      MAX_MARGIN_WIDTH -
      ((MAX_MARGIN_WIDTH - MIN_MARGIN_WIDTH) / (1280 - 834)) * (1280 - window.innerWidth)
  }
}

// 添加新的状态变量
const isDragging = ref(false)
const startX = ref(0)
const dragThreshold = 50 // 触发切换的最小拖动距离

// 修改 carousel 配置，禁用默认拖动
const config = reactive({
  itemsToShow: 3,
  itemsToScroll: 1,
  snapAlign: 'start',
  breakpointMode: 'carousel',
  mouseDrag: false, // 禁用默认的鼠标拖动
  touchDrag: false, // 禁用默认的触摸拖动
  gap: GAP_WIDTH,
})
const calcItemsToShow = () => {
  config.itemsToShow =
    (carouselRef.value.$el.clientWidth + GAP_WIDTH) / (sliderItemWidth.value + GAP_WIDTH)

  maxSliderIndex.value = Math.ceil(SLIDE_SIZE - config.itemsToShow)
}

const roadmapAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.game-wrapper .game-carousel',
      start: 'bottom top+=372px',
    },
  })

  tl.from('.roadmap .heading-block .title', {
    opacity: 0,
    y: 68,
    duration: 0.7,
    ease: 'circ.out',
  })
    .from(
      '.roadmap .heading-block .actions',
      {
        opacity: 0,
        y: 68,
        duration: 0.7,
        ease: 'circ.out',
      },
      '<=0.23',
    )
    .from(
      '.roadmap .slider-wrapper .slider-item',
      {
        opacity: 0,
        y: 72,
        duration: 0.7,
        ease: 'circ.out',
        stagger: 0.1,
        onComplete() {
          tl.kill()
        },
      },
      '<=0.28',
    )
}

const roadmapItems = ref([
  {
    time: 'Q4 2023',
    title: 'Prototyping <br /> & Internal Testing',
    icon: 'finished',
    texts: ['Official website rebrand', 'Internal test of Portal App'],
    status: 'finished', // 标记状态
  },
  {
    time: 'Q1 2024',
    title: 'Genesis Testing',
    icon: 'finished',
    texts: ['Genesis Testing of Portal App', 'Expand partnership network', 'Genesis NFT Sale'],
    status: 'finished',
  },
  {
    time: 'Q2 2024',
    title: 'Growth Hacking',
    icon: 'finished',
    texts: ['Esports Contests & UGC Sharing', 'Referral Growth Network', 'Hybrid Account Syste'],
    status: 'finished',
  },
  {
    time: 'Q3 2024',
    title: 'Base & Solana  <br /> Integration', // 分开处理带图标的标题
    icon: 'finished',
    texts: [
      'Base Onchain Summer Buildathon',
      'Solana Deployment & Testing',
      'Ecosystem Partners Onboarding',
    ],
    status: 'finished', // 标记进行中
  },
  {
    time: 'Q4  2024',
    title: 'Binance MVB & BNB <br /> Chain Integration',
    titleIcon: 'bnc',
    titleTagText: 'Binance MVB',
    icon: 'finished',
    texts: ['Binance MVB Vlll Program', 'BNB Chain Deployment & Testing', 'Solana Al Hackathon'],
    status: 'inProgress', // 标记状态
  },
  {
    time: 'Q1  2025',
    title: 'Al Tagging <br /> & Agent Building',
    icon: 'sword',
    texts: [
      'Al Agent Launchpad Testing',
      'Al Data Tagging System Testing',
      'Perceptron NFT Sale',
      'X Based Al Agent Launch',
    ],
    status: 'finished', // 标记状态
  },
  {
    time: 'Q2 2025',
    title: 'Mainnet Release <br /> & Growth',
    icon: 'sun',
    texts: [
      'Mainnet Testing and Release',
      'Supported Game Portfolio Expansion',
      'Agent Launchpad BoomFun Launch',
    ],
    status: 'finished',
    // isFutureClass: true, // 标记需要 'future' 类
  },
  {
    time: 'Q3-Q4 2025',
    title: 'Open Ecosystem & <br />Growth',
    icon: 'continue',
    texts: [
      'Multi-Chain Integration &',
      'Interoperability',
      'Open Developer Tools & SDK',
      'Open Gaming Ecosystem Building',
    ],
    status: 'future',
    isFutureClass: true, // 标记需要 'future' 类
  },
])

const handleCardHoverAnimation = (event: MouseEvent, isEntering: boolean) => {
  const card = event.currentTarget as HTMLElement
  if (isEntering) {
    gsap.to(card, {
      scale: 1.0161290323,

      // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      duration: 0.3,
      ease: 'cubic-bezier(0, 0, 0.5, 1)',
    })
  } else {
    gsap.to(card, {
      scale: 1,
      boxShadow: 'none',
      duration: 0.3,
      ease: 'cubic-bezier(0, 0, 0.5, 1)',
    })
  }
}

const resetCarousels = () => {
  calcSliderItemWidth()
  calcSliderItemHeight()
  calcMarginWidth()
  calcItemsToShow()
}

onMounted(() => {
  roadmapAnimation()
  calcSliderItemWidth()
  calcSliderItemHeight()
  calcMarginWidth()
  calcItemsToShow()
  // 监听窗口大小变化
  window.addEventListener('resize', resetCarousels)
})

onUnmounted(() => {
  window.removeEventListener('resize', resetCarousels)
})

const handlePrev = () => {
  if (currentIndex.value === 0) return
  carouselRef.value.prev()
}

const handleNext = () => {
  if (currentIndex.value === maxSliderIndex.value) return
  carouselRef.value.next()
}

// 添加拖动处理函数
const handleDragStart = (e: MouseEvent | TouchEvent) => {
  isDragging.value = true
  startX.value = 'touches' in e ? e.touches[0].clientX : e.clientX
}

const handleDragMove = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return

  const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX
  const diff = currentX - startX.value

  if (Math.abs(diff) >= dragThreshold) {
    if (diff > 0 && currentIndex.value > 0) {
      handlePrev()
    } else if (diff < 0 && currentIndex.value < maxSliderIndex.value) {
      handleNext()
    }
    isDragging.value = false
  }
}

const handleDragEnd = () => {
  isDragging.value = false
}

watch(
  () => currentIndex.value,
  (newV) => {
    if (newV === maxSliderIndex.value) {
      carouselRef.value.$el.style.setProperty('margin-left', `0`)
      carouselRef.value.$el.style.setProperty('margin-right', `${marginWidth.value}px`)
    } else if (newV === 0) {
      carouselRef.value.$el.style.setProperty('margin-left', `${marginWidth.value}px`)
      carouselRef.value.$el.style.setProperty('margin-right', `0`)
    } else {
      carouselRef.value.$el.style.setProperty('margin-left', `0`)
      carouselRef.value.$el.style.setProperty('margin-right', `0`)
    }
  },
)
</script>

<template>
  <section class="roadmap">
    <div class="heading-block">
      <div class="title">Roadmap</div>
      <div class="actions">
        <div class="prev" :class="{ disabled: currentIndex <= 0 }" @click="handlePrev">
          <SvgIcon name="next" />
        </div>
        <div class="next" :class="{ disabled: currentIndex >= maxSliderIndex }" @click="handleNext">
          <SvgIcon name="next" />
        </div>
      </div>
    </div>
    <Carousel
      ref="carouselRef"
      v-model="currentIndex"
      class="slider-wrapper"
      :style="{
        '--slider-item-width': `${sliderItemWidth}px`,
        '--slider-item-height': `${sliderItemHeight}px`,
      }"
      v-bind="config"
      @mousedown="handleDragStart"
      @mousemove="handleDragMove"
      @mouseup="handleDragEnd"
      @mouseleave="handleDragEnd"
      @touchstart="handleDragStart"
      @touchmove="handleDragMove"
      @touchend="handleDragEnd"
    >
      <Slide v-for="(item, index) in roadmapItems" :key="index">
        <div
          class="slider-item"
          :class="{ future: item.isFutureClass }"
          @mouseenter="(event) => handleCardHoverAnimation(event, true)"
          @mouseleave="(event) => handleCardHoverAnimation(event, false)"
        >
          <div class="info-wrapper">
            <div class="s-time">{{ item.time }}</div>
            <div class="s-title">
              <span v-html="item.title"></span>
              <div class="tag" v-if="item.titleIcon">
                <SvgIcon :name="item.titleIcon" />
                <div class="text">{{ item.titleTagText }}</div>
              </div>
            </div>
          </div>
          <div class="card-icon">
            <SvgIcon :name="item.icon" />
          </div>
          <div class="text-wrapper">
            <div
              v-for="(textItem, textIndex) in item.texts"
              :key="textIndex"
              class="text"
              :class="{ grey: typeof textItem === 'object' && textItem.grey }"
            >
              · {{ typeof textItem === 'string' ? textItem : textItem.text }}
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
  </section>
</template>

<style lang="scss" scoped>
.roadmap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;
  align-self: stretch;
  // overflow: hidden;

  .heading-block {
    padding: 0 64px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    align-self: stretch;

    .title {
      font-family: Urbanist;
      font-size: 60px;
      color: #1d1d1f;
      font-style: normal;
      font-weight: 800;
      line-height: 68px; /* 113.333% */
      letter-spacing: -1.152px;
    }

    .actions {
      display: flex;
      width: 92px;
      justify-content: space-between;
      align-items: center;

      .prev,
      .next {
        position: relative;
        display: flex;
        width: 36px;
        height: 36px;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        border-radius: 36px;
        background: rgba(210, 210, 215, 0.64);
        cursor: pointer;

        .svg-icon {
          width: 100%;
          height: 100%;
          color: rgba(29, 29, 31, 0.56);
        }

        &::after {
          content: ' ';
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        }

        &:not(.disabled):hover::after {
          background: rgba(255, 255, 255, 0.3);
        }

        &:not(.disabled):active {
          background: rgba(29, 29, 31, 0.1);
        }

        &.disabled {
          opacity: 0.42;
          cursor: not-allowed;
        }
      }

      .prev {
        transform: rotate(180deg);
      }
    }
  }

  .slider-wrapper {
    display: flex;
    align-items: center;
    gap: 24px;
    align-self: stretch;
    margin-left: 64px;

    :deep(.carousel__track) {
      height: calc(var(--slider-item-height, 740px) * 1.0165);
    }

    .slider-item {
      display: flex;
      flex-direction: column;
      width: var(--slider-item-width, 405px);
      height: var(--slider-item-height, 740px);
      padding: 31.961px;
      align-items: center;
      gap: 9.988px;
      border-radius: 32px;
      background: #f5f5f7;
      flex-shrink: 0;
      color: #1d1d1f;
      font-family: Urbanist;
      font-style: normal;
      cursor: pointer;

      .info-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 11.986px;
        align-self: stretch;

        .s-time {
          font-size: 16px;
          font-weight: 800;
          line-height: 24px; /* 150% */
          letter-spacing: -0.374px;
        }

        .s-title {
          font-size: 28px;
          text-align: left;
          font-weight: 800;
          line-height: 36px; /* 128.571% */
          letter-spacing: 0.196px;

          .tag {
            margin-top: 8px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 16px;
            border-radius: 120px;
            background: #f0b90b;

            .svg-icon {
              width: 24px;
              height: 24px;
            }

            .text {
              color: #1d1d1f;
              font-size: 22px;
              font-weight: 800;
              line-height: 136.364%;
              letter-spacing: 0.196px;
            }
          }
        }
      }

      .card-icon {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 120px;

        .svg-icon {
          width: 100%;
          height: 100%;
        }
      }

      .text-wrapper {
        display: flex;
        height: 92px;
        flex-direction: column;
        justify-content: flex-end;
        align-self: stretch;

        font-size: 18px;
        text-align: left;
        font-weight: 500;
        line-height: 26px; /* 144.444% */
        letter-spacing: 0.228px;
      }

      &.current {
        background: #1d1d1f;
        color: #fff;

        .text.grey {
          color: #86868b;
        }
      }

      &.future {
        color: #86868b;
      }
    }
  }
}

@media (min-width: 1921px) {
  .roadmap {
    gap: calc(80 * 100vw / 1920);

    .heading-block {
      padding: 0 calc(64 * 100vw / 1920);

      .title {
        font-size: calc(60 * 100vw / 1920);
        line-height: calc(68 * 100vw / 1920);
        letter-spacing: calc(-1.152 * 100vw / 1920);
      }

      .actions {
        width: calc(92 * 100vw / 1920);

        .prev,
        .next {
          width: calc(36 * 100vw / 1920);
          height: calc(36 * 100vw / 1920);
          border-radius: calc(36 * 100vw / 1920);
        }
      }
    }

    .slider-wrapper {
      gap: calc(24 * 100vw / 1920);
      margin-left: calc(64 * 100vw / 1920);

      .slider-item {
        width: calc(405 * 100vw / 1920);
        height: calc(740 * 100vw / 1920);
        padding: calc(31.961 * 100vw / 1920);
        gap: calc(9.988 * 100vw / 1920);
        border-radius: calc(32 * 100vw / 1920);

        .info-wrapper {
          gap: calc(11.986 * 100vw / 1920);

          .s-time {
            font-size: calc(16 * 100vw / 1920);
            line-height: calc(24 * 100vw / 1920);
            letter-spacing: calc(-0.374 * 100vw / 1920);
          }

          .s-title {
            font-size: calc(28 * 100vw / 1920);
            line-height: calc(36 * 100vw / 1920);
            letter-spacing: calc(0.196 * 100vw / 1920);
          }
        }

        .card-icon {
          width: calc(120 * 100vw / 1920);
          height: calc(120 * 100vw / 1920);
        }

        .text-wrapper {
          height: calc(92 * 100vw / 1920);
          font-size: calc(18 * 100vw / 1920);
          line-height: calc(26 * 100vw / 1920);
          letter-spacing: calc(0.228 * 100vw / 1920);
        }
      }
    }
  }
}

@media (max-width: 1280px) {
  .roadmap {
    gap: 40px;

    .heading-block {
      padding: 0px clamp(20px, calc(64px - 44 / 446 * (1280px - 100vw)), 64px);
      .title {
        font-size: clamp(28px, calc(60px - 32 / 446 * (1280px - 100vw)), 60px);
        line-height: clamp(36px, calc(68px - 32 / 446 * (1280px - 100vw)), 68px); /* 128.571% */
      }
    }

    .slider-wrapper {
      margin-left: clamp(20px, calc(64px - 44 / 446 * (1280px - 100vw)), 64px);

      .slider-item {
        padding: 32px clamp(24px, calc(32px - 8 / 446 * (1280px - 100vw)), 32px);
        border-radius: clamp(24px, calc(32px - 8 / 446 * (1280px - 100vw)), 32px);

        .info-wrapper {
          gap: clamp(8px, calc(12px - 4 / 446 * (1280px - 100vw)), 12px);

          .s-time {
            font-size: clamp(14px, calc(16px - 2 / 446 * (1280px - 100vw)), 16px);
            line-height: clamp(22px, calc(24px - 2 / 446 * (1280px - 100vw)), 24px); /* 150% */
          }

          .s-title {
            font-size: clamp(22px, calc(28px - 6 / 446 * (1280px - 100vw)), 28px);
            line-height: clamp(30px, calc(36px - 6 / 446 * (1280px - 100vw)), 36px); /* 128.571% */
          }
        }

        .card-icon {
          width: clamp(80px, calc(120px - 40 / 446 * (1280px - 100vw)), 120px);
          height: clamp(80px, calc(120px - 40 / 446 * (1280px - 100vw)), 120px);
        }

        .text-wrapper {
          height: clamp(88px, calc(92px - 4 / 446 * (1280px - 100vw)), 92px);

          font-size: clamp(14px, calc(18px - 4 / 446 * (1280px - 100vw)), 18px);
          line-height: clamp(22px, calc(18px - 4 / 446 * (1280px - 100vw)), 26px); /* 144.444% */
        }
      }
    }
  }
}

@media (max-width: 834px) {
  .roadmap {
    gap: 40px;

    .heading-block {
      padding: 0px 20px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      align-self: stretch;

      .title {
        font-size: 28px;
        line-height: 36px; /* 128.571% */
      }
    }

    .slider-wrapper {
      margin-left: 20px;

      .slider-item {
        width: 260px;
        height: 400px;
        padding: 32px 24px;
        border-radius: 24px;

        .info-wrapper {
          gap: 8px;

          .s-time {
            font-size: 14px;
            line-height: 22px; /* 150% */
          }

          .s-title {
            font-size: 22px;
            line-height: 30px; /* 128.571% */
          }
        }

        .card-icon {
          width: 80px;
          height: 80px;
        }

        .text-wrapper {
          height: 88px;

          font-size: 14px;
          line-height: 22px; /* 144.444% */
        }
      }
    }
  }
}
</style>
