<script lang="ts" setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const protocolAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero-wrapper',
      start: 'bottom top+=72px',
    },
  })

  tl.from('.protocol-wrapper .heading-block', {
    opacity: 0,
    y: 68,
    duration: 0.7,
    ease: 'circ.out',
  }).from(
    '.protocol-wrapper .card-list .card',
    {
      opacity: 0,
      y: 68,
      duration: 0.7,
      ease: 'circ.out',
      stagger: 0.1,
      onComplete() {
        tl.kill()
      },
    },
    '<=0.12',
  )
}

const handleCardHoverAnimation = (event: MouseEvent, isEnter: boolean) => {
  const card = event.currentTarget as HTMLElement
  if (isEnter) {
    gsap.to(card, {
      scale: 1.0148148148,
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

onMounted(() => {
  protocolAnimation()
})
</script>

<template>
  <section class="protocol-wrapper">
    <div class="heading-block">
      <div class="title">The First AI Driven <br />Gaming Data Protocol</div>
      <div class="w-title">The First AI Driven Gaming Data Protocol</div>
      <div class="slogan">Booming Games, Infinite Fun</div>
    </div>
    <div class="card-list">
      <div
        class="card"
        @mouseenter="(event) => handleCardHoverAnimation(event, true)"
        @mouseleave="(event) => handleCardHoverAnimation(event, false)"
      >
        <SvgIcon name="cube" />
        <div class="title">Lowest Barrier to <br />Entry for Gamers</div>
        <div class="w-title">Lowest Barrier to Entry for Gamers</div>
        <div class="desc">
          Directly overlaid on mainstream game interfaces, entry barriers for gamers are slashed via
          the gamified workflow.
        </div>
      </div>
      <div
        class="card"
        @mouseenter="(event) => handleCardHoverAnimation(event, true)"
        @mouseleave="(event) => handleCardHoverAnimation(event, false)"
      >
        <SvgIcon name="ai" />
        <div class="title">
          Gamified Incentive <br />
          Layer & AI Tagging
        </div>
        <div class="w-title">Gamified Incentive Layer & AI Tagging</div>
        <div class="desc">
          Popular Web2 games are enhanced with a fun and rewarding overlay, with gaming data
          smoothly aggregated through the AI - driven data tagging system.
        </div>
      </div>
      <div
        class="card"
        @mouseenter="(event) => handleCardHoverAnimation(event, true)"
        @mouseleave="(event) => handleCardHoverAnimation(event, false)"
      >
        <SvgIcon name="game" />
        <div class="title">Broad Compatibility <br />with Most Games</div>
        <div class="w-title">Broad Compatibility with Most Games</div>
        <div class="desc">
          Potentially compatible with most mainstream games, enabling GamerBoom to seamlessly
          onboard 3.2 billion global gamers.
        </div>
      </div>
      <div
        class="card"
        @mouseenter="(event) => handleCardHoverAnimation(event, true)"
        @mouseleave="(event) => handleCardHoverAnimation(event, false)"
      >
        <SvgIcon name="data" />
        <div class="title">Open Ecosystem <br />for Gaming Data</div>
        <div class="w-title">Open Ecosystem for Gaming Data</div>
        <div class="desc">
          An open ecosystem will be built upon game-related AI data, covering the IAO platform, game
          prediction market, decentralized advertising market and DePIN platform.
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.protocol-wrapper {
  padding: 120px clamp(32px, calc(64px - 32 / 480 * (1920px - 100vw)), 64px);

  .heading-block {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    align-self: stretch;

    .title,
    .w-title {
      color: #1d1d1f;
      font-family: Urbanist;
      font-size: 60px;
      font-style: normal;
      font-weight: 800;
      line-height: 68px; /* 113.333% */
      letter-spacing: -1.152px;
    }

    .w-title {
      display: none;
    }

    .slogan {
      color: #1d1d1f;
      text-align: right;
      font-family: Urbanist;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 25px; /* 156.25% */
      letter-spacing: -0.374px;
    }
  }

  .card-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 24px;
    margin-top: 80px;

    .card {
      display: flex;
      padding: 40px 48px;
      flex-direction: column;
      flex: 1 0 0;
      border-radius: 32px;
      background: #f5f5f7;
      cursor: pointer;

      .svg-icon {
        width: 44px;
        height: 44px;
        flex-shrink: 0;
        color: #1d1d1f;
      }

      .title,
      .w-title {
        margin-top: 40px;
        color: #1d1d1f;
        font-family: Urbanist;
        font-size: 28px;
        font-style: normal;
        font-weight: 800;
        line-height: 36px; /* 128.571% */
        letter-spacing: 0.196px;
      }

      .w-title {
        display: none;
      }

      .desc {
        margin-top: 16px;
        color: #1d1d1f;
        font-family: Urbanist;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px; /* 150% */
        letter-spacing: -0.374px;
      }
    }
  }
}

@media (min-width: 1921px) {
  .protocol-wrapper {
    padding: calc(120 * 100vw / 1920) calc(64 * 100vw / 1920);

    .heading-block {
      .title,
      .w-title {
        font-size: calc(60 * 100vw / 1920);
        line-height: calc(68 * 100vw / 1920);
        letter-spacing: calc(-1.152 * 100vw / 1920);
      }

      .slogan {
        font-size: calc(16 * 100vw / 1920);
        line-height: calc(25 * 100vw / 1920);
        letter-spacing: calc(-0.374 * 100vw / 1920);
      }
    }

    .card-list {
      grid-column-gap: calc(24 * 100vw / 1920);
      margin-top: calc(80 * 100vw / 1920);

      .card {
        padding: calc(40 * 100vw / 1920) calc(48 * 100vw / 1920);
        border-radius: calc(32 * 100vw / 1920);

        .svg-icon {
          width: calc(44 * 100vw / 1920);
          height: calc(44 * 100vw / 1920);
        }

        .title {
          margin-top: calc(40 * 100vw / 1920);
          font-size: calc(28 * 100vw / 1920);
          line-height: calc(36 * 100vw / 1920);
          letter-spacing: calc(0.196 * 100vw / 1920);
        }

        .desc {
          margin-top: calc(16 * 100vw / 1920);
          font-size: calc(16 * 100vw / 1920);
          line-height: calc(24 * 100vw / 1920);
          letter-spacing: calc(-0.374 * 100vw / 1920);
        }
      }
    }
  }
}

@media (max-width: 1280px) {
  .protocol-wrapper {
    padding: clamp(64px, calc(64px - 56 / 446 * (1280px - 100vw)), 120px)
      clamp(20px, calc(32px - 12 / 446 * (1280px - 100vw)), 32px);

    .card-list {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 24px;
      column-gap: 24px;

      .card {
        padding: 32px 32px;

        .title {
          display: none;
        }

        .w-title {
          display: block;
        }
      }
    }
  }
}

@media (max-width: 834px) {
  .protocol-wrapper {
    padding: 64px 20px;

    .heading-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      align-self: stretch;

      .title {
        display: none;
      }
      .w-title {
        display: block;
        color: #1d1d1f;
        text-align: center;
        font-family: Urbanist;
        font-size: 28px;
        font-style: normal;
        font-weight: 800;
        line-height: 36px; /* 128.571% */
      }
    }

    .card-list {
      margin-top: 24px;
      grid-template-columns: repeat(1, 1fr);
      row-gap: 24px;
      column-gap: 24px;

      .card {
        padding: 32px 24px;

        .svg-icon {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
        }

        .title {
          display: none;
        }
        .w-title {
          margin-top: 24px;
          display: block;
          font-size: 20px;
          line-height: 28px;
        }

        .desc {
          font-size: 14px;
          line-height: 22px; /* 157.143% */
        }
      }
    }
  }
}
</style>
