<script setup>
import { gsap } from 'gsap'

const active = ref('')

const toggleActive = (social) => {
  active.value = social

  // TODO: 跳转三方social平台
}

const openWebPage = () => {
  const webUrl = import.meta.env.VITE_APP_WEB
  window.open(webUrl, '_blank')
}

const initAnimation = () => {
  gsap.from('.header', {
    opacity: 0,
    y: -112,
    duration: 1,
    ease: 'power3.out'
  })
}

onMounted(() => {
  initAnimation()
})
</script>

<template>
  <header class="header w-header">
    <a href="/" class="logo brand">
      <SvgIcon name="logo" />
    </a>

    <nav class="nav__menu w-nav__menu">
      <div class="left__wrapper">
        <a class="nav__link">HOME</a>
        <a class="nav__link">
          DOCS
          <SvgIcon name="docs"></SvgIcon>
        </a>
      </div>
      <div class="right__wrapper">
        <div class="social__wrapper">
          <a href="#" class="social__link" @click="toggleActive('twitter')">
            <SvgIcon name="social-twitter"></SvgIcon>
          </a>
          <a href="#" class="social__link" @click="toggleActive('discord')">
            <SvgIcon name="social-discord"></SvgIcon>
          </a>
          <a href="#" class="social__link" @click="toggleActive('telegram')">
            <SvgIcon name="social-telegram"></SvgIcon>
          </a>
        </div>
        <div class="nav__button_wrapper">
          <a class="button inline-block" @click="openWebPage">
            <div class="button__text">open dashboard</div>
            <SvgIcon name="right" />
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 32px;
  z-index: 99;
  padding: 16px 24px;
  display: flex;
  flex-shrink: 0;
  border-radius: 40px;
  background: rgba(#090c0f, 0.6);
  box-shadow: 0px 0px 32px 0px #1c1c1c;
  backdrop-filter: blur(50px);

  @media screen and (min-width: 1024px) {
    left: clamp(40px, 5.347vw, 77px);
    right: clamp(40px, 5.347vw, 77px);
  }

  @media screen and (min-width: 1440px) {
    left: clamp(77px, 7.5vw, 144px);
    right: clamp(77px, 7.5vw, 144px);
  }

  @media screen and (min-width: 1920px) {
    height: 80px;
  }

  .brand {
    display: flex;
    align-items: center;

    .svg-icon {
      flex-shrink: 0;
      width: clamp(83.175px, 22.18vw, 124.762px);
      height: clamp(16px, 4.267vw, 24px);

      @media screen and (min-width: 1024px) {
        width: clamp(124.762px, 13.61vw, 195.765px);
        height: clamp(24px, 2.639vw, 37.659px);
      }

      @media screen and (min-width: 1440px) {
        width: 195.765px;
        height: 37.659px;
      }
    }
  }

  .nav {
    &__menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
    }

    &__link {
      margin-left: 40px;
      display: inline-flex;
      align-items: center;
      height: clamp(32px, 4.297vw, 44px);
      font-size: 14px;
      font-weight: 800;
      color: #8d8d8d;
      line-height: clamp(32px, 4.297vw, 44px); /* 100% */
      text-transform: uppercase;
      gap: 4px;

      @media screen and (min-width: 1024px) {
      }

      @media screen and (min-width: 1440px) {
        margin-left: 80px;
        font-size: 14.4px;
        font-weight: 900;
      }

      &:hover {
        color: #fff;
      }
    }

    &__button_wrapper {
      margin-left: 80px;
      width: clamp(180px, 18.555vw, 190px);
      height: clamp(32px, 4.297vw, 44px);
      flex-shrink: 0;
      border-radius: 40px;
      background: #fff;

      @media screen and (min-width: 1024px) {
        margin-left: 40px;
      }

      @media screen and (min-width: 1440px) {
        margin-left: 80px;
      }

      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        height: 100%;
      }

      .button__text {
        color: #0f1012;
        text-align: center;
        font-family: Urbanist;
        font-size: 14px;
        font-style: normal;
        font-weight: 900;
        line-height: 12px; /* 85.714% */
        letter-spacing: 0.24px;
        text-transform: uppercase;
        pointer-events: none;
      }
    }
  }

  .right__wrapper {
    display: flex;
    align-items: center;
  }

  .social {
    &__wrapper {
      display: flex;
      height: min(4.297vw, 44px);
    }

    &__link {
      display: flex;
      justify-content: center;
      color: #8d8d8d;
      align-items: center;
      font-size: 24px;

      @media screen and (min-width: 1024px) {
        font-size: 20px;
      }

      @media screen and (min-width: 1440px) {
        font-size: 24px;
      }

      &:hover,
      &.active {
        color: #fff;
      }

      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .w-nav__menu {
      justify-content: flex-end;
      flex-wrap: nowrap;

      .right__wrapper {
        display: none;
      }
    }
  }

  @media screen and (max-width: 1023px) {
    &.w-header {
      top: clamp(12px, 3.2vw, 32px);
      left: clamp(15px, 3.906vw, 40px);
      right: clamp(15px, 3.906vw, 40px);
      height: clamp(32px, 8.533vw, 60px);
    }
    .w-nav__menu .social__wrapper {
      display: none;
    }
  }
}
</style>
