<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const colors = ['green', 'blue', 'purple', 'red', 'gold']

const activeIndex = ref(0)
const activeColor = computed(() => {
  return colors[Math.floor(Math.random() * colors.length)]
})

const videoRef = ref(null)

const toggleItem = (index) => {
  activeIndex.value = index
  const fadeUpDoms = highlightsRef.value.querySelectorAll('.item')

  gsap.from(fadeUpDoms[index], {
    opacity: 0,
    y: 100,
    duration: 0.5,
    end: () => {
      nextTick(() => {
        if (videoRef.value) {
          // videoRef.value?.pause()
          // videoRef.value?.load()
          videoRef.value?.play()
        }
      })
    }
  })
}

const highlightsRef = ref(null)

const fadeTrigger = () => {
  const fadeLeftDom = highlightsRef.value.querySelector('.fade-left')
  const fadeUpDoms = highlightsRef.value.querySelectorAll('.fade-up')

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.highlights',
      start: 'top 80%'
    }
  })

  tl.from(fadeLeftDom, {
    opacity: 0,
    // x: 100,
    y: 60,
    duration: 0.5
  }).from(fadeUpDoms, {
    opacity: 0,
    y: 100,
    duration: 0.5,
    stagger: 0.05,
    end: () => {
      nextTick(() => {
        if (videoRef.value) {
          // videoRef.value?.pause()
          // videoRef.value?.load()
          videoRef.value?.play()
        }
      })
    }
  })
}

onMounted(() => {
  fadeTrigger()
})
</script>

