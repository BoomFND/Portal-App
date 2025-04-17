<script lang="ts" setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Artboard1Post from '@/assets/video/Artboard1Post.png'

gsap.registerPlugin(ScrollTrigger)

const meetAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.protocol-wrapper',
      start: 'bottom top+=72px',
    },
  })

  tl.from('.meeting-wrapper .title', {
    opacity: 0,
    y: 68,
    duration: 0.7,
    ease: 'circ.out',
  })
    .from(
      '.meeting-wrapper .container',
      {
        opacity: 0,
        y: 72,
        duration: 0.7,
        ease: 'circ.out',
      },
      '<=0.12',
    )
    .from(
      '.meeting-wrapper .container .desc',
      {
        opacity: 0,
        y: 72,
        duration: 1,
        ease: 'circ.out',
      },
      '<=0.26',
    )
    .from(
      '.meeting-wrapper .container .button',
      {
        opacity: 0,
        y: 72,
        duration: 1,
        ease: 'circ.out',
      },
      '<=0.2',
    )
    .from(
      '.meeting-wrapper .container .map-wrapper',
      {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'circ.out',
        onComplete() {
          tl.kill()
        },
      },
      '<=0.14',
    )
}

const goToGamerFun = () => {
  // return
  // prod:https://pump.gamerboom.org/
  // uat:https://testing-fun.gamerboom.org/
  window.open('https://x.com/GhostAI_G', '_black')
}

const isHover = ref(false)

const videoRef = ref<HTMLVideoElement | null>(null)
const isVideoLoaded = ref(false)

const handleVideoLoaded = () => {
  if (videoRef.value) {
    videoRef.value.playbackRate = 0.8
    videoRef.value.play().catch((error) => {
      console.error('Play failed:', error)
    })
  }
}

const handleCanPlay = async () => {
  if (videoRef.value) {
    try {
      videoRef.value.muted = true
      await videoRef.value.play()
      isVideoLoaded.value = true
    } catch (error) {
      console.error('Auto-play failed:', error)
    }
  }
}

onMounted(() => {
  meetAnimation()
  if (videoRef.value) {
    videoRef.value.playbackRate = 0.8
    videoRef.value.play().catch((error) => {
      console.error('Mount play failed:', error)
    })
  }
})
</script>

<template>
  <section class="meeting-wrapper">
    <div class="title">Entry Portal & AI Agents: <br />Where Gaming Meets AI</div>
    <div class="container">
      <div class="content-block">
        <div class="desc">
          Dive into the Entry Portal, grab rewards on your gaming adventure! Craft and own your<span> AI Gaming Agents</span>, and get started by following the Ghost Girl!
        </div>
        <div
          class="button"
          @click="goToGamerFun"
          title="coming soon"
          @mouseover="isHover = true"
          @mouseleave="isHover = false"
        >
          <template v-if="!isHover">
            <!-- <SvgIcon name="agent" /> -->
            <div class="text">Know More</div>
          </template>
          <template v-else>
            <div class="text">Know More</div>
          </template>
        </div>
      </div>
      <div class="map-wrapper">
        <video
          class="map-tree"
          :poster="Artboard1Post"
          loop
          muted
          playsinline
          webkit-playsinline
          :x5-playsinline="true"
          :controls="false"
          ref="videoRef"
          @loadeddata="handleVideoLoaded"
          @canplay="handleCanPlay"
        >
          <source src="@/assets/video/Artboard1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.meeting-wrapper {
  width: 100%;
  padding: 0px clamp(32px, calc(64px - 32 / 480 * (1920px - 100vw)), 64px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;
  align-self: stretch;
  .map-tree {
    width: 100%;
    height: 100%;
  }
  .title {
    color: #1d1d1f;
    font-family: Urbanist;
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: 113.333%; /* 113.333% */
    letter-spacing: -1.152px;
  }

  .container {
    display: flex;
    width: 100%;
    // height: clamp(624px, calc(829px - 205 / 480 * (1920px - 100vw)), 829px);
    padding: 12px 60px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 32px;
    background: #f5f5f7;
    border-radius: 32px;
    background: #f5f5f7;

    .content-block {
      display: flex;
      width: clamp(428px, calc(538px - 110 / 480 * (1920px - 100vw)), 538px);
      flex-direction: column;
      align-items: flex-start;
      gap: 80px;

      .desc {
        color: #1d1d1f;
        font-family: Urbanist;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 125%; /* 125% */
        letter-spacing: 0.128px;

        span {
          font-weight: 700;
        }
      }

      .button {
        display: flex;
        width: 215px;
        height: 44px;
        padding: 0px;
        justify-content: center;
        align-items: center;
        gap: 8px;
        border-radius: 80px;
        border: 1.5px solid #1d1d1f;
        cursor: pointer;
        overflow: hidden;
        position: relative;

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
        }

        &:hover::after {
          background: rgba(255, 255, 255, 0.1);
        }

        &:active::after {
          background: rgba(29, 29, 31, 0.1);
        }
      }
    }

    .map-wrapper {
      width: clamp(600px, calc(900px - 300 / 480 * (1920px - 100vw)), 900px);
      height: clamp(600px, calc(900px - 300 / 480 * (1920px - 100vw)), 900px);

      .svg-icon {
        width: 100%;
        height: 100%;
      }
    }
  }
}

