<template>
  <Header/>
  <div class="download-page">
    <!-- Main content section (with background image) -->
    <div class="hero-section">
      <div class="title-background-area">
        <h1 class="main-title">A Portal Empowering<br />Real Gamers</h1>
      </div>
      <div class="button-container">
        <button class="download-btn" @click="handleDownload">
          <svg-icon name="windows" />
          <span>Download Desktop APP</span>
        </button>
        <div class="alpha-container">
          <button class="coming-soon-btn" @click="handleDownClient">
            <span>Download GamerBoom 2.0 Canary</span>
          </button>
        </div>
        <div class="guide-link" @click="handleGuide">
          <span>GamerBoom 2.0 Alpha Guide</span>
          <svg-icon name="forward" />
        </div>
      </div>
  
    </div>

    <!-- Play Now & Earn section -->
    <div class="play-earn-section">
      <h2 class="section-title">Play Now & Earn</h2>
      <p class="section-subtitle">
        Security Verification: Ensures safe and efficient game operation.
      </p>

      <div class="content-wrapper">
        <div class="steps-container">
          <!-- Three steps -->
          <div class="step-item">
            <div class="step-icon">
              <svg-icon name="downs" />
            </div>
            <span class="step-text">Click to download the APP</span>
          </div>
          <div class="step-item">
            <div class="step-icon">
              <svg-icon name="downs" />
            </div>
            <span class="step-text">Turn on APP while play the game</span>
          </div>
          <div class="step-item">
            <div class="step-icon">
              <svg-icon name="downs" />
            </div>
            <span class="step-text">Start to Play and Game Data Mining</span>
          </div>

          <!-- Four notes -->
          <div class="notes-container">
            <div class="note-item">
              <div class="dot">
                <svg-icon name="yuan" />
              </div>
              <span class="note-text"
                >GameBoom Client is currently only supports Windows 10 and above</span
              >
            </div>
            <div class="note-item">
              <div class="dot">
                <svg-icon name="yuan" />
              </div>
              <span class="note-text"
                >Make sure your computer meets the hardware and software requirements for
                the supported games.</span
              >
            </div>
            <div class="note-item">
              <div class="dot">
                <svg-icon name="yuan" />
              </div>
              <span class="note-text"
                >Be aware of malicious links, make sure to check the website URL before
                your download.</span
              >
            </div>
            <div class="note-item">
              <div class="dot">
                <svg-icon name="yuan" />
              </div>
              <span class="note-text"
                >To prevent malicious farming, only games over 10 minutes count as valid
                and rewarded.</span
              >
            </div>
          </div>
        </div>

        <!-- Right side image -->
        <div class="image-container">
          <div class="right">
            <img class="app" src="@/assets/images/app.png" alt="App screenshot" />
            <img class="pc" src="@/assets/images/lol.png" alt="Game screenshot" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template> 

<script setup lang="ts">
import SvgIcon from "../components/SvgIcon.vue";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted } from 'vue';
import { useDownload } from '@/hooks/useDownload';
import { getClient } from '@/apis/game'
gsap.registerPlugin(ScrollTrigger);

// Animation for the download page
const downloadAnimation = () => {
  // Hero section animation
  gsap.from('.hero-section', {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power1.inOut',
  });
  
  gsap.from('.main-title', {
    y: 30,
    duration: 0.8,
    delay: 0.3,
    ease: 'circ.out',
  });
  
  gsap.from('.download-btn, .coming-soon-btn', {
    y: 20,
    duration: 0.7,
    delay: 0.5,
    stagger: 0.2,
    ease: 'circ.out',
  });

  // Play Now & Earn section animation with scroll trigger
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.play-earn-section',
      start: 'top bottom-=100px',
    },
  });

  tl.from('.section-title, .section-subtitle', {
    opacity: 0,
    y: 30,
    duration: 0.7,
    stagger: 0.2,
    ease: 'circ.out',
  }).from(
    '.step-item',
    {
      opacity: 0,
      x: -30,
      duration: 0.5,
      stagger: 0.1,
      ease: 'circ.out',
    },
    '<0.2'
  ).from(
    '.notes-container',
    {
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: 'circ.out',
    },
    '<0.3'
  ).from(
    '.image-container',
    {
      opacity: 0,
      x: 50,
      duration: 0.7,
      ease: 'circ.out',
    },
    '<0.1'
  );
}
const { donwload } = useDownload()
const handleDownload = () => {
  donwload()
}
const handleDownClient = async() => {
  try {
    const res: any = await getClient()
  if(res && res.url){
   const a = document.createElement('a')
    a.href = res.url
    a.target = '_blank'
    document.body.appendChild(a) // 添加到文档中以确保可以被点击
    a.click()
    document.body.removeChild(a) // 完成后移除
  }
  } catch (error) {
    console.log(error)
  } 
}
const handleGuide = () => { 
  window.open('https://gamerboom.gitbook.io/gamerboom-whitepaper/canary-testing-guide', '_blank')

}
onMounted(() => {
  downloadAnimation();
});
</script>

