<script lang="ts" setup>
import { gsap } from 'gsap'
import { computed, onMounted, ref,defineProps } from 'vue'

const isDrawerOpen = ref(false)
const props = defineProps({
  headerStyle: {
    type: Object,
    default: () => ({})
  }
})
const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value
  if (isDrawerOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

const closeDrawer = () => {
  isDrawerOpen.value = false
  document.body.style.overflow = 'auto'
}

const handleChange = (value: string | number) => {
  switch (value) {
    case 'x':
      window.open('https://x.com/Gamerboom_')
      break
    case 'telegram':
      window.open('https://t.me/GamerBoom_Official')
      break
    case 'discord':
      window.open('https://discord.gg/gamerboomofficial')
      break
    case 'medium':
      window.open('https://medium.com/@gamerboom')
      break
  }
}

/**
 * 跳转到dashboard
 */
const goToDashboard = () => {
  const webUrl = import.meta.env.VITE_APP_WEB
  window.open(webUrl, '_black')
}

/**
 * header动画
 */
const headerAnimation = () => {
  gsap.from('.navgation', {
    opacity: 0,
    y: -80,
    duration: 1,
    ease: 'power1.inOut',
    onComplete() {
      gsap.killTweensOf('.navgation')
    },
  })
}

// 计算perceptionUrl
const perceptionUrl = computed(() => {
  return `${import.meta.env.VITE_APP_WEB}/perceptron`
})

onMounted(() => {
  // 进入页面，执行header动画
  headerAnimation()

  // 监听resize事件，如果抽屉处于打开状态，如果页面宽度大于834px，则关闭抽屉
  window.addEventListener('resize', () => {
    if (isDrawerOpen.value && window.innerWidth > 834) {
      closeDrawer()
    }
  })
})
</script>

<template>
  <div class="navgation w-nav" :style="headerStyle">
    <div class="navigation-container">
      <a class="brand w-nav-brand">
        <SvgIcon name="logo" />
      </a>
      <div class="nav-right">
        <nav role="navigation" class="nav-menu-container w-nav-menu">
          <a :href="perceptionUrl" target="_blank" class="nav-link">
            <SvgIcon name="perception" />
            Perceptron
          </a>
          <a href="https://gamerboom.gitbook.io/gamerboom-whitepaper/" target="_blank" class="nav-link">
            Docs
          </a>
          <a class="nav-link">
            <Dropdown title="Community" @change="handleChange">
              <template #dropdown>
                <DropdownItem value="x">
                  <div class="text">X</div>
                  <SvgIcon name="x" />
                </DropdownItem>
                <DropdownItem value="telegram">
                  <div class="text">Telegram</div>
                  <SvgIcon name="telegram" />
                </DropdownItem>
                <DropdownItem value="discord">
                  <div class="text">Discord</div>
                  <SvgIcon name="discord" />
                </DropdownItem>
                <DropdownItem value="medium">
                  <div class="text">Medium</div>
                  <SvgIcon name="medium" />
                </DropdownItem>
              </template>
            </Dropdown>
          </a>
        </nav>
        <div class="launch-button" @click="goToDashboard">
          <SvgIcon name="launch" />
          <div class="text">Launch App</div>
        </div>
        <div class="menu-button w-nav-button" @click="toggleDrawer">
          <div class="icon w-icon-nav-menu">
            <SvgIcon name="menu" />
          </div>
          <Teleport to="body">
            <div class="w-drawer">
              <Transition name="fade">
                <div v-if="isDrawerOpen" class="drawer-mask" @click="closeDrawer"></div>
              </Transition>
              <Transition name="slide-right">
                <div v-if="isDrawerOpen" class="drawer-container">
                  <div class="drawer-header">
                    <div class="drawer-header-close" @click="closeDrawer">
                      <SvgIcon name="close" />
                    </div>
                  </div>
                  <div class="drawer-content">
                    <div class="nav">
                      <div class="nav-item">
                        <a :href="perceptionUrl" target="_blank" class="nav-link">
                          <SvgIcon name="perception" />
                          Perceptron
                        </a>
                      </div>

                      <div class="nav-item">
                        <a class="nav-link" href="https://gamerboom.gitbook.io/gamerboom-whitepaper/"  target="_blank">
                          Docs
                        </a>
                      </div>
                      <div class="nav-item">
                        <a class="nav-link" href="https://x.com/Gamerboom_" target="_blank">X</a>
                      </div>
                      <div class="nav-item">
                        <a class="nav-link" href="https://t.me/GamerBoom_Official" target="_blank">Telegram</a>
                      </div>
                      <div class="nav-item">
                        <a class="nav-link" href="https://discord.gg/gamerboomofficial" target="_blank">Discord</a>
                      </div>
                      <div class="nav-item">
                        <a class="nav-link" href="https://medium.com/@gamerboom" target="_blank">
                          Medium
                        </a>
                      </div>
                    </div>
                    <div class="w-launch-button" @click="goToDashboard">
                      <SvgIcon name="launch" />
                      <div class="text">Launch App</div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </Teleport>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navgation {
  position: fixed;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0%;
  z-index: 100;
  display: flex;
  align-items: center;
  height: 72px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(14px);
}

.navigation-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px clamp(32px, calc(64px - 32 / 480 * (1920px - 100vw)), 64px);
}

