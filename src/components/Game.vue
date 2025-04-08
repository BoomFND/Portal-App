<script lang="ts" setup>
import { Vue3Marquee } from 'vue3-marquee'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const gameAnimation = () => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.genesis-wrapper',
      start: 'bottom top+=472px',
    },
  })

  tl.from('.game-wrapper .heading-block .title', {
    opacity: 0,
    y: 68,
    duration: 0.7,
    ease: 'circ.out',
  })
    .from(
      '.game-wrapper .heading-block .sub-title',
      {
        opacity: 0,
        y: 72,
        duration: 0.7,
        ease: 'circ.out',
      },
      '<=0.1',
    )
    .from(
      '.game-wrapper .heading-block .desc',
      {
        opacity: 0,
        y: 72,
        duration: 0.7,
        ease: 'circ.out',
      },
      '<=0.1',
    )
    .from(
      '.game-wrapper .game-carousel .row',
      {
        opacity: 0,
        y: 100,
        duration: 0.7,
        ease: 'circ.out',
        stagger: 0.1,
        onComplete() {
          tl.kill()
        },
      },
      '<=0.22',
    )
}

onMounted(() => {
  gameAnimation()
})
</script>

<template>
  <section class="game-wrapper">
    <div class="heading-block">
      <div class="title">Haven for All Gamers</div>
      <div class="sub-title">
        <div class="text">Game Together</div>
        <SvgIcon name="logo-o" />
        <div class="text">Connect Forever</div>
      </div>
      <div class="desc">
        Our core mission is to create a global sanctuary where gamers can freely immerse themselves,
        connect with others, and explore boundless virtual realms. Welcome to the gamer's paradise.
      </div>
    </div>
    <div class="game-carousel">
      <div class="row">
        <Vue3Marquee :duration="80" :pause-on-hover="true">
          <div class="marquee-item">
            <div class="media">
              <img src="@/assets/images/games/11.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-ios" />
                  <SvgIcon name="logo-android" />
                </div>
                <div class="name">Honkai: Star Rail</div>
              </div>
            </div>
          </div>
          <div class="marquee-item">
            <div class="media">
              <img src="@/assets/images/games/12.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-battle" />
                </div>
                <div class="name">World of Warcraft</div>
              </div>
            </div>
          </div>
          <div class="marquee-item item-13">
            <div class="media">
              <img src="@/assets/images/games/13.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-riot" />
                  <SvgIcon name="logo-wegame" />
                </div>
                <div class="name">Valorant</div>
              </div>
            </div>
          </div>
          <div class="marquee-item">
            <div class="media">
              <img src="@/assets/images/games/14.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-ubisoft" />
                  <SvgIcon name="logo-steam" />
                  <SvgIcon name="logo-ps" />
                  <SvgIcon name="logo-xbox" />
                </div>
                <div class="name">Roinbow Six Siege</div>
              </div>
            </div>
          </div>
          <div class="marquee-item">
            <div class="media">
              <img src="@/assets/images/games/15.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-ios" />
                  <SvgIcon name="logo-android" />
                  <SvgIcon name="logo-epic" />
                  <SvgIcon name="logo-ps" />
                  <SvgIcon name="logo-xbox" />
                </div>
                <div class="name">Fortnite</div>
              </div>
            </div>
          </div>
          <div class="marquee-item item-16">
            <div class="media">
              <img src="@/assets/images/games/16.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-steam" />
                  <SvgIcon name="logo-ps" />
                  <SvgIcon name="logo-xbox" />
                  <SvgIcon name="logo-stodia" />
                </div>
                <div class="name">PUBG</div>
              </div>
            </div>
          </div>
          <div class="marquee-item">
            <div class="media">
              <img src="@/assets/images/games/17.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-riot" />
                  <SvgIcon name="logo-wegame" />
                </div>
                <div class="name">League of Legends</div>
              </div>
            </div>
          </div>
          <div class="marquee-item">
            <div class="media">
              <img src="@/assets/images/games/18.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-battle" />
                  <SvgIcon name="logo-ps" />
                  <SvgIcon name="logo-xbox" />
                </div>
                <div class="name">Overwatch 2</div>
              </div>
            </div>
          </div>
        </Vue3Marquee>
      </div>
      <div class="row">
        <Vue3Marquee :duration="70" :pause-on-hover="true">
          <div class="marquee-item">
            <div class="media">
              <img src="@/assets/images/games/21.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-ios" />
                  <SvgIcon name="logo-android" />
                  <SvgIcon name="logo-ps" />
                  <SvgIcon name="logo-mihoyo " />
                </div>
                <div class="name">Genshin Impact</div>
              </div>
            </div>
          </div>
          <div class="marquee-item">
            <div class="media">
              <img src="@/assets/images/games/22.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-square" />
                  <SvgIcon name="logo-steam" />
                  <SvgIcon name="logo-ps" />
                </div>
                <div class="name">Final Fantasy XIV</div>
              </div>
            </div>
          </div>
          <div class="marquee-item item-23">
            <div class="media">
              <img src="@/assets/images/games/23.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-battle" />
                  <SvgIcon name="logo-ps" />
                  <SvgIcon name="logo-xbox" />
                </div>
                <div class="name">Diablo IV</div>
              </div>
            </div>
          </div>
          <div class="marquee-item">
            <div class="media">
              <img src="@/assets/images/games/24.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-ios" />
                  <SvgIcon name="logo-android" />
                  <SvgIcon name="logo-battle" />
                </div>
                <div class="name">Hearthstone</div>
              </div>
            </div>
          </div>
          <div class="marquee-item">
            <div class="media">
              <img src="@/assets/images/games/25.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-ios" />
                  <SvgIcon name="logo-android" />
                  <SvgIcon name="logo-riot" />
                </div>
                <div class="name">Teamfight Tactics</div>
              </div>
            </div>
          </div>
          <div class="marquee-item item-26">
            <div class="media">
              <img src="@/assets/images/games/26.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-steam" />
                </div>
                <div class="name">CS:GO 2</div>
              </div>
            </div>
          </div>
          <div class="marquee-item">
            <div class="media">
              <img src="@/assets/images/games/27.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-steam" />
                  <SvgIcon name="logo-epic" />
                  <SvgIcon name="logo-ps" />
                  <SvgIcon name="logo-xbox" />
                </div>
                <div class="name">Destiny 2</div>
              </div>
            </div>
          </div>
          <div class="marquee-item">
            <div class="media">
              <img src="@/assets/images/games/28.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-steam" />
                </div>
                <div class="name">Lost Ark</div>
              </div>
            </div>
          </div>
        </Vue3Marquee>
      </div>
      <div class="row">
        <Vue3Marquee :duration="85" :pause-on-hover="true">
          <div class="marquee-item item-31">
            <div class="media">
              <img src="@/assets/images/games/31.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-origin" />
                  <SvgIcon name="logo-steam" />
                  <SvgIcon name="logo-ps" />
                  <SvgIcon name="logo-xbox" />
                </div>
                <div class="name">Apex Legends</div>
              </div>
            </div>
          </div>
          <div class="marquee-item">
            <div class="media">
              <img src="@/assets/images/games/32.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-rockstar" />
                  <SvgIcon name="logo-steam" />
                  <SvgIcon name="logo-epic" />
                  <SvgIcon name="logo-ps" />
                  <SvgIcon name="logo-xbox" />
                </div>
                <div class="name">Grand Theft Auto V</div>
              </div>
            </div>
          </div>
          <div class="marquee-item">
            <div class="media">
              <img src="@/assets/images/games/33.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-ios" />
                  <SvgIcon name="logo-android " />
                </div>
                <div class="name">Wuthering Waves</div>
              </div>
            </div>
          </div>
          <div class="marquee-item item-34">
            <div class="media">
              <img src="@/assets/images/games/34.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-steam" />
                </div>
                <div class="name">Dota 2</div>
              </div>
            </div>
          </div>
          <div class="marquee-item">
            <div class="media">
              <img src="@/assets/images/games/35.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-battle" />
                  <SvgIcon name="logo-steam" />
                  <SvgIcon name="logo-ps" />
                  <SvgIcon name="logo-xbox" />
                </div>
                <div class="name">Call of Duty</div>
              </div>
            </div>
          </div>
          <div class="marquee-item">
            <div class="media">
              <img src="@/assets/images/games/36.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-epic" />
                  <SvgIcon name="logo-steam" />
                  <SvgIcon name="logo-ps" />
                  <SvgIcon name="logo-xbox" />
                </div>
                <div class="name">Rocket League</div>
              </div>
            </div>
          </div>
          <div class="marquee-item item-37">
            <div class="media">
              <img src="@/assets/images/games/37.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-steam" />
                  <SvgIcon name="logo-ps" />
                  <SvgIcon name="logo-xbox" />
                </div>
                <div class="name">Elden Ring</div>
              </div>
            </div>
          </div>
          <div class="marquee-item item-38">
            <div class="media">
              <img src="@/assets/images/games/38.jpg" alt="" />
            </div>
            <div class="marquee-item-bg"></div>
            <div class="content">
              <div class="content-wrapper">
                <div class="icons">
                  <SvgIcon name="logo-steam" />
                  <SvgIcon name="logo-ps" />
                  <SvgIcon name="logo-xbox" />
                </div>
                <div class="name">Marvel Rivals</div>
              </div>
            </div>
          </div>
        </Vue3Marquee>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.game-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
  align-self: stretch;

  .heading-block {
    display: flex;
    width: 772.282px;
    flex-direction: column;
    align-items: center;
    gap: 24px;

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

    .sub-title {
      display: flex;
      height: 24px;
      padding: 0px 12px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 12px;
      background: #f5f5f7;

      .text {
        color: #1d1d1f;
        font-family: Urbanist;
        font-size: 14px;
        font-style: normal;
        font-weight: 800;
        line-height: 20px; /* 142.857% */
        letter-spacing: -0.12px;
      }

      .svg-icon {
        width: 13.037px;
        height: 12px;
        flex-shrink: 0;
      }
    }

    .desc {
      color: #1d1d1f;
      text-align: center;
      font-family: Urbanist;
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: 29px; /* 138.095% */
      letter-spacing: 0.231px;
    }
  }

  .game-carousel {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    overflow: hidden;

    .vue3-marquee {
      width: 100vw;
    }

    :deep(.marquee) {
      // display: flex;
      // align-items: center;

      .marquee-item {
        margin: 0 9px;
        position: relative;
        cursor: pointer;
        width: 345px;
        height: 195px;
        border-radius: 24px;
        overflow: hidden;

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .marquee-item-bg {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          opacity: 0;
          border-radius: 24px;
          background: rgba(#1d1d1f, 0.6);
          z-index: 1;
          will-change: opacity;
          transition: opacity 0.3s;
        }

        .content {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          z-index: 2;
          display: flex;
          align-items: flex-end;
          padding: 16px;

          .content-wrapper {
            display: inline-flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            opacity: 0;
            transition:
              opacity 0.3s,
              transform 0.3s;

            .icons {
              display: flex;
              align-items: flex-start;
              gap: 8px;
              color: #fff;

              .svg-icon {
                width: 16px;
                height: 16px;
                flex-shrink: 0;
              }
            }

            .name {
              color: #fff;
              text-align: center;
              font-family: Urbanist;
              font-size: 20px;
              font-style: normal;
              font-weight: 600;
              line-height: 28px; /* 140% */
            }
          }
        }

        &:hover {
          .marquee-item-bg {
            display: block;
            opacity: 1;
          }

          .content-wrapper {
            opacity: 1;
            transform: translateY(calc(-50% + 15px));
          }
        }

        &.item-13,
        &.item-16,
        &.item-31,
        &.item-34,
        &.item-37 {
          width: 195px;
        }

        &.item-23,
        &.item-26 {
          width: 150px;
        }
      }
    }
  }
}

