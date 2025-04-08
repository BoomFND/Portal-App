<script lang="ts" setup>
defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
    <path
      v-if="!active"
      d="M26.9633 12H29.8766L23.5116 19.6255L31 30H25.1369L20.5452 23.7071L15.2902 30H12.3753L19.1836 21.8435L12 12.0008H18.0119L22.1626 17.7527L26.9633 12ZM25.9413 28.1729H27.5555L17.1348 13.7317H15.4026L25.9413 28.1729Z"
      fill="currentColor"
    />
    <g v-else filter="url(#filter0_d_20009_1826)">
      <path
        d="M26.9633 12H29.8766L23.5116 19.6255L31 30H25.1369L20.5452 23.7071L15.2902 30H12.3753L19.1836 21.8435L12 12.0008H18.0119L22.1626 17.7527L26.9633 12ZM25.9413 28.1729H27.5555L17.1348 13.7317H15.4026L25.9413 28.1729Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_20009_1826"
        x="0"
        y="0"
        width="43"
        height="42"
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
        <feOffset />
        <feGaussianBlur stdDeviation="6" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20009_1826" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_20009_1826"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>