@media (min-width: 1921px) {
  .meeting-wrapper {
    padding: 0px calc(64 * 100vw / 1920);
    gap: calc(80 * 100vw / 1920);

    .title {
      font-size: calc(60 * 100vw / 1920);
      letter-spacing: calc(-1.152 * 100vw / 1920);
    }

    .container {
      padding: calc(12 * 100vw / 1920) calc(60 * 100vw / 1920) calc(12 * 100vw / 1920)
        calc(120 * 100vw / 1920);
      border-radius: calc(32 * 100vw / 1920);

      .content-block {
        width: calc(538 * 100vw / 1920);
        gap: calc(80 * 100vw / 1920);

        .desc {
          font-size: calc(32 * 100vw / 1920);
          letter-spacing: calc(0.128 * 100vw / 1920);
        }

        .button {
          width: calc(215 * 100vw / 1920);
          height: calc(44 * 100vw / 1920);
          border-radius: calc(80 * 100vw / 1920);
          border: calc(1.5 * 100vw / 1920) solid #1d1d1f;

          .svg-icon {
            width: calc(24 * 100vw / 1920);
            height: calc(24 * 100vw / 1920);
          }

          .text {
            font-size: calc(18 * 100vw / 1920);
            line-height: calc(24 * 100vw / 1920);
          }
        }
      }

      .map-wrapper {
        width: calc(900 * 100vw / 1920);
        height: calc(900 * 100vw / 1920);
      }
    }
  }
}

@media (max-width: 1440px) {
  .meeting-wrapper {
    .container {
      // padding-left: clamp(60px, calc(120px - 60 / 160 * (1440px - 100vw)), 120px);

      .content-block {
        width: 428px;
      }

      .map-wrapper {
        width: 600px;
        height: 600px;
      }
    }
  }
}

@media (max-width: 1280px) {
  .meeting-wrapper {
    padding: 0 clamp(0px, calc(32px - 32 / 446 * (1280px - 100vw)), 32px);

    .title {
      font-size: clamp(28px, calc(60px - 32 / 446 * (1280px - 100vw)), 60px);
    }
  }
}

@media (max-width: 1208px) {
  .meeting-wrapper {
    .title {
      padding-left: calc(32px - clamp(0px, calc(32px - 32 / 374 * (1208px - 100vw)), 32px));
    }

    .container {
      display: flex;
      padding: 32px 20px;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      align-self: stretch;

      .content-block {
        width: 100%;
        align-items: center;
        gap: clamp(24px, calc(80px - 56 / 374 * (1208px - 100vw)), 80px);

        .desc {
          text-align: center;
          font-size: clamp(16px, calc(32px - 16 / 374 * (1208px - 100vw)), 32px);
          line-height: 150%; /* 150% */
        }
      }
    }
  }
}

@media (max-width: 834px) {
  .meeting-wrapper {
    .title {
      margin: 0 auto;
      font-size: 28px;
      text-align: center;
      padding-left: 0;
    }
    .container {
      flex-direction: column;
      padding: 32px 20px;
      gap: 24px;
      border-radius: 0;

      .map-tree {
        width: 100%;
        height: 100%;
      }

      .map-wrapper {
        width: clamp(375px, calc(600px - 225 / 459 * (1208px - 100vw)), 600px);
        height: clamp(375px, calc(600px - 225 / 459 * (1208px - 100vw)), 600px);
      }
    }
  }
}

@media (max-width: 375px) {
  .meeting-wrapper .container .map-wrapper {
    width: 100vw;
    height: 100vw;
  }
}

.map-tree {
  &::-webkit-media-controls,
  &::-webkit-media-controls-panel,
  &::-webkit-media-controls-play-button,
  &::-webkit-media-controls-start-playback-button,
  &::-webkit-media-controls-enclosure,
  &::-webkit-media-controls-overlay-enclosure,
  &::-webkit-media-controls-overlay-play-button,
  &::-webkit-media-controls-timeline,
  &::-webkit-media-controls-current-time-display,
  &::-webkit-media-controls-time-remaining-display,
  &::-webkit-media-controls-time-remaining-display,
  &::-webkit-media-controls-mute-button,
  &::-webkit-media-controls-toggle-closed-captions-button,
  &::-webkit-media-controls-volume-slider,
  &::-webkit-media-controls-fullscreen-button {
    display: none !important;
  }

  &::-webkit-media-controls-timeline-container {
    display: none !important;
  }

  &::-webkit-media-controls-container,
  &::-webkit-media-controls-seek-back-button,
  &::-webkit-media-controls-seek-forward-button,
  &::-webkit-media-controls-rewind-button,
  &::-webkit-media-controls-return-to-realtime-button,
  &::-webkit-media-controls-toggle-closed-captions-button,
  &::-webkit-media-controls-closed-captions-container,
  &::-webkit-media-controls-status-display,
  &::-webkit-media-controls-volume-control-container,
  &::-webkit-media-controls-volume-control-hover-background,
  &::-webkit-media-controls-volume-control-slider-container,
  &::-webkit-media-controls-volume-slider-container,
  &::-webkit-media-controls-wireless-playback-text-button {
    display: none !important;
  }

  -webkit-tap-highlight-color: transparent;
  user-select: none;
  pointer-events: none;
}
</style>
