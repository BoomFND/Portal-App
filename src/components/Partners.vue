<script lang="ts" setup>
import { Vue3Marquee } from 'vue3-marquee'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const partnerAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.roadmap',
      start: 'bottom top+=372px',
    },
  })

  tl.from('.partners-wrapper .title', {
    opacity: 0,
    y: 68,
    duration: 0.7,
    ease: 'circ.out',
  }).from(
    '.partners-wrapper .card-list',
    {
      opacity: 0,
      y: 72,
      duration: 0.7,
      ease: 'circ.out',
      onComplete() {
        tl.kill()
      },
    },
    '<=0.16',
  )
}

onMounted(() => {
  partnerAnimation()
})
</script>

<template>
  <section class="partners-wrapper">
    <div class="title">Our Partners</div>
    <div class="card-list">
      <Vue3Marquee :duration="40" :pause-on-hover="true">
        <div class="card">
          <SvgIcon name="partner-0" />
        </div>
        <div class="card">
          <SvgIcon name="partner-1" />
        </div>
        <!-- <div class="card">
          <SvgIcon name="partner-2" />
        </div> -->
        <div class="card">
          <SvgIcon name="partner-12" />
        </div>
        <div class="card">
          <SvgIcon name="partner-3" />
        </div>
        <div class="card">
          <SvgIcon name="partner-4" />
        </div>
        <div class="card">
          <SvgIcon name="partner-5" />
        </div>
        <div class="card">
          <SvgIcon name="partner-6" />
        </div>
        <div class="card">
          <SvgIcon name="partner-7" />
        </div>
        <div class="card">
          <SvgIcon name="partner-8" />
        </div>
        <div class="card">
          <SvgIcon name="partner-9" />
        </div>
        <div class="card">
          <SvgIcon name="partner-10" />
        </div>
        <div class="card">
          <SvgIcon name="partner-11" />
        </div>
      </Vue3Marquee>
    </div>
    <div class="w-card-list">
      <div class="row">
        <div class="card">
          <SvgIcon name="partner-0-s" />
        </div>
        <div class="card">
          <SvgIcon name="partner-1-s" />
        </div>
      </div>
      <div class="row">
        <div class="card">
          <SvgIcon name="partner-12-s" />
        </div>
        <div class="card">
          <SvgIcon name="partner-3-s" />
        </div>
      </div>
      <div class="row">
        <div class="card">
          <SvgIcon name="partner-4-s" />
        </div>
        <div class="card">
          <SvgIcon name="partner-5-s" />
        </div>
      </div>
      <div class="row">
        <div class="card">
          <SvgIcon name="partner-6-s" />
        </div>
        <div class="card">
          <SvgIcon name="partner-7-s" />
        </div>
      </div>
      <div class="row">
        <div class="card">
          <SvgIcon name="partner-8-s" />
        </div>
        <div class="card">
          <SvgIcon name="partner-9-s" />
        </div>
      </div>
      <div class="row">
        <div class="card">
          <SvgIcon name="partner-10-s" />
        </div>
        <div class="card">
          <SvgIcon name="partner-11-s" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.partners-wrapper {
  display: flex;
  padding: 120px 0px;
  flex-direction: column;
  align-items: center;
  gap: 160px;
  align-self: stretch;
  overflow: hidden;

  .title {
    color: #1d1d1f;
    text-align: center;
    font-family: Urbanist;
    font-size: 60px;
    font-style: normal;
    font-weight: 800;
    line-height: 68px; /* 113.333% */
    letter-spacing: -1.152px;
  }

  .card-list {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    height: 50px;

    :deep(.marquee) {
      display: flex;
      align-items: center;
    }

    .card {
      display: flex;
      align-items: center;
      margin-right: 120px;

      .svg-icon {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      &:nth-child(1) {
        width: 194.759px;
        height: 36.25px;
      }

      // &:nth-child(2) {
      //   width: 245px;
      //   height: 44px;
      //   flex-shrink: 0;
      // }

      &:nth-child(2) {
        width: 263px;
        height: 121px;
        flex-shrink: 0;
      }

      &:nth-child(3) {
        width: 262px;
        height: 120.714px;
        flex-shrink: 0;
      }

      &:nth-child(4) {
        width: 184.135px;
        height: 51.428px;
        flex-shrink: 0;
      }
      &:nth-child(5) {
        width: 185.265px;
        height: 52.714px;
        flex-shrink: 0;
      }
      &:nth-child(6) {
        width: 165.083px;
        height: 47.857px;
        flex-shrink: 0;
      }

      &:nth-child(7) {
        width: 220.748px;
        height: 30.428px;
        flex-shrink: 0;
      }

      &:nth-child(8) {
        width: 204.762px;
        height: 42.857px;
        flex-shrink: 0;
      }

      &:nth-child(9) {
        width: 205.571px;
        height: 44.626px;
        flex-shrink: 0;
      }

      &:nth-child(10) {
        width: 250.714px;
        height: 51.428px;
        flex-shrink: 0;
      }

      &:nth-child(11) {
        width: 168.266px;
        height: 51.428px;
        flex-shrink: 0;
      }
      &:nth-child(12) {
        width: 168.266px;
        height: 51.428px;
        flex-shrink: 0;
      }
    }
  }

  .w-card-list {
    display: none;
  }
}

@media (min-width: 1921px) {
  .partners-wrapper {
    padding: calc(120 * 100vw / 1920) 0;
    gap: calc(160 * 100vw / 1920);

    .title {
      font-size: calc(60 * 100vw / 1920);
      line-height: calc(68 * 100vw / 1920);
      letter-spacing: calc(-1.152 * 100vw / 1920);
    }

    .card-list {
      height: calc(50 * 100vw / 1920);

      .card {
        margin-right: calc(120 * 100vw / 1920);

        &:nth-child(1) {
          width: calc(194.759 * 100vw / 1920);
          height: calc(36.25 * 100vw / 1920);
        }

        // &:nth-child(2) {
        //   width: calc(245 * 100vw / 1920);
        //   height: calc(44 * 100vw / 1920);
        // }

        &:nth-child(2) {
          width: calc(263 * 100vw / 1920);
          height: calc(121 * 100vw / 1920);
        }

        &:nth-child(3) {
          width: calc(262 * 100vw / 1920);
          height: calc(120 * 100vw / 1920);
        }

        &:nth-child(4) {
          width: calc(184 * 100vw / 1920);
          height: calc(51 * 100vw / 1920);
        }

        &:nth-child(5) {
          width: calc(184.135 * 100vw / 1920);
          height: calc(51.428 * 100vw / 1920);
        }

        &:nth-child(6) {
          width: calc(165 * 100vw / 1920);
          height: calc(47 * 100vw / 1920);
        }

        &:nth-child(7) {
          width: calc(220 * 100vw / 1920);
          height: calc(30 * 100vw / 1920);
        }

        &:nth-child(8) {
          width: calc(204 * 100vw / 1920);
          height: calc(42 * 100vw / 1920);
        }

        &:nth-child(9) {
          width: calc(205 * 100vw / 1920);
          height: calc(44 * 100vw / 1920);
        }

        &:nth-child(10) {
          width: calc(250 * 100vw / 1920);
          height: calc(51 * 100vw / 1920);
        }

        &:nth-child(11) {
          width: calc(168 * 100vw / 1920);
          height: calc(51 * 100vw / 1920);
        }

        &:nth-child(12) {
          width: calc(168 * 100vw / 1920);
          height: calc(51 * 100vw / 1920);
        }
      }
    }
  }
}

@media (max-width: 1280px) {
  .partners-wrapper {
    padding: clamp(40px, calc(120px - 80 / 446 * (1280px - 100vw)), 120px) 0px;
    gap: clamp(64px, calc(160px - 96 / 446 * (1280px - 100vw)), 160px);

    .title {
      font-size: clamp(28px, calc(60px - 32 / 446 * (1280px - 100vw)), 60px);
      line-height: clamp(36px, calc(68px - 32 / 446 * (1280px - 100vw)), 68px);
    }
  }
}

@media (max-width: 834px) {
  .partners-wrapper {
    padding: 40px 0px;
    gap: 64px;

    .title {
      font-size: 28px;
      line-height: 36px;
    }

    .card-list {
      display: none;
    }

    .w-card-list {
      display: flex;
      flex-direction: column;
      align-items: space-between;
      justify-content: center;
      width: 100%;
      gap: 32px;

      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;

        .card {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;

          .svg-icon {
            width: 140px;
            height: 64px;
          }
        }
      }
    }
  }
}
</style>
