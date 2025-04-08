<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const influencingRef = ref(null)

const fadeUpTrigger = () => {
  const fadeUpList = influencingRef.value.querySelectorAll('.fade-up')
  gsap.set(fadeUpList, {
    opacity: 0,
    y: 100
  })
  gsap.to(fadeUpList, {
    y: 0,
    opacity: 1,
    autoAlpha: 1,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.intro',
      start: 'top 80%'
    },
    stagger: 0.05
  })
}

const eventsNumber = reactive({
  value: 0
})
const gamersNumber = reactive({
  value: 0
})
const onchainNumber = reactive({
  value: 0
})

// 格式化数字为千位分隔符格式
const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const rollingNumber = (target, count) => {
  gsap.to(target, {
    value: count,
    duration: 2.5, // 动画持续时间
    scrollTrigger: {
      trigger: '.rolling-trigger',
      start: 'top 70%'
    }
  })
}

onMounted(() => {
  fadeUpTrigger()
  rollingNumber(eventsNumber, 62272)
  rollingNumber(gamersNumber, 821963)
  rollingNumber(onchainNumber, 27155283)
})
</script>

<template>
  <section ref="influencingRef" class="constainer">
    <div class="intro">
      <h1 class="fade-up">We Keep Influencing the World</h1>
      <p class="fade-up">
        We're attracting mainstream Web2 gamers to Web3, ensuring zero barriers to entry.
      </p>
    </div>
    <div class="data rolling-trigger">
      <div class="data-item">
        <div class="data-item__value">
          {{ formatNumber(eventsNumber.value.toFixed(0)) }}
        </div>
        <div class="data-item__label">Incentive Events</div>
      </div>
      <div class="data-item">
        <div class="data-item__value">
          {{ formatNumber(gamersNumber.value.toFixed(0)) }}
        </div>
        <div class="data-item__label">Registered Gamers</div>
      </div>
      <div class="data-item">
        <div class="data-item__value">
          {{ formatNumber(onchainNumber.value.toFixed(0)) }}
        </div>
        <div class="data-item__label">Onchain Transactions</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.constainer {
  padding: 2.34375vw 5.9375vw 0;
  width: 100%;
  // height: 50.885vw;
  background-image: url('@/assets/images/section-2/influencing-bg.svg');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: contain;

  .intro {
    display: inline-flex;
    padding: 0px 16.146vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.083vw;

    h1 {
      color: #fff;
      text-align: center;
      font-family: Urbanist;
      font-size: 3.542vw;
      font-style: normal;
      font-weight: 800;
      line-height: 3.333vw; /* 94.118% */
    }

    p {
      color: #fff;
      text-align: center;
      -webkit-text-stroke-width: 1;
      -webkit-text-stroke-color: rgba(141, 141, 141, 0.02);
      font-family: Urbanist;
      font-size: 1.042vw;
      font-style: normal;
      font-weight: 600;
      line-height: 1.5vw; /* 120% */
    }
  }

  .data {
    margin-top: 4.1667vw;
    padding: 0 5.417vw;
    display: flex;
    justify-content: space-between;

    &-item {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.625vw;

      &:nth-child(2) {
        width: 30.9375vw;
        height: 30.9375vw;
        background-image: url('@/assets/images/section-2/registered-bg.svg');
        background-position: center;
        background-size: cover;
        gap: 1.25vw;

        .data-item__value {
          color: #fff;
          font-size: 4.583vw;
        }

        .data-item__label {
          color: #fff;
          font-size: 1.667vw;
          line-height: 1.5625vw; /* 93.75% */
        }
      }

      &__value {
        min-width: 20.833vw;
      }

      &:nth-child(1),
      &:nth-child(3) {
        padding-top: 2.0833vw;
      }

      &__value {
        color: #8d8d8d;
        text-align: center;
        font-family: Urbanist;
        font-size: 3.33vw;
        font-style: normal;
        font-weight: 800;
        line-height: 112.5%;
      }

      &__label {
        color: #8d8d8d;
        text-align: center;
        font-family: Urbanist;
        font-size: 1.042vw;
        font-style: normal;
        font-weight: 600;
        line-height: 100%;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .constainer {
    padding: 0 4.27vw;
    .intro {
      padding: 0;
      gap: 3.2vw;
      font-size: 6.4vw;

      h1 {
        font-size: 6.4vw;
        line-height: normal;
      }

      p {
        font-size: 3.733vw;
        line-height: normal;
      }
    }

    .data {
      margin-top: 8.533vw;
      padding: 0;

      &-item {
        gap: 1.067vw;

        &:not(:nth-child(2)) {
          flex: 1;
          padding-top: 12vw;
          justify-content: flex-start;

          .data-item__value {
            font-size: 4.267vw;
          }

          .data-item__label {
            width: 21.33vw;
            font-size: 3.2vw;
          }
        }

        &:nth-child(2) {
          width: 41.53vw;
          height: 41.53vw;
          flex-shrink: 0;

          .data-item__value {
            font-size: 6.4vw;
          }

          .data-item__label {
            font-size: 3.73vw;
          }
        }
      }
    }
  }
}
</style>
