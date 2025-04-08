<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const gameList = [
  {
    name: 'League of Legends',
    type: 'MOBA',
    status: 'live',
    image: '1.png'
  },
  {
    name: 'Apex',
    type: 'FPS',
    status: 'pending',
    image: '2.png'
  },
  {
    name: 'Dota 2',
    type: 'MOBA',
    status: 'pending',
    image: '3.png'
  },
  {
    name: 'Team Fight Tatic',
    type: 'SLG',
    status: 'live',
    image: '4.png'
  },
  {
    name: 'CSGO 2',
    type: 'FPS',
    status: 'pending',
    image: '5.png'
  },
  {
    name: 'Valorant',
    type: 'FPS',
    status: 'pending',
    image: '6.png'
  },
  {
    name: 'Fortnite',
    type: 'FPS',
    status: 'pending',
    image: '7.png'
  },
  {
    name: 'Overwatch 2',
    type: 'FPS',
    status: 'pending',
    image: '8.png'
  },
  {
    name: 'Rocket League',
    type: 'SPG',
    status: 'pending',
    image: '9.png'
  },
  {
    name: 'Rainbow Six Siege',
    type: 'FPS',
    status: 'pending',
    image: '10.png'
  },
  {
    name: 'PUBG',
    type: 'SPG',
    status: 'pending',
    image: '11.png'
  },
  {
    name: 'FF XIV',
    type: 'MMO',
    status: 'pending',
    image: '12.png'
  },
  {
    name: 'Diablo 4',
    type: 'MMO',
    status: 'pending',
    image: '13.png'
  },
  {
    name: 'COD: MW2 / W2',
    type: 'SLG',
    status: 'pending',
    image: '14.png'
  },
  {
    name: 'Destiny 2',
    type: 'SLG',
    status: 'pending',
    image: '15.png'
  },
  {
    name: 'Elden Ring',
    type: 'RPG',
    status: 'pending',
    image: '16.png'
  },
  {
    name: 'GTA V',
    type: 'RPG',
    status: 'pending',
    image: '17.png'
  },
  {
    name: 'Lost Ark',
    type: 'SLG',
    status: 'pending',
    image: '18.png'
  },
  {
    name: 'Genshin Impact',
    type: 'SLG',
    status: 'pending',
    image: '19.png'
  },
  {
    name: 'Wuthering Waves',
    type: 'RPG',
    status: 'pending',
    image: '20.png'
  },
  {
    name: 'World of warcraft',
    type: 'MMO',
    status: 'pending',
    image: '21.png'
  },
  {
    name: 'Hearthstone',
    type: 'SLG',
    status: 'pending',
    image: '22.png'
  },
  {
    name: 'Honkai: Star Rail',
    type: 'SLG',
    status: 'pending',
    image: '23.png'
  },
  {
    name: 'Mobile Game',
    type: '',
    status: '',
    image: ''
  }
]

const pagination = reactive({
  currentPage: 1,
  pageSize: 9,
  total: 24
})
const games = ref(gameList.slice(0, pagination.currentPage * pagination.pageSize))

const debouncedRef = (value, delay = 500) => {
  let timer
  return customRef((track, trigger) => {
    return {
      get() {
        // 收集依赖
        track()
        return value
      },

      set(val) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          // 派发更新
          value = val
          trigger()
        }, delay)
      }
    }
  })
}

const keyword = debouncedRef('', 500)

// 搜索
watch(keyword, (val) => {
  games.value = gameList.filter((game) => JSON.stringify(game).toLowerCase().includes(val))
})

// 添加分类
const activeType = ref('')
// 当前分类列表
const currentCategoryList = ref([])

// 切换分类
const handleClick = (type) => {
  if (activeType.value === type) return

  activeType.value = type
  pagination.currentPage = 1

  if (type === 'all') {
    currentCategoryList.value = gameList.slice()
    games.value = currentCategoryList.value.slice(0, pagination.pageSize)
  } else {
    currentCategoryList.value = gameList.filter((game) => game.type === type)
    games.value =
      currentCategoryList.value.length > pagination.pageSize
        ? currentCategoryList.value.slice(0, pagination.pageSize)
        : currentCategoryList.value
  }

  nextTick(() => {
    gameTrigger()
  })
}

// 是否显示加载更多
const isLoadMoreShow = computed(() => games.value.length < currentCategoryList.value.length)

// 加载更多
const loadMore = () => {
  if (games.value.length < gameList.length) {
    pagination.currentPage++
    games.value = gameList.slice(0, games.value.length + pagination.pageSize)

    nextTick(() => {
      gameTrigger(true)
    })
  }
}

const getImage = (image) => {
  return new URL(`../../assets/images/section-6/${image}`, import.meta.url).href
}

const activeIndex = ref()
const opacity = ref(1)
const hoverColorCls = ref()

const handleMouseover = (index) => {
  activeIndex.value = index
  opacity.value = 0.2
  hoverColorCls.value = getHoverColor()
}

