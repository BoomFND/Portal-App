<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const newsRightRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.news',
      start: 'top 70%'
    }
  })
  const fadeUpDoms = newsRightRef.value.querySelectorAll('.fade-up')

  tl.from('.news__left', {
    opacity: 0,
    // x: -200,
    y: 60,
    duration: 0.5
  })
    .from(
      '.news__right',
      {
        opacity: 0,
        // x: 200,
        y: 60,
        duration: 0.5
      },
      '<'
    )
    .from(fadeUpDoms, {
      opacity: 0,
      y: 60,
      duration: 0.5,
      stagger: 0.15
    })
})
</script>

<template>
  <section class="news w-news">
    <div class="news__left">
      <img src="@/assets/images/section-5/image-left.svg" alt="" />
    </div>
    <div ref="newsRightRef" class="news__right">
      <div class="block__header fade-up">
        <div class="block__title">
          <div class="dot red"></div>
          <div class="block__title-text">News</div>
        </div>
        <div class="block__logo">
          <img src="@/assets/images/section-5/okx.svg" alt="" />
        </div>
      </div>
      <div class="block__content">
        <div class="block__content-title fade-up">
          Tokens are Going Multichain, and it’s Getting Easier
        </div>
        <div class="block__content-desc fade-up">
          Called the Interchain Token Service (ITS), the new tool maintains the fungibility and
          properties of any ERC-20 token, while allowing them to move across any of the
          EVM-compatible blockchains in Axelar’s orbit — 15 chains currently, with more on the way.
        </div>
      </div>
      <div class="block__footer fade-up">
        <div class="btn outline">READ MORE</div>
        <div class="btn arrow">
          <div class="arrow-wrapper">
            <img src="@/assets/images/section-5/arrow-left.svg" alt="" />
          </div>
          <span class="text">|</span>
          <div class="arrow-wrapper">
            <img src="@/assets/images/section-5/arrow-right.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.news {
  margin-top: 10vw;
  padding: 0 5.9375vw;
  display: flex;
  gap: 1.5625vw;

  &__right {
    display: flex;
    flex-direction: column;

    padding: 1.458vw;
    flex: 1;
    flex-shrink: 0;
    border-radius: 1.667vw;
    background: #090c0f;

    .block {
      &__header {
        display: flex;
        justify-content: space-between;
      }
      &__title {
        display: flex;
        align-items: center;
        .dot {
          width: 1.25vw;
          height: 1.25vw;
          border-radius: 50% 50%;

          &.red {
            background: linear-gradient(180deg, #ff7a50 0%, #ff3232 100%);
          }
        }

        &-text {
          margin-left: 1.25vw;
          color: #8d8d8d;
          font-family: Urbanist;
          font-size: 0.729vw;
          font-style: normal;
          font-weight: 600;
          line-height: 142.857%;
          text-transform: capitalize;
        }
      }

      &__logo {
        display: flex;
        align-items: center;
      }

      &__content {
        margin-top: 3.125vw;
        flex: 1;

        &-title {
          color: #fff;
          font-family: Urbanist;
          font-size: 1.667vw;
          font-style: normal;
          font-weight: 800;
          line-height: 93.75%;
        }

        &-desc {
          margin-top: 2.083vw;
          color: #fff;
          font-family: Urbanist;
          font-size: 1.042vw;
          font-style: normal;
          font-weight: 600;
          line-height: 1.25vw; /* 120% */
        }
      }

      &__footer {
        display: inline-flex;
        justify-content: space-between;

        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 8.229vw;
          height: 2.292vw;
          border-radius: 2.292vw;

          &.outline {
            border: 2px solid #1c1c1c;
            box-shadow: 0px 0px 0.417vw 0px #1c1c1c;
            cursor: pointer;
            color: #fff;
            text-align: center;
            font-family: Urbanist;
            font-size: 0.833vw;
            font-style: normal;
            font-weight: 800;
            line-height: 0.625vw; /* 75% */
            text-transform: capitalize;

            &:hover {
              border-radius: 1.1458vw;
              background: #1c1c1c;
              box-shadow: 0px 0px 1.25vw 0px #1c1c1c;
              border: none;
            }
          }

          &.arrow {
            border-radius: 23px;
            background: #fff;

            .arrow-wrapper {
              display: flex;
              width: 5.104vw;
              justify-content: center;
              align-items: center;
              gap: 0.625vw;
              cursor: pointer;
            }

            .text {
              width: 2px;
              color: #000;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .w-news {
    margin-top: 21.33vw;
    padding: 0 3.733vw;
    flex-direction: column;
  }

  .news {
    gap: 4.267vw;

    &__left {
      width: 91.467vw;
      height: 91.467vw;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &__right {
      padding: 6.4vw;
      border-radius: 8.533vw;

      .block {
        &__title {
          gap: 5.33vw;

          .dot {
            width: 4.8vw;
            height: 4.8vw;
          }

          &-text {
            font-size: 3.733vw;
          }
        }

        &__content {
          margin-top: 10.667vw;

          &-title {
            font-size: 6.4vw;
            line-height: normal;
          }

          &-desc {
            margin-top: 6.4vw;
            font-size: 4.267vw;
            line-height: 150%;
          }
        }

        &__footer {
          margin-top: 10.667vw;

          .btn {
            width: 34.667vw;
            height: 11.733vw;

            &.outline {
              font-size: 3.733vw;
              border-radius: 10.667vw;

              &:hover {
                border-radius: 10.667vw;
              }
            }

            &.arrow {
              gap: 6.4vw;
            }
          }
        }
      }
    }
  }
}
</style>