<style scoped lang="scss">
/* Main title section */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1;
  padding-top: 144px; /* 216px (target) - 72px (header) */
  padding-bottom: 6rem; /* Keep existing bottom padding or adjust as needed */
  color: #1d1d1f;
  font-family: "Urbanist", sans-serif;
  position: relative;
  background-image: url("@/assets/images/downBg.png");
  background-size: 100% auto;
  background-position: center top;
  background-repeat: no-repeat;
}

.main-title {
  font-size: 4.5rem;
  font-weight: 800;
  margin: 0 0 2rem; 
  line-height: 1.2;
  color: #1d1d1f;
  text-align: center;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
  position: relative; /* Ensure pseudo-element is positioned relative to this */
  background: none; 
  z-index: 1; /* Ensure text is above the pseudo-element */
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 180%; /* Adjust width for desired spread */
    height: 120%; /* Adjust height for desired spread */
    background: radial-gradient(ellipse at center, rgba(250, 250, 252, 1) 0%, rgba(250, 250, 252, 0.5) 50%, rgba(250, 250, 252, 0) 70%);
    z-index: -1; /* Place behind the text */
    filter: blur(35px);
    pointer-events: none;
    border-radius: 50% / 40%; /* Adjust vertical radius for ellipse shape */
    display: block; /* Ensure it's displayed */
  }
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  position: relative;
  z-index: 2;
}

.download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #00bfa6;
  color: white;
  border: none;
  padding:14px 36.6px;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 0;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  min-width: 230px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .svg-icon {
    width: 1.2rem;
    height: 1.2rem;
    flex-shrink: 0;
  }
  
  span {
    color: white;
    white-space: nowrap;
    font-weight: 700;
  }
}

.alpha-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 278px;
  padding-top: 32px;
  margin-bottom: 16px;
}

.coming-soon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent;
  color: #1d1d1f;
  border: 1.5px solid #000000;
  padding: 12px 18px;
  border-radius: 2rem;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  width: 100%;
  
  // &:hover {
  //   transform: translateY(-2px);
  //   box-shadow: 0 4px 8px #000000;
  // }
  
  span {
    white-space: nowrap;
  }
}

.guide-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  cursor: pointer;
  font-size: 0.75rem;
  color: #000000;
  padding-bottom: 0.25rem;
  width: 100%;
  max-width: 200px;
  margin-top: 16px;
  span {
    font-weight: 500;
  }
  
  .svg-icon {
    width: 0.75rem;
    height: 0.75rem;
  }
  
  &:hover {
    color: #000000;
    border-bottom-color: #000000;
  }
}

.play-earn-section {
  width: 100%;
  text-align: center;
  padding: 1.5rem;
  padding-top: 3rem;
  position: relative;
  z-index: 1;
  background-color: #fafafc;
  
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(250, 250, 252, 0.9) 80%, rgba(250, 250, 252, 1) 100%);
    z-index: -1;
  }
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #121214;
}

.section-subtitle {
  font-size: 0.875rem;
  color: #1d1d1f;
  margin-bottom: 2rem;
  font-weight: 500;
}

.content-wrapper {
  display: flex;
  justify-content: space-between;
  text-align: left;
}

.steps-container {
  flex: 1;
  // max-width: 35rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.step-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #1d1d1f;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.5;
}

.step-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  color: #121214;
  
  .svg-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}

.step-text {
  font-weight: 700;
  font-size: 0.875rem;
}

.notes-container {
  display: flex;
  flex-direction: column;
  gap: 0.563rem;
  margin-top: 1.5rem;
}

.note-item {
  display: inline-flex;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.4;
  color: #4a4a4a;
  border-radius: 2.5rem;
  padding: 0.219rem 0.5rem;
  width: fit-content;
  align-items: center;
}

.alpha-button-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem 0 1.5rem;
  gap: 0.5rem;
}

