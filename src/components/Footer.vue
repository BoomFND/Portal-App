<script lang="ts" setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const footerAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.footer-wrapper',
      start: 'bottom bottom+=72px',
    },
  })

  tl.from('.footer-wrapper .footer-top-wrapper', {
    opacity: 0,
    y: 100,
    duration: 0.7,
    ease: 'circ.out',
  }).from(
    '.footer-wrapper .footer-bottom-wrapper',
    {
      opacity: 0,
      y: 100,
      duration: 0.7,
      ease: 'circ.out',
    },
    '<=0.2',
  )
}

const goToPerceptron = () => {
  window.open(`https://app.gamerboom.org/`, '_blank')
}

onMounted(() => {
  footerAnimation()
})
</script>

<template>
  <footer class="footer-wrapper">
    <div class="footer-top-wrapper">
      <div class="footer-left-wrapper">
        <div class="info">
          <SvgIcon class="logo" name="logo-word" />
          <div class="title">Start by Following Us</div>
          <div class="desc">Don’t miss out the latest updates. Stay tuned by following us.</div>
        </div>
        <div class="button" @click.prevent="goToPerceptron">
          <SvgIcon name="perceptron" />
          <div class="text">Perceptron Season</div>
        </div>
      </div>
      <div class="footer-right-wrapper">
        <div class="footer-col">
          <div class="text">Home</div>
          <a class="footer-link" @click="goToPerceptron">Perceptron</a>
          <a class="footer-link" href="https://boomofficial.gitbook.io/boom-whitepaper" target="_blank">
            Docs
          </a>
          <a class="footer-link" href="#">Community</a>
        </div>
        <div class="footer-col">
          <div class="text">Social Media</div>
          <a class="footer-link" href="https://x.com/BOOM_FND" target="_blank">
            <SvgIcon name="x" />
            Twitter
          </a>
          <a class="footer-link" href="https://t.me/BoomCommunity_Official" target="_blank">
            <SvgIcon name="telegram" />
            Telegram
          </a>
          <a class="footer-link" href="https://discord.com/invite/boom-official" target="_blank">
            <SvgIcon name="discord" />
            Discord
          </a>
          <a class="footer-link" href="https://boomofficial.medium.com/" target="_blank">
            <SvgIcon name="medium" />
            Medium
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom-wrapper">
      <div class="copyright text">Copyright © 2024 GamerBoom, INC.</div>
      <div class="rights text">All Rights Reserved.</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-wrapper {
  display: flex;
  padding: 0px 64px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  background-color: #fafafc;

  .footer-top-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 80px 0 48px;

    .footer-left-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 48px;
      flex: 1;

      .info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;

        .logo {
          width: 118.403px;
          height: 16px;
        }

        .title {
          color: #1d1d1f;
          font-family: Urbanist;
          font-size: 40px;
          font-style: normal;
          font-weight: 800;
          line-height: 120%;
          letter-spacing: -0.127px;
        }

        .desc {
          color: #1d1d1f;
          font-family: Urbanist;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 144.444%;
          letter-spacing: -0.063px;
        }
      }

      .button {
        position: relative;
        display: flex;
        height: 44px;
        padding: 16px;
        align-items: center;
        gap: 8px;
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
          line-height: 24px;
          /* 133.333% */
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

    .footer-right-wrapper {
      width: 248px;
      display: flex;
      align-items: flex-start;
      gap: 64px;
      flex-shrink: 0;

      .footer-col {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;

        .text {
          margin-bottom: 4px;
          color: rgba(29, 29, 31, 0.88);
          font-family: Urbanist;
          font-size: 16px;
          font-style: normal;
          font-weight: 800;
          line-height: 24px;
          /* 150% */
          letter-spacing: -0.12px;
        }

        .footer-link {
          display: flex;
          align-items: center;
          gap: 6px;
          align-self: stretch;
          color: rgba(29, 29, 31, 0.72);
          font-family: Urbanist;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          text-decoration: none;
          line-height: 24px;
          /* 171.429% */
          letter-spacing: -0.12px;
          cursor: pointer;

          .svg-icon {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
          }
        }
      }
    }
  }

  .footer-bottom-wrapper {
    padding: 24px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-top: 1px solid rgba(29, 29, 31, 0.04);

    .text {
      color: rgba(29, 29, 31, 0.56);
      font-family: Urbanist;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 166.667%;
      /* 166.667% */
      letter-spacing: -0.12px;
    }
  }
}

