<script lang="ts" setup>
defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="47" height="45" viewBox="0 0 47 45" fill="none">
    <path
      v-if="!active"
      d="M34.6718 13.7335C34.8456 12.5784 33.7778 11.6667 32.7793 12.1176L12.8915 21.0989C12.1754 21.4223 12.2278 22.5379 12.9704 22.7811L17.0718 24.1246C17.8546 24.381 18.7022 24.2484 19.3857 23.7627L28.6325 17.1917C28.9114 16.9936 29.2153 17.4014 28.9771 17.654L22.321 24.7125C21.6754 25.3972 21.8035 26.5574 22.5802 27.0584L30.0323 31.8651C30.8682 32.4042 31.9434 31.8626 32.0998 30.8238L34.6718 13.7335Z"
      fill="currentColor"
    />
    <g v-else filter="url(#filter0_d_20009_1829)">
      <path
        d="M34.6718 13.7335C34.8456 12.5784 33.7778 11.6667 32.7793 12.1176L12.8915 21.0989C12.1754 21.4223 12.2278 22.5379 12.9704 22.7811L17.0718 24.1246C17.8546 24.381 18.7022 24.2484 19.3857 23.7627L28.6325 17.1917C28.9114 16.9936 29.2153 17.4014 28.9771 17.654L22.321 24.7125C21.6754 25.3972 21.8035 26.5574 22.5802 27.0584L30.0323 31.8651C30.8682 32.4042 31.9434 31.8626 32.0998 30.8238L34.6718 13.7335Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_20009_1829"
        x="0.382812"
        y="0"
        width="46.3077"
        height="44.0771"
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
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20009_1829" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_20009_1829"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>
