<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isHovering = ref(false)
const partnersRef = ref(null)

const fadeUpTrigger = () => {
  const fadeUpDoms = partnersRef.value.querySelectorAll('.fade-up')
  const title = partnersRef.value.querySelector('.title')

  gsap.utils.toArray([...fadeUpDoms, title]).forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 60,
      duration: 0.5,
      scrollTrigger: {
        trigger: el,
        start: 'top bottom'
      },
      stagger: 0.2
    })
  })
}

onMounted(() => {
  fadeUpTrigger()
})
</script>

<template>
  <section ref="partnersRef" class="partners">
    <div class="title">Trusted and Backed by</div>
    <div class="partners__list">
      <div class="column">
        <div class="block fade-up">
          <div class="block__header">
            <div class="dot purple"></div>
            <div class="block__header-text">L1/L2</div>
          </div>
          <div class="block__content">
            <div class="partner__row">
              <div class="partner__item">
                <SvgIcon name="partners-ethereum"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-solana"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-linea"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-base"></SvgIcon>
              </div>
            </div>
            <div class="partner__row">
              <div class="partner__item">
                <SvgIcon name="partners-scroll"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-link"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-sonic"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-bitlayer"></SvgIcon>
              </div>
            </div>
          </div>
        </div>
        <div class="block fade-up">
          <div class="block__header">
            <div class="dot green"></div>
            <div class="block__header-text">Gaming</div>
          </div>
          <div class="block__content">
            <div class="partner__row">
              <div class="partner__item">
                <SvgIcon name="partners-laniakea"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-space"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-tapup"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-satoshi"></SvgIcon>
              </div>
            </div>
            <div class="partner__row">
              <div class="partner__item">
                <SvgIcon name="partners-degame"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-amax"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-ic1101"></SvgIcon>
              </div>
              <div class="partner__item no-data"></div>
            </div>
          </div>
        </div>
        <div class="block fade-up">
          <div class="block__header">
            <div class="dot red"></div>
            <div class="block__header-text">Social/Media</div>
          </div>
          <div class="block__content">
            <div class="partner__row">
              <div class="partner__item blue">
                <SvgIcon name="partners-mask"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-debox"></SvgIcon>
              </div>
            </div>
            <div class="partner__row">
              <div class="partner__item">
                <SvgIcon name="partners-young"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-followin"></SvgIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="block fade-up">
          <div class="block__header">
            <div class="dot blue"></div>
            <div class="block__header-text">Wallets</div>
          </div>
          <div class="block__content">
            <div class="partner__row">
              <div class="partner__item">
                <SvgIcon name="partners-walletConnect"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-binance"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-coinbase"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-metamask"></SvgIcon>
              </div>
            </div>
            <div class="partner__row">
              <div class="partner__item">
                <SvgIcon name="partners-okx"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-mathWallet"></SvgIcon>
              </div>
              <div
                class="partner__item"
                @mouseover="isHovering = true"
                @mouseout="isHovering = false"
              >
                <img v-if="!isHovering" src="@/assets/images/section-4/echooo-grey.png" alt="" />
                <img v-else src="@/assets/images/section-4/echooo.png" alt="" />
              </div>
              <div class="partner__item no-data"></div>
            </div>
          </div>
        </div>
        <div class="block fade-up">
          <div class="block__header">
            <div class="dot gold"></div>
            <div class="block__header-text">DeFi</div>
          </div>
          <div class="block__content">
            <div class="partner__row">
              <div class="partner__item">
                <SvgIcon name="partners-owlto"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-macaron"></SvgIcon>
              </div>
            </div>
            <div class="partner__row">
              <div class="partner__item">
                <SvgIcon name="partners-pumpad"></SvgIcon>
              </div>
              <div class="partner__item">
                <SvgIcon name="partners-bitbrex"></SvgIcon>
              </div>
            </div>
          </div>
        </div>
        <div class="block more fade-up">
          <partners-bg class="bg"></partners-bg>
          <div class="content">
            <div class="title">
              <span class="number">150+</span>
              integrations
            </div>
            <div class="sub-title">across <span class="number">9</span> verticals</div>
            <div class="button">open dashboard <SvgIcon name="right"></SvgIcon></div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-partners__list">
      <div class="block fade-up">
        <div class="block__header">
          <div class="dot purple"></div>
          <div class="block__header-text">L1/L2</div>
        </div>
        <div class="block__content">
          <div class="partner__row">
            <div class="partner__item">
              <SvgIcon name="partners-ethereum"></SvgIcon>
            </div>
            <div class="partner__item">
              <SvgIcon name="partners-solana"></SvgIcon>
            </div>
          </div>
          <div class="partner__row">
            <div class="partner__item">
              <SvgIcon name="partners-linea"></SvgIcon>
            </div>
            <div class="partner__item">
              <SvgIcon name="partners-base"></SvgIcon>
            </div>
          </div>
          <div class="partner__row">
            <div class="partner__item">
              <SvgIcon name="partners-scroll"></SvgIcon>
            </div>
            <div class="partner__item">
              <SvgIcon name="partners-link"></SvgIcon>
            </div>
          </div>
          <div class="partner__row">
            <div class="partner__item">
              <SvgIcon name="partners-sonic"></SvgIcon>
            </div>
            <div class="partner__item">
              <SvgIcon name="partners-bitlayer"></SvgIcon>
            </div>
          </div>
        </div>
      </div>
      <div class="block fade-up">
        <div class="block__header">
          <div class="dot green"></div>
          <div class="block__header-text">Gaming</div>
        </div>
        <div class="block__content">
          <div class="partner__row">
            <div class="partner__item">
              <SvgIcon name="partners-laniakea"></SvgIcon>
            </div>
            <div class="partner__item">
              <SvgIcon name="partners-space"></SvgIcon>
            </div>
          </div>
          <div class="partner__row">
            <div class="partner__item">
              <SvgIcon name="partners-tapup"></SvgIcon>
            </div>
            <div class="partner__item">
              <SvgIcon name="partners-satoshi"></SvgIcon>
            </div>
          </div>
          <div class="partner__row">
            <div class="partner__item">
              <SvgIcon name="partners-degame"></SvgIcon>
            </div>
            <div class="partner__item">
              <SvgIcon name="partners-amax"></SvgIcon>
            </div>
          </div>
          <div class="partner__row">
            <div class="partner__item">
              <SvgIcon name="partners-ic1101"></SvgIcon>
            </div>
            <div class="partner__item no-data"></div>
          </div>
        </div>
      </div>
      <div class="block fade-up">
        <div class="block__header">
          <div class="dot red"></div>
          <div class="block__header-text">Social/Media</div>
        </div>
        <div class="block__content">
          <div class="partner__row">
            <div class="partner__item blue">
              <SvgIcon name="partners-mask"></SvgIcon>
            </div>
            <div class="partner__item">
              <SvgIcon name="partners-debox"></SvgIcon>
            </div>
          </div>
          <div class="partner__row">
            <div class="partner__item">
              <SvgIcon name="partners-young"></SvgIcon>
            </div>
            <div class="partner__item">
              <SvgIcon name="partners-followin"></SvgIcon>
            </div>
          </div>
        </div>
      </div>
      <div class="block fade-up">
        <div class="block__header">
          <div class="dot blue"></div>
          <div class="block__header-text">Wallets</div>
        </div>
        <div class="block__content">
          <div class="partner__row">
            <div class="partner__item">
              <SvgIcon name="partners-walletConnect"></SvgIcon>
            </div>
            <div class="partner__item">
              <SvgIcon name="partners-binance"></SvgIcon>
            </div>
          </div>
          <div class="partner__row">
            <div class="partner__item">
              <SvgIcon name="partners-coinbase"></SvgIcon>
            </div>
            <div class="partner__item">
              <SvgIcon name="partners-metamask"></SvgIcon>
            </div>
          </div>
          <div class="partner__row">
            <div class="partner__item">
              <SvgIcon name="partners-okx"></SvgIcon>
            </div>
            <div class="partner__item">
              <SvgIcon name="partners-mathWallet"></SvgIcon>
            </div>
          </div>
          <div class="partner__row">
            <div
              class="partner__item"
              @mouseover="isHovering = true"
              @mouseout="isHovering = false"
            >
              <img v-if="!isHovering" src="@/assets/images/section-4/echooo-grey.png" alt="" />
              <img v-else src="@/assets/images/section-4/echooo.png" alt="" />
            </div>
            <div class="partner__item no-data"></div>
          </div>
        </div>
      </div>
      <div class="block fade-up">
        <div class="block__header">
          <div class="dot gold"></div>
          <div class="block__header-text">DeFi</div>
        </div>
        <div class="block__content">
          <div class="partner__row">
            <div class="partner__item">
              <SvgIcon name="partners-owlto"></SvgIcon>
            </div>
            <div class="partner__item">
              <SvgIcon name="partners-macaron"></SvgIcon>
            </div>
          </div>
          <div class="partner__row">
            <div class="partner__item">
              <SvgIcon name="partners-pumpad"></SvgIcon>
            </div>
            <div class="partner__item">
              <SvgIcon name="partners-bitbrex"></SvgIcon>
            </div>
          </div>
        </div>
      </div>
      <div class="block more fade-up">
        <partners-bg class="bg"></partners-bg>
        <div class="content">
          <div class="title">
            <span class="number">150+</span>
            integrations
          </div>
          <div class="sub-title">across <span class="number">9</span> verticals</div>
          <div class="button">open dashboard <SvgIcon name="right"></SvgIcon></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.partners {
  margin-top: 11.25vw;
  padding: 0 5.9375vw;

  .title {
    color: #fff;
    font-family: Urbanist;
    font-size: 3.542vw;
    font-style: normal;
    font-weight: 800;
    line-height: 94.118%;
  }

  &__list {
    margin-top: 4.167vw;
    display: flex;
    gap: 1.25vw;

    .column {
      flex: 1;
    }

    .block {
      padding: 0.99vw 1.458vw 1.458vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 12.5vw;
      border-radius: 1.667vw;
      background: #090c0f;

      &__header {
        display: inline-flex;
        width: 100%;
        color: #fff;
        font-family: Urbanist;
        font-size: 1.667vw;
        font-style: normal;
        font-weight: 800;
        line-height: 93.75%;
        gap: 0.625vw;

        .dot {
          margin-top: 3px;
          width: 1.25vw;
          height: 1.25vw;
          border-radius: 50% 50%;

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

      &__content {
        margin-top: 1.667vw;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 0.833vw;

        .partner {
          &__row {
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            gap: 0.833vw;
            width: 100%;
            height: 2.96875vw;
          }

          &__item {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            height: 100%;
            border-radius: 0.833vw;
            background: #0f1012;
            color: #8d8d8d;
            mix-blend-mode: luminosity;
            cursor: pointer;

            .svg-icon {
              width: 7.292vw;
              height: 1.458vw;
            }

            img {
              width: 4.01vw;
              height: 0.677vw;
            }

            &:hover {
              mix-blend-mode: inherit;
              background: #1c1c1c;
              color: #fff;
            }

            &.blue:hover {
              color: #1c68f3;
            }

            &.no-data {
              background: transparent;

              &:hover {
                background: transparent;
              }
            }
          }
        }

        img {
          display: block;
        }
      }

      &.more {
        position: relative;
        overflow: hidden;

        .bg {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index: -1;
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title,
        .sub-title {
          color: #fff;
          font-family: Urbanist;
          font-size: 1.667vw;
          font-style: normal;
          font-weight: 600;
          line-height: 3.125vw;

          .number {
            font-size: 2.292vw;
          }
        }

        .button {
          margin-top: 1.042vw;
          width: 9.479vw;
          height: 2.292vw;
          color: #0f1012;
          text-align: center;
          font-family: Urbanist;
          font-size: 0.729vw;
          font-style: normal;
          font-weight: 800;
          line-height: 85.714%;
          letter-spacing: 0.24px;
          text-transform: uppercase;
        }
      }

      & + .block {
        margin-top: 1.667vw;
      }
    }
  }
}

.w-partners__list {
  display: none;
}

@media (max-width: 768px) {
  .partners {
    .title {
      font-size: 6.4vw;
      margin-bottom: 6.4vw;
    }

    &__list {
      display: none;
    }
  }

  .w-partners__list {
    display: flex;
    flex-direction: column;

    .block {
      padding: 4.267vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      // height: 12.5vw;
      border-radius: 6.4vw;
      background: #090c0f;

      &__header {
        display: inline-flex;
        width: 100%;
        color: #fff;
        font-family: Urbanist;
        font-size: 4.267vw;
        font-weight: 800;
        line-height: normal;
        gap: 3.2vw;

        .dot {
          width: 4.8vw;
          height: 4.8vw;
          border-radius: 50% 50%;

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

      &__content {
        margin-top: 5.333vw;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 4.267vw;

        .partner {
          &__row {
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            gap: 4.267vw;
            width: 100%;
            height: 12.8vw;
          }

          &__item {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
            height: 100%;
            border-radius: 3.2vw;
            background: #0f1012;
            color: #8d8d8d;
            mix-blend-mode: luminosity;
            cursor: pointer;

            .svg-icon {
              width: 32vw;
              height: 6.4vw;
            }

            img {
              width: 16vw;
              height: 3.2vw;
            }

            &:hover {
              mix-blend-mode: inherit;
              background: #1c1c1c;
              color: #fff;
            }

            &.blue:hover {
              color: #1c68f3;
            }

            &.no-data {
              background: transparent;

              &:hover {
                background: transparent;
              }
            }
          }
        }

        img {
          display: block;
        }
      }

      &.more {
        position: relative;
        overflow: hidden;

        .bg {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index: -1;
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title,
        .sub-title {
          color: #fff;
          font-family: Urbanist;
          font-size: 6.4vw;
          font-style: normal;
          font-weight: 600;
          line-height: 8.533vw;

          .number {
            font-size: 8.533vw;
          }
        }

        .button {
          margin-top: 6.4vw;
          width: 53.33vw;
          height: 11.73vw;
          color: #0f1012;
          text-align: center;
          font-family: Urbanist;
          font-size: 4.27vw;
          font-style: normal;
          font-weight: 800;
          line-height: 85.714%;
          text-transform: uppercase;
          border-radius: 10.67vw;
        }
      }

      & + .block {
        margin-top: 3.2vw;
      }
    }
  }
}
</style>