@media (min-width: 1921px) {
  .game-wrapper {
    gap: calc(72 * 100vw / 1920);

    .heading-block {
      width: calc(772.282 * 100vw / 1920);
      gap: calc(24 * 100vw / 1920);

      .title {
        font-size: calc(60 * 100vw / 1920);
        line-height: calc(68 * 100vw / 1920);
        letter-spacing: calc(-1.152 * 100vw / 1920);
      }

      .sub-title {
        height: calc(24 * 100vw / 1920);
        padding: 0 calc(12 * 100vw / 1920);
        gap: calc(8 * 100vw / 1920);
        border-radius: calc(12 * 100vw / 1920);

        .text {
          font-size: calc(14 * 100vw / 1920);
          line-height: calc(20 * 100vw / 1920);
          letter-spacing: calc(-0.12 * 100vw / 1920);
        }

        .svg-icon {
          width: calc(13.037 * 100vw / 1920);
          height: calc(12 * 100vw / 1920);
        }
      }

      .desc {
        font-size: calc(21 * 100vw / 1920);
        line-height: calc(29 * 100vw / 1920);
        letter-spacing: calc(0.231 * 100vw / 1920);
      }
    }

    .game-carousel {
      gap: calc(18 * 100vw / 1920);

      :deep(.marquee) {
        .marquee-item {
          margin: 0 calc(9 * 100vw / 1920);
          width: calc(345 * 100vw / 1920);
          height: calc(195 * 100vw / 1920);
          border-radius: calc(24 * 100vw / 1920);

          .marquee-item-bg {
            border-radius: calc(24 * 100vw / 1920);
          }

          .content {
            padding: calc(16 * 100vw / 1920);

            .content-wrapper {
              gap: calc(8 * 100vw / 1920);

              .icons {
                gap: calc(8 * 100vw / 1920);

                .svg-icon {
                  width: calc(16 * 100vw / 1920);
                  height: calc(16 * 100vw / 1920);
                }
              }

              .name {
                font-size: calc(20 * 100vw / 1920);
                line-height: calc(28 * 100vw / 1920);
              }
            }
          }

          &.item-13,
          &.item-16,
          &.item-31,
          &.item-34,
          &.item-37 {
            width: calc(195 * 100vw / 1920);
          }

          &.item-23,
          &.item-26 {
            width: calc(150 * 100vw / 1920);
          }
        }
      }
    }
  }
}

