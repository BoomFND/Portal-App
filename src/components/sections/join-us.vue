<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const joinusRef = ref(null)

const fadeUpTrigger = () => {
  const el = gsap.utils.toArray(joinusRef.value.querySelectorAll('.fade-up'))
  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: 100
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el
      },
      stagger: 0.05
    }
  )
}

onMounted(() => {
  fadeUpTrigger()
})
</script>

<template>
  <section ref="joinusRef" class="join-us">
    <div class="title fade-up">Be Part of Boomers</div>
    <div class="desc fade-up">Join our community</div>
    <div class="button fade-up">
      <img src="@/assets/images/section-7/discord.svg" alt="" />
      <div class="button__text">Join our Discord</div>
    </div>
    <div class="socials fade-up">
      <SvgIcon name="social-twitter" />
      <SvgIcon name="social-telegram" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.join-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 18.4375vw;
  width: 100%;
  min-height: 41.771vw;
  background-image: url('@/assets/images/section-7/joinus-bg.svg'),
    url('@/assets/images/section-7/bg-2.svg');
  background-position: center, center;
  background-size: contain, contain;
  background-repeat: no-repeat, no-repeat;

  .title {
    margin-top: 9.167vw;
    color: #fff;
    text-align: center;
    font-family: Urbanist;
    font-size: 3.542vw;
    font-style: normal;
    font-weight: 800;
    line-height: 94.118%;
  }

  .desc {
    margin-top: 1.042vw;
    color: #fff;
    text-align: center;
    -webkit-text-stroke-width: 1;
    -webkit-text-stroke-color: rgba(141, 141, 141, 0.02);
    font-family: Urbanist;
    font-size: 1.042vw;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }

  .button {
    margin-top: 3.333vw;
    width: 10.677vw;
    height: 2.292vw;
    flex-shrink: 0;

    font-size: 0.833vw;
  }

  .socials {
    margin-top: 1.979vw;
    display: flex;
    gap: 2.083vw;

    svg {
      width: 1.146vw;
      height: 1.146vw;
      color: #8d8d8d;
      cursor: pointer;

      &:hover {
        color: #fff;
      }
    }
  }
}

@media (max-width: 768px) {
  .join-us {
    margin-top: 21.33vw;

    .title {
      font-size: 6.4vw;
    }

    .desc {
      margin-top: 3.2vw;
      font-size: 3.733vw;
    }

    .button {
      margin-top: 6.4vw;
      width: 51.73vw;
      height: 11.733vw;
      border-radius: 21.33vw;

      .button__text {
        font-size: 3.733vw;
      }
    }

    .socials {
      margin-top: 6.4vw;
      gap: 10.667vw;

      svg {
        width: 6.4vw;
        height: 6.4vw;
      }
    }
  }
}
</style>
