<script setup>
import { gsap } from 'gsap'

const initAnimation = () => {
  console.log('hello')
  gsap.from(['.left h1', '.left p', '.left .button'], {
    opacity: 0,
    y: -900,
    duration: 1.5,
    ease: 'power3.out',
    stagger: 0.05
  })
  gsap.to('.right', {
    rotation: -12, // 向左旋转 12 度
    duration: 1, // 动画持续时间
    ease: 'power1.inOut' // 动画缓动效果
  })
}

onMounted(() => {
  initAnimation()
})
</script>

<template>
  <section class="portal-intro">
    <div class="left">
      <h1>A Portal Empowering Real Gamers</h1>
      <p>
        GamerBoom is the world’s first incentive layer and data-mining protocol that aims to
        democratize gaming data from billions of gamers by deep AI integration.
      </p>
      <div class="button">
        <img src="@/assets/images/section-1/windows.svg" alt="" />
        <span class="button__text">Get Started</span>
      </div>
    </div>
    <div class="right">
      <!-- <img src="@/assets/images/portal-bg-3.svg" alt="" /> -->
      <div class="image-wrapper">
        <img src="@/assets/images/section-1/game-1.png" alt="" />
      </div>
      <div class="image-wrapper">
        <img src="@/assets/images/section-1/game-2.png" alt="" />
      </div>
      <div class="image-wrapper">
        <img src="@/assets/images/section-1/game-3.png" alt="" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.portal-intro {
  position: relative;
  display: flex;
  width: 100%;
  min-height: 73.021vw;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 807px;
    height: 1323px;
    background-image: url('@/assets/images/section-1/portal-bg-1.svg');
    background-position: top left;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }

  .left {
    position: relative;
    padding-top: 18.91vw;
    padding-left: 5.9375vw;
    width: 45.9375vw;
    flex-shrink: 0;
    z-index: 9;

    h1 {
      width: 31.875vw;
      color: #fff;
      font-family: Urbanist;
      font-size: 4.479vw;
      font-style: normal;
      font-weight: 800;
      line-height: 120%; /* 103.2px */
    }

    p {
      margin-top: 2.083vw;
      width: 32.917vw;
      color: #fff;
      -webkit-text-stroke-width: 1;
      -webkit-text-stroke-color: rgba(141, 141, 141, 0.02);
      font-family: Urbanist;
      font-size: 1.042vw;
      font-style: normal;
      font-weight: 600;
      line-height: 1.25vw; /* 120% */
    }

    .button {
      margin-top: 3.333vw;
      width: 8.4375vw;
      height: 2.292vw;
    }
  }

  .right {
    display: flex;
    flex: 1;
    background-image: url('@/assets/images/section-1/portal-bg-3.svg');
    background-position: bottom left;
    background-repeat: no-repeat;
    background-size: cover;

    .image-wrapper {
      overflow: hidden;
      &:nth-child(1),
      &:nth-child(3) {
        margin-top: 23.958vw;
        margin-left: 1.25vw;
        width: 16.146vw;
        height: 24.6875vw;
      }

      &:nth-child(2) {
        margin-top: 14.0625vw;
        width: 22.083vw;
        height: 33.125vw;
      }

      &:nth-child(2),
      &:nth-child(3) {
        margin-left: 0.729vw;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: bottom;
      }
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/images/section-1/portal-bg-2.svg');
    background-position: top left;
    background-size: cover;
    background-repeat: no-repeat;
  }
}

@media screen and (max-width: 479px) {
  .portal-intro {
    flex-direction: column;
    align-items: center;
    // height: 397px;

    &::before {
      width: 64.533vw;
      height: 106.67vw;
    }

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding-top: 22.933vw;
      padding-left: 0;
      text-align: center;

      h1 {
        width: 100%;
        font-size: 8.533vw;
      }

      p {
        margin-top: 6.4vw;
        width: 72.8vw;
        font-size: 3.73vw;
        font-weight: 600;
        line-height: normal;
        -webkit-text-stroke-width: 1;
        -webkit-text-stroke-color: rgba(141, 141, 141, 0.02);
      }

      .button {
        margin-top: 10.667vw;
        width: 50.667vw;
        height: 11.733vw;
        border-radius: 10.667vw;
        gap: 2.133vw;

        &__text {
          font-size: 3.733vw;
        }
      }
    }

    .right {
      width: 100%;
      height: 149.33vw;
      margin-top: -13.33vw;
      padding: 0 10px;
      background-size: contain;
      flex: none;
      transform: rotate(-12deg);

      .image-wrapper {
        overflow: hidden;
        &:nth-child(1),
        &:nth-child(3) {
          margin-top: 65.6vw;
          margin-left: 0;
          width: 29.33vw;
          height: 42.667vw;
        }

        &:nth-child(2) {
          margin-top: 50.667vw;
          width: 38.667vw;
          height: 58.667vw;
        }

        &:nth-child(2),
        &:nth-child(3) {
          margin-left: 4vw;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: bottom;
        }
      }
    }
  }
}
</style>