@media (max-width: 1280px) {
  .game-wrapper {
    gap: clamp(40px, calc(72px - 32 / 446 * (1280px - 100vw)), 72px);

    .heading-block {
      width: 100%;
      padding: 0 20px;

      .title {
        font-size: clamp(28px, calc(60px - 32 / 446 * (1280px - 100vw)), 60px);
        line-height: clamp(36px, calc(68px - 32 / 446 * (1280px - 100vw)), 68px); /* 113.333% */
      }

      .sub-title .text {
        font-size: clamp(12px, calc(14px - 2 / 446 * (1280px - 100vw)), 14px);
      }

      .desc {
        font-size: clamp(14px, calc(21px - 7 / 446 * (1280px - 100vw)), 21px);
        line-height: clamp(22px, calc(29px - 7 / 446 * (1280px - 100vw)), 29px); /* 138.095% */
      }
    }

    .game-carousel {
      gap: clamp(8px, calc(18px - 10 / 446 * (1280px - 100vw)), 18px);

      :deep(.marquee) {
        .marquee-item {
          width: clamp(212.308px, calc(345px - 132.692 / 446 * (1280px - 100vw)), 345px);
          height: clamp(120px, calc(195px - 75 / 446 * (1280px - 100vw)), 195px);
          border-radius: clamp(12px, calc(24px - 12 / 446 * (1280px - 100vw)), 24px);

          .media {
            height: clamp(120px, calc(195px - 75 / 446 * (1280px - 100vw)), 195px);
            border-radius: clamp(12px, calc(24px - 12 / 446 * (1280px - 100vw)), 24px);
          }

          &.item-13,
          &.item-16,
          &.item-31,
          &.item-34,
          &.item-37 {
            width: clamp(120px, calc(195px - 75 / 446 * (1280px - 100vw)), 195px);
          }

          &.item-23,
          &.item-26 {
            width: clamp(92.308px, calc(150px - 57.692 / 446 * (1280px - 100vw)), 150px);
          }
        }
      }
    }
  }
}
</style>
