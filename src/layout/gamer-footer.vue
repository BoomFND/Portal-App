<script setup>
import SvgIcon from '@/components/svg-icon.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const footerRef = ref(null)

const fadeUpTrigger = () => {
  const fadeUpDoms = gsap.utils.toArray(footerRef.value.querySelectorAll('.fade-up'))

  fadeUpDoms.forEach((item) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top bottom'
        }
      }
    )
  })
}

onMounted(() => {
  fadeUpTrigger()
})
</script>

<template>
  <footer ref="footerRef" class="footer w-footer">
    <section class="container">
      <div class="blog">
        <h4 class="fade-up">Blog</h4>
        <div class="list">
          <div class="item fade-up">
            <div class="avatar"></div>
            <div class="wrapper">
              <div class="title">
                Interchain Token Service Opens Native- Like Capabilities on 15+ Chains
              </div>
              <div class="time">February 7, 2024</div>
            </div>
          </div>
          <div class="item fade-up">
            <div class="avatar"></div>
            <div class="wrapper">
              <div class="title">The AXL Token & the Interchain Future</div>
              <div class="time">February 7, 2024</div>
            </div>
          </div>
          <div class="item fade-up">
            <div class="avatar"></div>
            <div class="wrapper">
              <div class="title">Security on Axelar Network</div>
              <div class="time">February 7, 2024</div>
            </div>
          </div>
        </div>
      </div>
      <div class="docs">
        <h4 class="fade-up">Docs</h4>
        <div class="list">
          <div class="item fade-up">
            <div class="wrapper">
              <div class="title">Developers</div>
              <div class="time">
                Start building multichain applications that reach users everywhere.
              </div>
            </div>
          </div>
          <div class="item fade-up">
            <div class="wrapper">
              <div class="title">NODE OPERATORS</div>
              <div class="time">Start your Axelar node using a snapshot.</div>
            </div>
          </div>
          <div class="item fade-up">
            <div class="wrapper">
              <div class="title">Bug Bounties</div>
              <div class="time">Get paid to find + disclose security vulnerabilities.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="videos">
        <h4 class="fade-up">Videos</h4>
        <div class="title fade-up">GameBoom Virtual Machine</div>
        <div class="video fade-up"></div>
      </div>
    </section>
    <div class="container logo-wrapper">
      <!-- <img class="fade-up" src="@/assets/images/footer/logo.svg" alt="" /> -->
      <SvgIcon class="fade-up" name="logo"></SvgIcon>
    </div>
    <div class="container accordions">
      <div class="social-wrapper">
        <div class="socials fade-up">
          <Twitter></Twitter>
          <Discord></Discord>
          <Telegram></Telegram>
        </div>
        <div class="button fade-up">
          <img src="@/assets/images/section-1/windows.svg" alt="" />
          <div class="button__text">Get Started</div>
        </div>
      </div>
      <div class="right-wrapper">
        <div class="item">
          <div class="title fade-up">Company</div>
          <div class="list">
            <a class="fade-up" href="#">About Us</a>
            <a class="fade-up" href="#">FAQs</a>
            <a class="fade-up" href="#">Media Kit</a>
          </div>
        </div>
        <div class="item">
          <div class="title fade-up">Resources</div>
          <div class="list">
            <a class="fade-up" href="#">Documentation</a>
            <a class="fade-up" href="#">Trailer</a>
            <a class="fade-up" href="#">Download APP</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container copyright-wrapper">
      <div class="copyright fade-up">
        Copyright © 2024 GAMERBOOM FOUNDATION. ALL RIGHTS RESERVED.
      </div>
      <div class="wrapper fade-up">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 12.396vw;
  padding: 0 5.9375vw;

  .container {
    display: flex;
    justify-content: space-between;
    gap: 5.9375vw;

    .blog,
    .docs,
    .videos {
      flex: 1;
    }

    h4 {
      color: #fff;
      font-family: Urbanist;
      font-size: 1.667vw;
      font-style: normal;
      font-weight: 800;
      line-height: 2.5vw; /* 150% */
    }

    .list {
      margin-top: 2.917vw;
      display: flex;
      flex-direction: column;

      .item {
        display: inline-flex;
        height: 4.84375vw;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1.146vw;
        flex-shrink: 0;

        .avatar {
          flex-shrink: 0;
          width: 4.271vw;
          height: 4.271vw;
          border-radius: 1.25vw;
          background: #090c0f;
          box-shadow: 0px 0.208vw 0.208vw 0px rgba(0, 0, 0, 0.25);
        }

        .wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 0.625vw;

          .title {
            color: #fff;
            font-family: Urbanist;
            font-size: 1.25vw;
            font-style: normal;
            font-weight: 600;
            line-height: 1.5625vw; /* 125% */
          }

          .time {
            color: #8d8d8d;
            font-family: Urbanist;
            font-size: 0.833vw;
            font-style: normal;
            font-weight: 600;
            line-height: 1.042vw; /* 125% */
          }
        }

        & + .item {
          margin-top: 3.542vw;
        }
      }
    }

    .videos {
      .title {
        margin-top: 2.917vw;
        color: #fff;
        font-family: Urbanist;
        font-size: 1.25vw;
        font-style: normal;
        font-weight: 600;
        line-height: 1.5625vw; /* 125% */
      }

      .video {
        margin-top: 1.042vw;
        width: 25.729vw;
        height: 14.84375vw;
        flex-shrink: 0;
        border-radius: 1.25vw;
        background: #090c0f;
        box-shadow: 0px 0.208vw 0.208vw 0px rgba(0, 0, 0, 0.25);
      }
    }

    &.logo-wrapper {
      margin-top: 10.3125vw;
      width: 100%;
      height: 16.927vw;

      .svg-icon {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
  }

  .accordions {
    margin-top: 7.1875vw;
    display: flex;
    justify-content: space-between;

    .social-wrapper {
      .socials {
        display: flex;
        gap: 0.521vw;
        svg {
          color: #8d8d8d;
        }
      }

      .button {
        margin-top: 3.646vw;
        width: 8.385vw;
        height: 2.292vw;
      }
    }

    .right-wrapper {
      display: flex;
      justify-content: space-between;
      width: 23.59375vw;

      .title {
        color: #8d8d8d;
        font-family: Urbanist;
        font-size: 0.833vw;
        font-style: normal;
        font-weight: 600;
        line-height: 1.042vw; /* 125% */
      }

      .list {
        margin-top: 1.25vw;
        display: flex;
        flex-direction: column;
        gap: 3px;

        a {
          color: #fff;
          font-family: Urbanist;
          font-size: 1.25vw;
          font-style: normal;
          font-weight: 600;
          line-height: 1.5625vw; /* 125% */
        }
      }
    }
  }

  .copyright-wrapper {
    margin-top: 4.948vw;
    margin-bottom: 10.417vw;

    color: #8d8d8d;
    font-family: Urbanist;
    font-size: 0.833;
    font-style: normal;
    font-weight: 600;
    line-height: 1.042vw; /* 125% */

    .wrapper {
      display: flex;
      gap: 2.34375vw;

      a {
        color: #8d8d8d;
      }
    }
  }
}

