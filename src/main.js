// 引入css文件
import './assets/index.css'

import gsap from 'gsap'

let total, registered, boomer, season
document.addEventListener('DOMContentLoaded', async function () {
  // 在DOM加载完毕后执行的代码
  total = document.querySelector('.total')
  registered = document.querySelector('.registered')
  boomer = document.querySelector('.boomer')

  // 切换时间线轮播图索引(没找到api，直接模拟点击右键实现)
  const nextBtn = document.querySelector('.slider-right-arrow.time')
  setTimeout(() => {
    nextBtn.click()
    nextBtn.click()
    nextBtn.click()
    nextBtn.click()
  }, 1000)
})

/**
 * 调用接口，获取统计数据
 * @returns
 */
const getStatisticsData = async () => {
  try {
    const res = await fetch('/api/statistics_data/home_data/', {
      headers: {
        accept: 'application/json'
      },
      method: 'GET'
    })

    let { boomerHolders, totalTransactions, userRegistered } = await res.json()

    return Promise.resolve({
      boomerHolders,
      totalTransactions,
      userRegistered
    })
  } catch (error) {
    console.error(error)
    return Promise.reject(error)
  }
}

// 格式化数字为千位分隔符格式
const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const animationToValue = (el, target, originalValue) => {
  // 记录下次起始数字
  el.dataset.originalNum = target
  gsap.to(el, {
    duration: 2, // 动画持续时间
    innerHTML: target, // 滚动到的目标数字
    roundProps: 'innerHTML', // 四舍五入到整数
    onUpdate() {
      el.textContent = formatNumber(Math.round(el.innerHTML.replace(',', '') * 1)) // 更新数字显示
    },
    startAt: { innerHTML: originalValue * 1 }
  })
}

/**
 * 执行动画
 */
const refreshAnimation = async () => {
  try {
    const { boomerHolders, totalTransactions, userRegistered } = await getStatisticsData()

    // 获取初始值
    const originalTotal = parseInt(total.dataset.originalNum, 10) || 0
    const originalRegistered = parseInt(registered.dataset.originalNum, 10) || 0
    const originalBoomer = parseInt(boomer.dataset.originalNum, 10) || 0

    // 动画
    animationToValue(total, totalTransactions, originalTotal)
    animationToValue(registered, userRegistered, originalRegistered)
    animationToValue(boomer, boomerHolders, originalBoomer)
  } catch (error) {
    console.error(error)
  }
}

let timer = null
const io = new IntersectionObserver((entries) => {
  if (!entries[0].isIntersecting) return
  if (timer) clearInterval(timer)
  // 每隔5s请求一次接口
  timer = setInterval(async () => {
    refreshAnimation()
  }, 10000)

  refreshAnimation()
})

io.observe(document.querySelector('.data-list'))