@media (min-width: 1921px) {
  .footer-wrapper {
    padding: 0 calc(64 * 100vw / 1920);

    .footer-top-wrapper {
      padding: calc(80 * 100vw / 1920) 0 calc(48 * 100vw / 1920);

      .footer-left-wrapper {
        gap: calc(48 * 100vw / 1920);

        .info {
          gap: calc(16 * 100vw / 1920);

          .logo {
            width: calc(118.403 * 100vw / 1920);
            height: calc(16 * 100vw / 1920);
          }

          .title {
            font-size: calc(40 * 100vw / 1920);
            line-height: 120%;
            letter-spacing: calc(-0.127 * 100vw / 1920);
          }

          .desc {
            font-size: calc(18 * 100vw / 1920);
            line-height: 144.444%;
            letter-spacing: calc(-0.063 * 100vw / 1920);
          }
        }

        .button {
          height: calc(44 * 100vw / 1920);
          padding: calc(16 * 100vw / 1920);
          gap: calc(8 * 100vw / 1920);
          border-radius: calc(80 * 100vw / 1920);
          border-width: calc(1.5 * 100vw / 1920);

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

      .footer-right-wrapper {
        width: calc(248 * 100vw / 1920);
        gap: calc(64 * 100vw / 1920);

        .footer-col {
          gap: calc(12 * 100vw / 1920);

          .text {
            margin-bottom: calc(4 * 100vw / 1920);
            font-size: calc(16 * 100vw / 1920);
            line-height: calc(24 * 100vw / 1920);
            letter-spacing: calc(-0.12 * 100vw / 1920);
          }

          .footer-link {
            gap: calc(6 * 100vw / 1920);
            font-size: calc(14 * 100vw / 1920);
            line-height: calc(24 * 100vw / 1920);
            letter-spacing: calc(-0.12 * 100vw / 1920);

            .svg-icon {
              width: calc(16 * 100vw / 1920);
              height: calc(16 * 100vw / 1920);
            }
          }
        }
      }
    }

    .footer-bottom-wrapper {
      padding: calc(24 * 100vw / 1920) 0;

      .text {
        font-size: calc(12 * 100vw / 1920);
        line-height: 166.667%;
        letter-spacing: calc(-0.12 * 100vw / 1920);
      }
    }
  }
}

@media (max-width: 1280px) {
  .footer-wrapper {
    padding: 0 clamp(20px, calc(64px - 44 / 446 * (1280px - 100vw)), 64px);

    .footer-top-wrapper {
      padding-top: clamp(64px, calc(80px - 16 / 446 * (1280px - 100vw)), 80px);
    }
  }
}

@media (max-width: 834px) {
  .footer-wrapper {
    display: flex;
    padding: 0px 20px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;

    .footer-top-wrapper {
      display: flex;
      padding: 64px 0px 24px 0px;
      flex-direction: column;
      align-items: flex-start;
      gap: 48px;
      align-self: stretch;

      .footer-left-wrapper {
        gap: 24px;

        .info {
          gap: 8px;

          .logo {
            width: 88.802px;
            height: 12px;
          }

          .title {
            font-size: 28px;
            line-height: 36px;
          }

          .desc {
            font-size: 14px;
            line-height: 22px;
          }
        }

        .button {
          height: 36px;
          padding: 0px 12px;

          .svg-icon {
            width: 16px;
            height: 16px;
          }

          .text {
            font-size: 14px;
            line-height: 22px;
            /* 133.333% */
          }
        }
      }

      .footer-right-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;

        .footer-col {
          gap: 20px;

          .text {
            margin-bottom: -4px;
          }
        }
      }
    }

    .footer-bottom-wrapper {
      .text {
        font-size: 10px;
        line-height: 200%;
        /* 166.667% */
      }
    }
  }
}
</style>