<template>
  <section ref="highlightsRef" class="highlights">
    <div class="title fade-left">Product Highlights</div>
    <div class="wrapper">
      <div class="list w-highlight-list">
        <div class="item" :class="{ active: activeIndex === 0 }" @click="toggleItem(0)">
          <div class="dot grey fade-up" :class="[activeColor]"></div>
          <div class="content">
            <h1 class="fade-up">Data Mining in Real-Time</h1>
            <p class="fade-up" v-if="activeIndex === 0">
              Unlock the true value of gaming by mining data gold as you play your favorite games.
              Transform every session into a productive, value-generating activity.
            </p>
            <p v-else></p>
            <video
              ref="videoRef"
              src="@/assets/videos/1.mp4"
              preload="auto"
              controls
              autoplay
              muted
              loop
            ></video>
          </div>
        </div>
        <div class="item" :class="{ active: activeIndex === 1 }" @click="toggleItem(1)">
          <div class="dot grey fade-up" :class="[activeColor]"></div>
          <div class="content">
            <h1 class="fade-up">Monetization Through Curation Network</h1>
            <p class="fade-up" v-if="activeIndex === 1">
              Leverage our transparent curation network to monetize your gaming data. This system
              not only empowers players to earn from their gaming skills and strategies but also
              ensures fair compensation for their contributions.
            </p>
            <p v-else></p>
            <video
              ref="videoRef"
              src="@/assets/videos/2.mp4"
              preload="auto"
              controls
              autoplay
              muted
              loop
            ></video>
          </div>
        </div>
        <div class="item" :class="{ active: activeIndex === 2 }" @click="toggleItem(2)">
          <div class="dot grey fade-up" :class="[activeColor]"></div>
          <div class="content">
            <h1 class="fade-up">Authenticate Your Gaming Achievements</h1>
            <p class="fade-up" v-if="activeIndex === 2">
              With GamerBoom, prove the authenticity of your gaming experiences. Our platform
              validates and records your gaming milestones on the blockchain, providing irrefutable
              evidence of your achievements.
            </p>
            <p v-else></p>
            <video
              ref="videoRef"
              src="@/assets/videos/3.mp4"
              preload="auto"
              controls
              autoplay
              muted
              loop
            ></video>
          </div>
        </div>
        <div class="images fade-up w-highlight-video">
          <video
            v-if="activeIndex === 0"
            ref="videoRef"
            src="@/assets/videos/1.mp4"
            preload="auto"
            controls
            autoplay
            muted
            loop
          ></video>
          <video
            v-if="activeIndex === 1"
            ref="videoRef"
            src="@/assets/videos/2.mp4"
            preload="auto"
            controls
            autoplay
            muted
            loop
          ></video>
          <video
            v-if="activeIndex === 2"
            ref="videoRef"
            src="@/assets/videos/3.mp4"
            preload="auto"
            controls
            autoplay
            muted
            loop
          ></video>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.highlights {
  margin-top: 4.6875vw;
  padding: 0 5.9375vw;

  .title {
    margin-bottom: 4.167vw;
    width: 100%;
    text-align: right;
    color: #fff;
    font-family: Urbanist;
    font-size: 3.542vw;
    font-weight: 800;
    line-height: 94.118%;
  }
  .item {
    display: flex;
    gap: 0.833vw;
    padding-top: 2.083vw;
    padding-bottom: 0.8854vw;
    border-top: 2px solid #1c1c1c;
    cursor: pointer;

    .dot {
      margin-top: -1px;
      width: 1.25vw;
      height: 1.25vw;
      border-radius: 50% 50%;

      &.grey {
        background: linear-gradient(180deg, #8d8d8d 0%, #8d8d8d 100%);
      }
    }

    .content {
      display: flex;
      width: 31.25vw;
      padding-bottom: 0.4167vw;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.667vw;

      h1 {
        color: #8d8d8d;
        font-family: Urbanist;
        font-size: 1.25vw;
        font-style: normal;
        font-weight: 800;
        line-height: 93.75%;
      }

      p {
        width: 100%;
        min-height: 3.75vw;
        color: #fff;
        font-family: Urbanist;
        font-size: 1.042vw;
        font-style: normal;
        font-weight: 600;
        line-height: 120%;
      }
    }

    &.active {
      padding-bottom: 4.583vw;
      h1 {
        color: #fff;
        font-size: 1.667vw;
      }

      .dot {
        &.green {
          background: linear-gradient(180deg, #4adc9f 0%, #00a846 100%);
        }

        &.blue {
          background: linear-gradient(180deg, #3fd9ff 0%, #0096ba 100%);
        }

        &.purple {
          background: linear-gradient(180deg, #a762ff 0%, #8f37ff 100%);
        }

        &.red {
          background: linear-gradient(180deg, #ff7a50 0%, #ff3232 100%);
        }

        &.gold {
          background: linear-gradient(180deg, #ffe261 0%, #d3a500 100%);
        }
      }
    }
  }

  .list {
    position: relative;

    &.w-highlight-list .item video {
      display: none;
      opacity: 0;
      visibility: hidden;
    }
  }

  .images {
    position: absolute;
    bottom: 3.385vw;
    right: 0;
    width: 41.875vw;
    height: auto;
    border-radius: 1.667vw;
    background-color: #090c0f;
    background-image: url('@/assets/images/section-3/highlight-image.svg');
    background-position: 0 0;
    background-size: 100%;
    overflow: hidden;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@media screen and (max-width: 768px) {
  .highlights {
    margin-top: 21.33vw;
    padding: 0 4.267vw;

    .title {
      margin-bottom: 6.4vw;
      font-size: 6.4vw;
    }

    .list {
      .item {
        gap: 3.2vw;
        padding: 4.267vw 0;

        .dot {
          width: 4.8vw;
          height: 4.8vw;
        }

        .content {
          flex: 1;
          padding-bottom: 0;

          h1 {
            font-size: 3.73vw;
          }

          p {
            margin-top: 4.267vw;
            font-size: 3.73vw;
            line-height: normal;
          }
        }

        &.active {
          video {
            margin-top: 4.267vw;
            width: 100%;
            display: block;
            opacity: 1;
            visibility: visible;
            border-radius: 6.4vw;
          }
        }
      }
    }

    .w-highlight-video {
      display: none;
      visibility: hidden;
      opacity: 0;
    }
  }
}

@media screen and (min-width: 768px) {
  .w-highlight-video {
    display: block;
    visibility: visible;
    opacity: 1;
  }
}
</style>
