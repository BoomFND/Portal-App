<template>
  <Header :headerStyle="{ backgroundColor: 'transparent', backdropFilter: 'none' }" />
  <div class="background-wrapper"></div>
  <div class="download-page">
    <!-- Main content section (with background image) -->
    <div class="hero-section">
      <h1 class="main-title">A Portal Empowering<br />Real Gamers</h1>
      <div class="button-container">
        <button class="download-btn" @click="handleDownload">
          <svg-icon name="windows" />
          <span>Download Desktop APP</span>
        </button>
        <button class="coming-soon-btn" disabled>
          <div class="coming-soon">GamerBoom 2.0 Coming Soon</div>
        </button>
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
onMounted(() => {
  downloadAnimation();
});
</script>

<style scoped lang="scss">
.background-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
  background-image: url("@/assets/images/downBg.png");
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  z-index: -1;
}

.download-page {
  width: 100%;
  margin: 0 auto;
  padding-top: 120px;
  color: #1d1d1f;
  font-family: "Urbanist", sans-serif;
  position: relative;
}

/* Main title section */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 0 6rem;
  position: relative;
  z-index: 1;
}

.main-title {
  font-size: 4.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  line-height: 1.2;
  color: #1d1d1f;
  text-align: center;
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
  padding: 0.75rem 1.75rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
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

.coming-soon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #ffffff;
  color: #bfbfbf;
  border: none;
  padding: 0.75rem 1.75rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  cursor: not-allowed;
  position: relative;
  z-index: 2;
  min-width: 230px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Play Now & Earn section */
.play-earn-section {
  width: 100%;
  text-align: center;
  background: #ffffff;
  padding: 1.5rem;
  box-shadow: 0px 0.125rem 0.25rem rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;
  border-radius: 1rem;
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
  max-width: 35rem;
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

/* Responsive design */
@media screen and (max-width: 1024px) {
  .download-page {
    padding-top: 100px;
  }
  
  .background-wrapper {
    height: 500px;
  }
  
  .main-title {
    font-size: 2.5rem;
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

@media screen and (max-width: 768px) {
  .download-page {
    padding-top: 80px;
  }
  
  .background-wrapper {
    height: 400px;
  }
  
  .main-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }

  .content-wrapper {
    padding: 1rem;
  }
  
  .steps-container {
    max-width: 100%;
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
}
</style>
