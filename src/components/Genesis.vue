<script lang="ts" setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ref, onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

// Define reactive variables for the statistics
const boomerHolders = ref(0)
const totalTransactions = ref(0)
const userRegistered = ref(0)

// Method to format numbers with commas
const formatNumber = (value: number) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const featContentAnimation = () => {
  const tl = gsap.timeline()

  tl.from('.genesis-wrapper .feature-content .title', {
    opacity: 0,
    y: 68,
    duration: 0.7,
    ease: 'circ.out',
  })
    .from(
      '.genesis-wrapper .grid .grid-item',
      {
        opacity: 0,
        y: 72,
        duration: 0.7,
        ease: 'circ.out',
        stagger: 0.2,
      },
      '<=0.3',
    )
    .from(
      '.genesis-wrapper .feature-content .button',
      {
        opacity: 0,
        y: 72,
        duration: 0.7,
        ease: 'circ.out',
      },
      '<=0.8',
    )
}
const featBlockAnimation = () => {
  // 不再使用ScrollTrigger，直接在组件加载时执行动画
  const tl = gsap.timeline()

  tl.from('.genesis-wrapper .feature-block .game-img-wrapper', {
    opacity: 0,
    y: 100,
    duration: 0.7,
    ease: 'circ.out',
  })
    .from(
      '.genesis-wrapper .feature-block .game-title',
      {
        opacity: 0,
        y: 68,
        duration: 0.7,
        ease: 'circ.out',
      },
      '<=0.1',
    )
    .from(
      '.genesis-wrapper .feature-block .game-desc',
      {
        opacity: 0,
        y: 68,
        duration: 0.7,
        ease: 'circ.out',
      },
      '<=0.14',
    )
    .from(
      '.genesis-wrapper .feature-block .card-list .card:nth-child(1)',
      {
        opacity: 0,
        y: 72,
        duration: 0.7,
        ease: 'circ.out',
      },
      '<=0.16',
    )
    .from(
      '.genesis-wrapper .feature-block .card-list .card:nth-child(1) .title',
      {
        opacity: 0,
        y: 72,
        duration: 0.7,
        ease: 'circ.out',
      },
      '<=0.2',
    )
    .from(
      '.genesis-wrapper .feature-block .card-list .card:nth-child(1) .desc',
      {
        opacity: 0,
        y: 72,
        duration: 0.7,
        ease: 'circ.out',
      },
      '<=0.1',
    )
    .from(
      '.genesis-wrapper .feature-block .card-list .card:nth-child(1) .img-wrapper',
      {
        opacity: 0,
        y: 72,
        duration: 0.7,
        ease: 'circ.out',
      },
      '<=0.11',
    )
    .from(
      '.genesis-wrapper .feature-block .card-list .card:nth-child(2)',
      {
        opacity: 0,
        y: 72,
        duration: 0.7,
        ease: 'circ.out',
      },
      '<=0.13',
    )
    .from(
      '.genesis-wrapper .feature-block .card-list .card:nth-child(2) .title',
      {
        opacity: 0,
        y: 72,
        duration: 0.7,
        ease: 'circ.out',
      },
      '<=0.16',
    )
    .from(
      '.genesis-wrapper .feature-block .card-list .card:nth-child(2) .desc',
      {
        opacity: 0,
        y: 72,
        duration: 0.7,
        ease: 'circ.out',
      },
      '<=0.1',
    )
    .from(
      '.genesis-wrapper .feature-block .card-list .card:nth-child(2) .img-wrapper',
      {
        opacity: 0,
        y: 72,
        duration: 0.7,
        ease: 'circ.out',
      },
      '<=0.11',
    )
}

const isHover = ref(false)

const goToLearnMore = () => {
  return
  // 跳转到learn more的页面
  window.open('https://app.gamerboom.org/', '_black')
}

/**
 * 调用接口，获取统计数据
 * @returns
 */
const getStatisticsData = async () => {
  try {
    const res = await fetch('/api/statistics_data/home_data/', {
      headers: {
        accept: 'application/json',
      },
      method: 'GET',
    })

    const data = await res.json()

    // Animate the numbers from their current value to the new value
    const tl = gsap.timeline()
    tl.to(totalTransactions, { value: data.totalTransactions, duration: 0.91, roundProps: 'value' })
    tl.to(
      userRegistered,
      {
        value: data.userRegistered,
        duration: 0.77,
        roundProps: 'value',
      },
      '<=0.2',
    )
    tl.to(
      boomerHolders,
      {
        value: data.boomerHolders,
        duration: 0.69,
        roundProps: 'value',
      },
      '<=0.25',
    )

    return Promise.resolve(data)
  } catch (error) {
    console.error(error)
    return Promise.reject(error)
  }
}