@media (max-width: 768px) {
  .w-footer {
    margin-top: 53.333vw;

    .container {
      flex-direction: column;

      h4 {
        font-size: 6.4vw;
        line-height: normal;
      }

      .list {
        margin-top: 6.4vw;

        .item {
          gap: 4.267vw;
          height: auto;

          .avatar {
            width: 29.333vw;
            height: 29.333vw;
            border-radius: 6.4vw;
          }

          & + .item {
            margin-top: 4.267vw;
          }

          .wrapper {
            gap: 3.2vw;

            .title {
              font-size: 4.267vw;
              line-height: normal;
            }

            .time {
              font-size: 3.2vw;
              line-height: normal;
            }
          }
        }
      }

      .videos {
        .title {
          margin-top: 6.4vw;
          font-size: 4.267vw;
          line-height: normal;
        }

        .video {
          margin-top: 4.267vw;
          width: 100%;
          height: 60.267vw;
          border-radius: 6.4vw;
        }
      }
    }

    .accordions {
      margin-top: 6.4vw;

      .social-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .button {
          margin-top: 0;
          width: 38.93vw;
          height: 11.733vw;
          border-radius: 21.33vw;
          gap: 2.133vw;

          img {
            width: 3.2vw;
            height: 3.2vw;
          }

          &__text {
            font-size: 3.733vw;
            line-height: normal;
          }
        }
      }

      .right-wrapper {
        margin-top: 6.4vw;
        width: 100%;

        .item {
          flex: 1;

          .title {
            font-size: 3.2vw;
            line-height: normal;
          }

          .list {
            margin-top: 6.4vw;
            gap: 3.2vw;

            a {
              font-size: 4.267vw;
              line-height: normal;
            }
          }
        }
      }
    }

    .copyright-wrapper {
      margin-top: 6.4vw;

      .copyright {
        font-size: 2.667vw;
        line-height: normal;
      }

      .wrapper {
        margin-top: 2.133vw;
        gap: 10.667vw;
      }
    }
  }
}
</style>