.alpha-download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 80px;
  border: 1.5px solid #8E44AD;
  background-color: transparent;
  color: #1d1d1f;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(142, 68, 173, 0.2);
  }
}

.dot {
  display: flex;
  align-items: center;
  justify-content: center;

  .svg-icon {
    width: 0.375rem;
    height: 0.366rem;
    color: currentColor;
  }
}

.image-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .right {
    position: relative;
    flex-shrink: 0;

    img {
      display: block;
    }

    .pc {
      width: 21.563rem;
      height: 12.5rem;
      flex-shrink: 0;
      border-radius: 0.5rem;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    }

    .app {
      position: absolute;
      top: 1.25rem;
      left: -2.875rem;
      height: 10rem;
      z-index: 1;
      border-radius: 0.5rem;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
  }
}

@media screen and (max-width: 1024px) {
  .main-title {
    font-size: 72px;
    line-height: 1.2; /* 120% */
    font-weight: 800; /* ExtraBold */
    color: #1D1D1F;
  }

  .image-container .right .pc {
    width: 207px;
    height: 120px;
  }

  .image-container .right .app {
    width: 57.06px;
    height: 90px;
    position: absolute;
    top: 15px;
    left: -12px;
    z-index: 1;
  }

  .play-earn-section {
    width: 100%;
  }
}

@media screen and (max-width: 834px) {
  :root {
    font-size: calc(100vw / 834 * 10.75);
  }
  .download-page {
    padding-top: 0px;
    background-image: none;
    position: relative;
  }

  .hero-section {
    position: relative;
    padding: 0; 
    background-image: none; 
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    overflow: visible; 
    height: auto;
    display: block;
  }

  .hero-section::before {
    display: none;
  }
  
  .title-background-area {
    position: relative;
    width: 100%;
    height: 272px; 
    background-image: url("@/assets/images/downBg.png");
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    overflow: hidden; 
    mask-image: linear-gradient(to bottom, black 75%, transparent 100%);
    -webkit-mask-image: linear-gradient(to bottom, black 75%, transparent 100%);
  }

  .main-title {
    font-size: 3.8rem;
    line-height: 1.2;
    margin: 0 20px; 
    padding-top: 91px; 
    position: relative; 
    height: 154px; 
    display: block;
    font-weight: 800;
    z-index: 1; 
    background: none; 
    width: auto; 
    text-align: center;
  }

  .main-title::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 180%; /* Adjust width for desired spread */
    height: 120%; /* Adjust height for desired spread */
    background: radial-gradient(ellipse at center, rgba(250, 250, 252, 1) 0%, rgba(250, 250, 252, 0.5) 50%, rgba(250, 250, 252, 0) 70%);
    z-index: -1; /* Place behind the text */
    filter: blur(35px);
    pointer-events: none;
    border-radius: 50% / 40%; /* Adjust vertical radius for ellipse shape */
    display: block; /* Ensure it's displayed */
  }

  .button-container {
    margin: 0px 0 30px; 
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1; 
    background-color: transparent; 
  }

  .alpha-container {
    max-width: 250px;
    padding-top: 32px;
  }
  
  .download-btn, .coming-soon-btn {
    font-size: 0.875rem;
    padding: 0.625rem 1.5rem;
  }
  
  .guide-link {
    font-size: 0.7rem;
  }
}
@media screen and (max-width: 627px) {
  .main-title {
    font-size: 32px;
    line-height: 1.2; /* 120% */
    font-weight: 800; /* ExtraBold */
    color: #1D1D1F;
  }
  .content-wrapper {
    flex-direction: column;
    gap: 2rem;
  }
}
@media screen and (max-width: 375px) {
  :root {
    font-size: calc(100vw / 375 * 10.75);
  }
  .content-wrapper {
    flex-direction: column;
    gap: 2rem;
  }

  .image-container {
    justify-content: center;
  }

  .image-container .right .pc {
    width: 207px;
    height: 120px;
  }

  .image-container .right .app {
    width: 57.06px;
    height: 90px;
    position: absolute;
    top: 15px;
    left: -12px;
    z-index: 1;
  }

  .main-title {
    font-size: 32px;
    line-height: 1.2; /* 120% */
    font-weight: 800; /* ExtraBold */
    color: #1D1D1F;
  }
  
}

.download-page {
  width: 100%;
  margin: 0 auto;
  padding-top: 72px; /* Account for fixed header */
  color: #1d1d1f;
  font-family: "Urbanist", sans-serif;
  position: relative; 
}
</style>