.brand {
  flex: none;
  width: 150px;

  .svg-icon {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
  }
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 80px;

  :deep(.dropdown-item) {
    display: flex;
    justify-content: space-between;

    .text {
      font-family: Urbanist;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      /* 142.857% */
    }

    .svg-icon {
      width: 14px;
      height: 14px;
      flex-shrink: 0;
    }
  }
}

.nav-menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;

  .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: auto;
    min-width: 85px;
    color: #6e6e73;
    text-align: center;
    font-family: Urbanist;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 24px;
    /* 150% */
    text-decoration: none;

    &:hover,
    &:active {
      color: #1d1d1f;
    }
  }
}

.launch-button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  height: 44px;
  padding: 0px 16px;
  border-radius: 40px;
  background: #1d1d1f;
  cursor: pointer;
  overflow: hidden;

  .svg-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }

  .text {
    color: #fff;
    text-align: center;
    font-family: Urbanist;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
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

.menu-button {
  width: 24px;
  height: 24px;
}

.w-nav-button {
  display: none;

  .svg-icon {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
}

.w-drawer {
  width: 100%;
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  pointer-events: none;

  .drawer-mask {
    position: fixed;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: auto;
    height: 100vh;
  }

  .drawer-container {
    position: fixed;
    top: 0px;
    right: 0;
    bottom: 0px;
    width: 80%;
    max-width: 400px;
    height: 100vh;
    background-color: #fff;
    padding: 80px 32px 50px 32px;
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    overflow-y: auto;
    z-index: 102;

    .drawer-header {
      position: absolute;
      top: 0;
      right: 0;
      padding: 24px 20px;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 20px;

      .drawer-header-close {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        cursor: pointer;

        .svg-icon {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
        }
      }
    }

    .drawer-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 52px;

        .nav-item {
          display: flex;
          width: 100%;
          height: 44px;
          justify-content: center;
          align-items: center;

          .nav-link {
            display: flex;
            align-items: center;
            gap: 4px;
            color: #6e6e73;
            text-align: center;
            font-family: Urbanist;
            font-size: 16px;
            font-style: normal;
            font-weight: 800;
            line-height: 24px;
            /* 150% */
            text-decoration: none;

            &:hover,
            &:active {
              color: #6e6e73;
            }
          }
        }
      }

      .w-launch-button {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        flex-shrink: 0;
        width: 216px;
        height: 44px;
        padding: 0px 16px;
        border-radius: 40px;
        background: #1d1d1f;
        cursor: pointer;
        overflow: hidden;

        .svg-icon {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }

        .text {
          color: #fff;
          text-align: center;
          font-family: Urbanist;
          font-size: 18px;
          font-style: normal;
          font-weight: 700;
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
  }
}

/* 抽屉动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

@media (min-width: 1921px) {
  .navgation {
    height: calc(72 * 100vw / 1920);
  }

  .navigation-container {
    padding: 0px calc(64 * 100vw / 1920);
  }

  .brand {
    width: calc(150 * 100vw / 1920);

    .svg-icon {
      width: calc(36 * 100vw / 1920);
      height: calc(36 * 100vw / 1920);
    }
  }

  .nav-right {
    gap: calc(80 * 100vw / 1920);

    :deep(.dropdown-item) {
      .text {
        font-size: calc(14 * 100vw / 1920);
        line-height: calc(20 * 100vw / 1920);
        /* 142.857% */
      }

      .svg-icon {
        width: calc(14 * 100vw / 1920);
        height: calc(14 * 100vw / 1920);
      }
    }
  }

  .nav-menu-container {
    gap: calc(64 * 100vw / 1920);

    .nav-link {
      min-width: calc(85 * 100vw / 1920);
      font-size: calc(16 * 100vw / 1920);
      line-height: calc(24 * 100vw / 1920);
      /* 150% */
      gap: calc(4 * 100vw / 1920);
    }
  }

  .launch-button {
    gap: calc(8 * 100vw / 1920);
    height: calc(44 * 100vw / 1920);
    padding: 0px calc(16 * 100vw / 1920);
    border-radius: calc(40 * 100vw / 1920);

    .svg-icon {
      width: calc(18 * 100vw / 1920);
      height: calc(18 * 100vw / 1920);
    }

    .text {
      font-size: calc(18 * 100vw / 1920);
      line-height: calc(24 * 100vw / 1920);
      /* 133.333% */
    }
  }

  .menu-button {
    width: calc(24 * 100vw / 1920);
    height: calc(24 * 100vw / 1920);
  }
}

@media (max-width: 1280px) {
  .navgation {
    height: clamp(48px, calc(72px - 24 / 446 * (1280px - 100vw)), 72px);
  }

  .navigation-container {
    padding: 0px clamp(20px, calc(32px - 12 / 446 * (1280px - 100vw)), 32px);
  }

  .brand .svg-icon {
    width: clamp(24px, calc(32px - 12 / 446 * (1280px - 100vw)), 36px);
  }

  .launch-button {
    gap: 8px;
    height: clamp(32px, calc(44px - 12 / 446 * (1280px - 100vw)), 44px);
    padding: 0px 16px;
    border-radius: clamp(32px, calc(40px - 8 / 446 * (1280px - 100vw)), 40px);

    .svg-icon {
      width: 18px;
      height: 18px;
    }

    .text {
      font-size: clamp(14px, calc(18px - 4 / 446 * (1280px - 100vw)), 18px);
      line-height: 133.333%;
    }
  }
}

@media (max-width: 834px) {
  .nav-menu-container {
    display: none;
  }

  .launch-button {
    display: none;
  }

  .w-nav-button {
    display: block;
  }
}
</style>
