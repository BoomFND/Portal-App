<script setup>
import { gsap } from 'gsap'

const moreRef = ref(null)

onMounted(() => {
  const rotationDoms = moreRef.value.querySelectorAll('.rotation-trigger')
  gsap.utils.toArray(rotationDoms).forEach((el) => {
    gsap.to(el, {
      rotation: 360 * (Math.random(0, 1) > 0.5 ? 1 : -1),
      duration: gsap.utils.random(10, 20),
      repeat: -1,
      transformOrigin: `${gsap.utils.random(0, 1) * 100}% ${gsap.utils.random(0, 1) * 100}% `,
      ease: 'none'
    })
  })
})
</script>

<template>
  <svg
    ref="moreRef"
    width="831"
    height="242"
    viewBox="0 0 831 242"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.1">
      <mask
        id="mask0_20430_1428"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="831"
        height="242"
      >
        <rect width="831" height="242" rx="32" fill="#090C0F" />
      </mask>
      <g mask="url(#mask0_20430_1428)">
        <g class="rotation-trigger" filter="url(#filter0_d_20430_1428)">
          <ellipse
            cx="634.12"
            cy="169.588"
            rx="23.2493"
            ry="23.443"
            transform="rotate(1.08982 634.12 169.588)"
            fill="url(#paint0_linear_20430_1428)"
          />
        </g>
        <g class="rotation-trigger" filter="url(#filter1_d_20430_1428)">
          <ellipse
            cx="190.802"
            cy="227.062"
            rx="34.3055"
            ry="34.5913"
            transform="rotate(1.08982 190.802 227.062)"
            fill="url(#paint1_linear_20430_1428)"
          />
        </g>
        <g class="rotation-trigger" filter="url(#filter2_d_20430_1428)">
          <ellipse
            cx="735.81"
            cy="69.1442"
            rx="10.9802"
            ry="11.0717"
            transform="rotate(1.08982 735.81 69.1442)"
            fill="url(#paint2_linear_20430_1428)"
          />
        </g>
        <g class="rotation-trigger" filter="url(#filter3_d_20430_1428)">
          <ellipse
            cx="100.17"
            cy="8.01764"
            rx="16.4703"
            ry="16.8207"
            transform="rotate(1.08982 100.17 8.01764)"
            fill="url(#paint3_linear_20430_1428)"
          />
        </g>
        <g class="rotation-trigger" filter="url(#filter4_d_20430_1428)">
          <ellipse
            cx="185.601"
            cy="106.459"
            rx="5.49009"
            ry="5.66719"
            transform="rotate(1.08982 185.601 106.459)"
            fill="url(#paint4_linear_20430_1428)"
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_20430_1428"
        x="594.87"
        y="130.145"
        width="78.499"
        height="78.886"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="4"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_20430_1428"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0235294 0 0 0 0 1 0 0 0 0 0.713726 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20430_1428" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_20430_1428"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_20430_1428"
        x="140.497"
        y="176.47"
        width="100.612"
        height="101.183"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="4"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_20430_1428"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.792157 0 0 0 0 0.278431 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20430_1428" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_20430_1428"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_d_20430_1428"
        x="708.83"
        y="42.0725"
        width="53.9604"
        height="54.1433"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="4"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_20430_1428"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.247059 0 0 0 0 0.85098 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20430_1428" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_20430_1428"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_d_20430_1428"
        x="67.6992"
        y="-24.803"
        width="64.9409"
        height="65.6414"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="4"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_20430_1428"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 0.313726 0 0 0 0 0.533333 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20430_1428" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_20430_1428"
          result="shape"
        />
      </filter>
      <filter
        id="filter4_d_20430_1428"
        x="164.11"
        y="84.792"
        width="42.9805"
        height="43.3342"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="4"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_20430_1428"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="10" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.901961 0 0 0 0 0.501961 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20430_1428" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_20430_1428"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_20430_1428"
        x1="634.119"
        y1="146.145"
        x2="634.119"
        y2="193.031"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#06FFB6" />
        <stop offset="1" stop-color="#00A474" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_20430_1428"
        x1="190.802"
        y1="192.47"
        x2="190.802"
        y2="261.653"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FFCA47" />
        <stop offset="1" stop-color="#C68F06" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_20430_1428"
        x1="735.81"
        y1="58.0726"
        x2="735.81"
        y2="80.2159"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3FD9FF" />
        <stop offset="1" stop-color="#0096BA" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_20430_1428"
        x1="100.17"
        y1="-8.80306"
        x2="100.17"
        y2="24.8383"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FF5088" />
        <stop offset="1" stop-color="#D3235B" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_20430_1428"
        x1="185.601"
        y1="100.792"
        x2="185.601"
        y2="112.126"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#E680FF" />
        <stop offset="1" stop-color="#BE1FE5" />
      </linearGradient>
    </defs>
  </svg>
</template>

<style lang="scss" scoped></style>