onMounted(() => {
  // 直接执行动画，不依赖滚动触发
  featContentAnimation()
  featBlockAnimation()
  
  // 立即获取统计数据，不使用ScrollTrigger
  getStatisticsData()
  
  // 设置定时更新
  setInterval(getStatisticsData, 10000)
})
</script>

<template>
  <section class="genesis-wrapper">
    <div class="feature-content">
      <div class="title">Stats Overview</div>
      <div class="grid">
        <div class="grid-item">
          <SvgIcon name="transactions" />
          <div class="label">Total Transactions</div>
          <div class="value">{{ formatNumber(totalTransactions) }}</div>
        </div>
        <div class="grid-item">
          <SvgIcon name="registered" />
          <div class="label">Registered Users</div>
          <div class="value">{{ formatNumber(userRegistered) }}</div>
        </div>
        <div class="grid-item">
          <SvgIcon name="angels" />
          <div class="label">Boomer Angels</div>
          <div class="value">{{ formatNumber(boomerHolders) }}</div>
        </div>
      </div>
      <div
        class="button"
        @click="goToLearnMore"
        title="coming soon"
        @mouseleave="isHover = false"
        @mouseover="isHover = true"
      >
        <div class="text">{{ isHover ? 'Coming Soon' : 'Learn More' }}</div>
        <div class="icon-wrapper">
          <SvgIcon name="arrow-right" />
        </div>
      </div>
    </div>
    <div class="feature-block">
      <div class="game-img-wrapper">
        <div class="game-content">
          <div class="game-title">
            Similar Gaming<br />
            Experience As Usual
          </div>
          <div class="game-desc">
            By adopting UI/UX designs from commonly used launchers such as Steam, Epic Games, and
            Wegame, we allow users to maintain their habits without needing to adapt to new
            workflows.
          </div>
        </div>
      </div>
      <div class="card-list">
        <div class="card">
          <div class="info-wrapper">
            <div class="title">
              DePIN <br />
              With Real Business
            </div>
            <div class="desc">
              Identify gamers' configurations, enable GPU rental during idle periods, and help
              monetize through mining and advertising.
            </div>
          </div>
          <div class="img-wrapper"></div>
        </div>
        <div class="card">
          <div class="info-wrapper">
            <div class="title">IAO <br />Platform</div>
            <div class="desc">
              In the future, AI Agent will become the best application for users. We are committed
              to unleashing the value of data through AI Agent. Meanwhile, GamerBoom achieves the
              unity of the product value and asset attributes of AI Agent via the IAO platform.
            </div>
          </div>
          <div class="img-wrapper"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.genesis-wrapper {
  display: flex;
  padding-bottom: 80px;
  flex-direction: column;
  align-items: center;
  gap: 120px;
  align-self: stretch;

  .feature-content {
    padding: 80px 64px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;
    align-self: stretch;

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

    .grid {
      display: flex;
      padding: 0px clamp(120px, calc(240px - 120 / 480 * (1920px - 100vw)), 240px);
      justify-content: space-between;
      align-items: center;
      align-self: stretch;

      .grid-item {
        display: flex;
        width: 259px;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        .svg-icon {
          width: 80px;
          height: 80px;
        }

        .label {
          color: #1d1d1f;
          text-align: center;
          font-family: Urbanist;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 32px; /* 133.333% */
          letter-spacing: 0.216px;
        }

        .value {
          color: #1d1d1f;
          text-align: center;
          font-family: Urbanist;
          font-size: 44px;
          font-style: normal;
          font-weight: 800;
          line-height: 52px; /* 118.182% */
        }
      }
    }

    .button {
      display: flex;
      height: 44px;
      padding: 0px 16px 0px 24px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 80px;
      border: 1.5px solid #1d1d1f;
      cursor: pointer;
      overflow: hidden;

      .text {
        color: #1d1d1f;
        font-feature-settings:
          'ss01' on,
          'cv01' on;
        font-family: Urbanist;
        font-size: 18px;
        font-style: normal;
        font-weight: 800;
        line-height: 24px; /* 133.333% */
      }

      .icon-wrapper {
        display: flex;
        width: 20px;
        height: 20px;
        padding: 4px 6px;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .svg-icon {
          width: 16px;
          height: 16px;
        }
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

  .feature-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    gap: 32px;
    padding: 64px;
    background: #f5f5f7;

    .game-img-wrapper {
      position: relative;
      width: 100%;
      height: 619px;
      border-radius: 32px;
      overflow: hidden;
      background-image: url('@/assets/images/season-1920.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: 0;
      background-position-x: clamp(
        100%,
        calc(100% + 80 / 480 * (1920px - 100vw)),
        calc(100% + 80px)
      );

      .game-content {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 38.28125vw;
        background: linear-gradient(
          90deg,
          #111821 0%,
          #111821 71.6%,
          rgba(17, 24, 33, 0.2) 87.2%,
          rgba(17, 24, 33, 0) 100%
        );
        display: flex;
        padding-left: 120px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 24px;
        flex: 1 0 0;

        .game-title {
          color: #fff;
          font-family: Urbanist;
          font-size: 48px;
          font-style: normal;
          font-weight: 800;
          line-height: 56px; /* 116.667% */
          letter-spacing: var(--letter-spacing--0_08, -0.076px);
        }

        .game-desc {
          width: 454px;
          color: #fff;
          font-family: Urbanist;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 28px; /* 140% */
          letter-spacing: 0.048px;
        }
      }
    }

    .card-list {
      display: flex;
      align-items: center;
      gap: 32px;
      align-self: stretch;

      .card {
        padding: 48px clamp(32px, calc(56px - 24 / 446 * (1280px - 100vw)), 56px);
        display: flex;
        min-height: 791px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex: 1 0 0;
        border-radius: 32px;
        background: #fff;
        overflow: hidden;

        .info-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          width: 398px;

          .title {
            color: #1d1d1f;
            text-align: center;
            font-family: Urbanist;
            font-size: 48px;
            font-style: normal;
            font-weight: 800;
            line-height: 116.667%;
            letter-spacing: -0.076px;
          }

          .desc {
            color: #1d1d1f;
            text-align: center;
            font-family: Urbanist;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%;
            letter-spacing: 0.048px;
          }
        }

        .img-wrapper {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: clamp(408px, calc(408px - 20 / 480 * (1920px - 100vw)), 428px);
          background-repeat: no-repeat;
          background-position: center center;
          background-size: auto 100%;
        }

        &:first-child .img-wrapper {
          background-image: url('@/assets/images/app-1920.jpg');
        }
        &:last-child .img-wrapper {
          background-image: url('@/assets/images/desktop-1920.jpg');
        }
      }
    }
  }
}

@media (min-width: 1921px) {
  .genesis-wrapper {
    padding-bottom: calc(80 * 100vw / 1920);
    gap: calc(120 * 100vw / 1920);

    .feature-content {
      padding: calc(80 * 100vw / 1920) calc(64 * 100vw / 1920) 0;
      gap: calc(80 * 100vw / 1920);

      .title {
        font-size: calc(60 * 100vw / 1920);
        line-height: calc(68 * 100vw / 1920);
        letter-spacing: calc(-1.152 * 100vw / 1920);
      }

      .grid {
        padding: 0 calc(240 * 100vw / 1920);

        .grid-item {
          width: calc(259 * 100vw / 1920);
          gap: calc(16 * 100vw / 1920);

          .svg-icon {
            width: calc(80 * 100vw / 1920);
            height: calc(80 * 100vw / 1920);
          }

          .label {
            font-size: calc(24 * 100vw / 1920);
            line-height: calc(32 * 100vw / 1920);
            letter-spacing: calc(0.216 * 100vw / 1920);
          }

          .value {
            font-size: calc(44 * 100vw / 1920);
            line-height: calc(52 * 100vw / 1920);
          }
        }
      }

      .button {
        height: calc(44 * 100vw / 1920);
        padding: 0 calc(16 * 100vw / 1920) 0 calc(24 * 100vw / 1920);
        gap: calc(8 * 100vw / 1920);
        border-radius: calc(80 * 100vw / 1920);
        border: calc(1.5 * 100vw / 1920) solid #1d1d1f;

        .text {
          font-size: calc(18 * 100vw / 1920);
          line-height: calc(24 * 100vw / 1920);
        }

        .icon-wrapper {
          width: calc(20 * 100vw / 1920);
          height: calc(20 * 100vw / 1920);
          padding: calc(4 * 100vw / 1920) calc(6 * 100vw / 1920);
          gap: calc(10 * 100vw / 1920);

          .svg-icon {
            width: calc(16 * 100vw / 1920);
            height: calc(16 * 100vw / 1920);
          }
        }
      }
    }

    .feature-block {
      gap: calc(32 * 100vw / 1920);
      padding: calc(64 * 100vw / 1920);

      .game-img-wrapper {
        height: calc(619 * 100vw / 1920);
        border-radius: calc(32 * 100vw / 1920);
        background-position-x: calc(100% + 80 * 100vw / 1920);

        .game-content {
          width: 38.28125vw;
          padding-left: calc(120 * 100vw / 1920);
          gap: calc(24 * 100vw / 1920);

          .game-title {
            font-size: calc(48 * 100vw / 1920);
            line-height: calc(56 * 100vw / 1920);
            letter-spacing: calc(-0.076 * 100vw / 1920);
          }

          .game-desc {
            width: calc(454 * 100vw / 1920);
            font-size: calc(20 * 100vw / 1920);
            line-height: calc(28 * 100vw / 1920);
            letter-spacing: calc(0.048 * 100vw / 1920);
          }
        }
      }

      .card-list {
        gap: calc(32 * 100vw / 1920);

        .card {
          padding: calc(48 * 100vw / 1920) calc(56 * 100vw / 1920);
          min-height: calc(791 * 100vw / 1920);
          // padding: calc(48 * 100vw / 1920) calc(56 * 100vw / 1920);
          border-radius: calc(32 * 100vw / 1920);

          .info-wrapper {
            gap: calc(24 * 100vw / 1920);
            width: calc(398 * 100vw / 1920);

            .title {
              font-size: calc(48 * 100vw / 1920);
              line-height: calc(56 * 100vw / 1920);
              letter-spacing: calc(-0.076 * 100vw / 1920);
            }

            .desc {
              font-size: calc(20 * 100vw / 1920);
              line-height: calc(28 * 100vw / 1920);
              letter-spacing: calc(0.048 * 100vw / 1920);
            }
          }

          .img-wrapper {
            height: calc(428 * 100vw / 1920);
          }
        }
      }
    }
  }
}

@media (max-width: 1440px) {
  .genesis-wrapper {
    .feature-content .grid {
      padding: 0 120px;
    }

    .feature-block {
      .game-img-wrapper {
        background-image: url('@/assets/images/season-1440.jpg');
        background-position-x: right;

        .game-content {
          width: 800px;
          padding-left: clamp(64px, calc(120px - 56 / 160 * (1440px - 100vw)), 120px);
        }
      }

      .card-list .card {
        .img-wrapper {
          height: clamp(376px, calc(408px - 32 / 160 * (1440px - 100vw)), 408px);
        }

        &:first-child .img-wrapper {
          background-image: url('@/assets/images/app-1440.jpg');
        }
        &:last-child .img-wrapper {
          background-image: url('@/assets/images/desktop-1440.jpg');
        }
      }
    }
  }
}

@media (max-width: 1280px) {
  .genesis-wrapper {
    padding-bottom: clamp(40px, calc(120px - 40 / 446 * (1280px - 100vw)), 80px);
    gap: clamp(40px, calc(120px - 80 / 446 * (1280px - 100vw)), 120px);

    .feature-content {
      padding: clamp(40px, calc(80px - 40 / 446 * (1280px - 100vw)), 80px)
        clamp(20px, calc(64px - 44 / 446 * (1280px - 100vw)), 64px) 0;
      gap: clamp(40px, calc(80px - 40 / 446 * (1280px - 100vw)), 80px);

      .title {
        font-size: clamp(28px, calc(60px - 32 / 446 * (1280px - 100vw)), 60px);
        line-height: clamp(36px, calc(60px - 32 / 446 * (1280px - 100vw)), 68px); /* 113.333% */
      }

      .grid {
        padding: 0px clamp(0px, calc(120px - 120 / 446 * (1280px - 100vw)), 120px);

        .grid-item {
          gap: clamp(8px, calc(16px - 8 / 446 * (1280px - 100vw)), 16px);

          .svg-icon {
            width: clamp(40px, calc(80px - 40 / 446 * (1280px - 100vw)), 80px);
            height: clamp(40px, calc(80px - 40 / 446 * (1280px - 100vw)), 80px);
          }

          .label {
            font-size: clamp(16px, calc(24px - 8 / 446 * (1280px - 100vw)), 24px);
            line-height: clamp(24px, calc(32px - 8 / 446 * (1280px - 100vw)), 32px); /* 133.333% */
          }

          .value {
            font-size: clamp(28px, calc(44px - 16 / 446 * (1280px - 100vw)), 44px);
            line-height: clamp(32px, calc(52px - 20 / 446 * (1280px - 100vw)), 52px); /* 118.182% */
          }
        }
      }
    }

    .feature-block {
      padding: clamp(20px, calc(64px - 44 / 446 * (1280px - 100vw)), 64px);

      .game-img-wrapper {
        height: clamp(476px, calc(619px - 143 / 446 * (1280px - 100vw)), 619px);
        background-image: url('@/assets/images/season-1280.jpg');

        .game-content {
          width: 735px;
          padding-left: 64px;
        }
      }

      .card-list {
        .card {
          padding: 48px clamp(32px, calc(56px - 24 / 446 * (1280px - 100vw)), 56px);
          // min-height: auto;
          align-self: stretch;
          min-height: clamp(620px, calc(791px - 171 / 446 * (1280px - 100vw)), 791px);
          border-radius: clamp(24px, calc(32px - 8 / 446 * (1280px - 100vw)), 32px);

          .info-wrapper {
            gap: 24px;
            width: auto;

            .title {
              font-size: clamp(22px, calc(48px - 26 / 446 * (1280px - 100vw)), 48px);
            }

            .desc {
              font-size: clamp(14px, calc(20px - 6 / 446 * (1280px - 100vw)), 20px);
            }
          }

          .img-wrapper {
            height: clamp(232px, calc(376px - 144 / 446 * (1280px - 100vw)), 376px);
          }

          &:first-child .img-wrapper {
            background-image: url('@/assets/images/app-1280.jpg');
          }
          &:last-child .img-wrapper {
            background-image: url('@/assets/images/desktop-1280.jpg');
          }
        }
      }
    }
  }
}

@media (max-width: 834px) {
  .genesis-wrapper {
    padding-bottom: 40px;
    gap: 40px;

    .feature-content {
      padding: 40px 20px 0;
      gap: 40px;

      .title {
        font-size: 28px;
        line-height: 36px;
      }

      .grid {
        flex-direction: column;
        gap: 40px;
        padding: 0px 0px;

        .grid-item {
          gap: 8px;

          .svg-icon {
            width: 40px;
            height: 40px;
          }

          .label {
            font-size: 16px;
            line-height: 24px;
          }

          .value {
            font-size: 28px;
            line-height: 32px;
          }
        }
      }

      .button {
        height: 36px;
        padding: 0px 8px 0px 12px;
        gap: 4px;
        border-radius: 28px;
        border: 1px solid #1d1d1f;

        .text {
          font-size: 14px;
          line-height: 22px; /* 157.143% */
        }

        .icon-wrapper {
          width: 16px;
          height: 16px;
          padding: 3.2px 4.8px;
          gap: 8px;

          .svg-icon {
            width: 16px;
            height: 16px;
          }
        }
      }
    }

    .feature-block {
      padding: 20px;

      .game-img-wrapper {
        height: 476px;
        background-image: url('@/assets/images/season-834.jpg');

        .game-content {
          width: 100%;
          top: 0.097px;
          right: 0;
          bottom: auto;
          padding: 16px 24px 32px;
          gap: 12px;
          border-radius: 24px;
          background: linear-gradient(
            180deg,
            #111821 0%,
            #111821 83.08%,
            rgba(17, 24, 33, 0.2) 94.68%,
            rgba(17, 24, 33, 0) 100%
          );

          .game-title {
            width: 100%;
            font-size: 22px;
            line-height: 30px;
          }

          .game-desc {
            width: 100%;
            font-size: 14px;
            line-height: 22px;
          }
        }
      }

      .card-list {
        flex-direction: column;

        .card {
          padding: 32px;
          min-height: clamp(426px, calc(504px - 78 / 459 * (834px - 100vw)), 504px);
          gap: 24px;

          .img-wrapper {
            height: clamp(232px, calc(332px - 100 / 459 * (834px - 100vw)), 332px);
          }

          &:first-child .img-wrapper {
            background-image: url('@/assets/images/app-834.jpg');
          }
          &:last-child {
            min-height: clamp(492px, calc(526px - 34 / 459 * (834px - 100vw)), 526px);

            .img-wrapper {
              background-image: url('@/assets/images/desktop-834.jpg');
            }
          }
        }
      }
    }
  }
}

@media (max-width: 480px) {
  .genesis-wrapper .feature-block .game-img-wrapper {
    background-image: url('@/assets/images/season-375.jpg');

    .game-content {
      height: 67vw;
    }
  }
}
</style>