const handleMouseout = () => {
  activeIndex.value = null
  opacity.value = 1
  hoverColorCls.value = ''
}

const getHoverColor = () => {
  if (opacity.value === 1) return ''
  const colors = ['orange', 'red', 'blue', 'green', 'yellow', 'purple']
  return colors[Math.floor(Math.random() * colors.length)]
}

//  初始化，设置分类、分类列表
handleClick('all')

const gamesRef = ref(null)

let tl = null

const fadeTrigger = () => {
  const fadeUpDom = gamesRef.value.querySelectorAll('.fade-up')
  tl.from(fadeUpDom, {
    opacity: 0,
    y: 100,
    duration: 0.5,
    ease: 'power3.out',
    stagger: 0.05
  })
    .from('.fade-right', {
      opacity: 0,
      x: -100,
      duration: 0.5,
      ease: 'power3.out'
    })
    .from(
      '.fade-left',
      {
        opacity: 0,
        x: 100,
        duration: 0.5,
        ease: 'power3.out'
      },
      '<'
    )
}

const gameTrigger = (isAppending = false) => {
  const gameItems = gamesRef.value.querySelectorAll('.item')

  // 计算执行动画的dom列表
  const doms = isAppending
    ? Array.from(gameItems).slice(pagination.pageSize * (pagination.currentPage - 1), -1)
    : gameItems

  tl.from(doms, {
    opacity: 0,
    x: -100,
    duration: 0.3,
    ease: 'power3.out',
    stagger: 0.1
  })
}

onMounted(() => {
  tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.games',
      start: 'top 80%'
    }
  })

  fadeTrigger()
})
</script>

<template>
  <section ref="gamesRef" class="games">
    <div class="header">
      <div class="wrapper">
        <div class="title fade-up">Our Games Eco</div>
        <div class="desc fade-up">We connect top global games with the Web3 and crypto world.</div>
      </div>
      <div class="nav-wrapper">
        <nav class="nav fade-right">
          <div
            class="nav__item"
            :class="{ active: activeType === 'all' }"
            @click="handleClick('all')"
          >
            ALL
          </div>
          <div
            class="nav__item"
            :class="{ active: activeType === 'MOBA' }"
            @click="handleClick('MOBA')"
          >
            MOBA
          </div>
          <div
            class="nav__item"
            :class="{ active: activeType === 'FPS' }"
            @click="handleClick('FPS')"
          >
            FPS
          </div>
          <div
            class="nav__item"
            :class="{ active: activeType === 'MMO' }"
            @click="handleClick('MMO')"
          >
            MMO
          </div>
          <div
            class="nav__item"
            :class="{ active: activeType === 'SLG' }"
            @click="handleClick('SLG')"
          >
            SLG
          </div>
          <div
            class="nav__item"
            :class="{ active: activeType === 'RPG' }"
            @click="handleClick('RPG')"
          >
            RPG
          </div>
          <div
            class="nav__item"
            :class="{ active: activeType === 'SPG' }"
            @click="handleClick('SPG')"
          >
            SPG
          </div>
        </nav>
        <div class="search-wrapper fade-left">
          <img src="@/assets/images/section-6/search.png" alt="" />
          <input class="search-input" type="text" placeholder="SEARCH..." v-model="keyword" />
        </div>
      </div>
    </div>
    <div class="list">
      <div
        class="item"
        :class="[activeIndex === index ? hoverColorCls : '']"
        v-for="(game, index) in games"
        :key="game.name"
        @mouseover="handleMouseover(index)"
        @mouseout="handleMouseout(index)"
      >
        <div v-if="game.image" class="image">
          <img :src="getImage(game.image)" alt="" />
        </div>
        <div class="info">
          <div class="top">
            <Desktop v-if="game.type" :opacity="activeIndex === index ? opacity : 1"></Desktop>
            <Mobile v-else :opacity="activeIndex === index ? opacity : 1"></Mobile>
            <div v-if="game.status" class="status">{{ game.status }}</div>
          </div>
          <div class="name">{{ game.name }}</div>
        </div>
      </div>
    </div>
    <div class="pagination" v-if="isLoadMoreShow">
      <div class="more" @click="loadMore">Load More</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.games {
  margin-top: 286px;
  padding: 0 114px;

  .header {
    margin-bottom: 60px;
    display: flex;
    width: 100%;
    height: 252.998px;
    padding-bottom: 1px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
    flex-shrink: 0;

    .title {
      color: #fff;
      text-align: center;
      font-family: Urbanist;
      font-size: 68px;
      font-style: normal;
      font-weight: 800;
      line-height: 64px; /* 94.118% */
    }

    .desc {
      margin-top: 40px;
      color: #fff;
      text-align: center;
      -webkit-text-stroke-width: 1;
      -webkit-text-stroke-color: rgba(141, 141, 141, 0.02);
      font-family: Urbanist;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px; /* 120% */
    }

    .nav-wrapper {
      display: flex;
      width: 1284px;
      height: 44px;
      justify-content: center;
      align-items: flex-start;
      gap: 72px;
      flex-shrink: 0;

      .nav {
        display: flex;
        justify-content: space-between;
        width: 857px;
        height: 44px;
        flex-shrink: 0;
        border-radius: 43px;
        border: 2px solid #1c1c1c;
        background: #0f1012;
        box-shadow: 0px 0px 8px 0px #1c1c1c;

        &__item {
          padding: 10px 25px;
          color: #8d8d8d;
          font-family: Urbanist;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 22.5px; /* 140.625% */
          cursor: pointer;

          &:hover {
            color: #fff;
          }

          &.active {
            border-radius: 23px;
            background: #fff;
            color: #0f1012;
            font-weight: 800;
          }
        }
      }

      .search {
        &-wrapper {
          position: relative;
          width: 355px;
          height: 44px;
          flex-shrink: 0;
          border-radius: 43px;
          border: 2px solid #1c1c1c;
          background: #0f1012;
          box-shadow: 0px 0px 8px 0px #1c1c1c;

          img {
            position: absolute;
            left: 15px;
            top: 8px;
            width: 24px;
            height: 24px;
          }
        }

        &-input {
          padding: 10px 54px;
          width: 100%;
          height: 100%;
          background: transparent;
          border: none;
          box-shadow: none;
          outline: none;
          border-radius: 43px;
          color: #8d8d8d;
          font-family: Urbanist;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 22.5px; /* 140.625% */
        }
      }
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;

    .item {
      position: relative;
      padding: 28px 28px 52px;
      width: 547px;
      height: 220px;
      flex-shrink: 0;
      border-radius: 32px;
      mix-blend-mode: luminosity;
      background: rgba(#090c0f, 0.5);

      .image {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        overflow: hidden;
        position: absolute;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
        }
      }

      .info {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 70px;

        .top {
          display: flex;
          height: 40px;
          justify-content: center;
          align-items: center;
          gap: 12px;

          .svg-icon {
            font-size: 40px;
          }

          .status {
            padding: 4px 12px;
            flex-shrink: 0;
            border-radius: 60px;
            background: #0f1012;
            color: #8d8d8d;
            font-family: Urbanist;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 20px; /* 142.857% */
            text-transform: capitalize;
          }
        }

        .name {
          color: #8d8d8d;
          font-family: Urbanist;
          font-size: 32px;
          font-style: normal;
          font-weight: 800;
          line-height: 30px; /* 93.75% */
        }
      }

      &:hover {
        background-size: cover, cover;
        background-blend-mode: normal, normal;
        background-position: center, center;
        background-repeat: no-repeat, no-repeat;
        mix-blend-mode: inherit;

        .info {
          .top {
            .svg-icon {
              opacity: 0.2;
            }

            .status {
              background: rgba(#0f1012, 0.2);
              color: #fff;
            }
          }
        }

        .name {
          color: #fff;
          text-shadow: 0px 0px 24px #fff;
          font-weight: 800;
        }

        &::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: url('@/assets/images/section-6/item-bg.svg') no-repeat;
          background-size: contain;
        }

        .image img {
          opacity: 0.95;
        }
      }

      &.orange:hover {
        background-image: linear-gradient(180deg, #ff7d45 0%, #bd3800 100%);
        box-shadow: 0px 0px 100px -32px #ff8c5b;
      }

      &.yellow:hover {
        background-image: linear-gradient(180deg, #ffd469 0%, #e1a000 100%);
        box-shadow: 0px 0px 100px -32px #fff84c;
      }

      &.blue:hover {
        background-image: linear-gradient(180deg, #3fd9ff 0%, #0096ba 100%);
        box-shadow: 0px 0px 100px -32px #3fd9ff;
      }

      &.red:hover {
        background-image: linear-gradient(180deg, #ff5088 0%, #d3235b 100%);
        box-shadow: 0px 0px 100px -32px #ff5088;
      }

      &.green:hover {
        background-image: linear-gradient(180deg, #06ffb6 0%, #00a474 100%);
        box-shadow: 0px 0px 100px -32px #06ffb6;
      }

      &.purple:hover {
        background-image: linear-gradient(180deg, #ca59ff 0%, #a422e1 100%);
        box-shadow: 0px 0px 100px -32px #e680ff;
      }
    }
  }

  .pagination {
    margin-top: 75px;
    width: 100%;
    display: flex;
    justify-content: center;

    .more {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 103px;
      height: 36px;
      flex-shrink: 0;
      border-radius: 22.5px;
      border: 2px solid #1c1c1c;
      box-shadow: 0px 0px 8px 0px #1c1c1c;
      color: #fff;
      text-align: center;
      font-family: Urbanist;
      font-size: 12px;
      font-style: normal;
      font-weight: 900;
      line-height: 12px; /* 100% */
      letter-spacing: 0.24px;
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
        background: #fff;
        color: #0f1012;
      }
    }
  }
}
</style>
