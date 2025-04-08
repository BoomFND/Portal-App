<script lang="ts" setup>
defineProps({
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <svg width="49" height="38" viewBox="0 0 49 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      v-if="!active"
      d="M26.2249 18.815C26.2249 22.5789 23.1945 25.6303 19.4561 25.6303C15.7177 25.6303 12.6875 22.5798 12.6875 18.815C12.6875 15.0502 15.718 12 19.4561 12C23.1942 12 26.2249 15.0511 26.2249 18.815ZM33.6504 18.815C33.6504 22.3582 32.135 25.2303 30.266 25.2303C28.3969 25.2303 26.8816 22.3573 26.8816 18.815C26.8816 15.2727 28.3969 12.3997 30.266 12.3997C32.135 12.3997 33.6504 15.2727 33.6504 18.815ZM36.6875 18.815C36.6875 21.9896 36.1545 24.5629 35.4972 24.5629C34.8398 24.5629 34.3068 21.9887 34.3068 18.815C34.3068 15.6414 34.8398 13.0672 35.4974 13.0672C36.155 13.0672 36.6875 15.6407 36.6875 18.815Z"
      fill="currentColor"
    />
    <g v-else filter="url(#filter0_d_20009_1827)">
      <path
        d="M26.2249 18.815C26.2249 22.5789 23.1945 25.6303 19.4561 25.6303C15.7177 25.6303 12.6875 22.5798 12.6875 18.815C12.6875 15.0502 15.718 12 19.4561 12C23.1942 12 26.2249 15.0511 26.2249 18.815ZM33.6504 18.815C33.6504 22.3582 32.135 25.2303 30.266 25.2303C28.3969 25.2303 26.8816 22.3573 26.8816 18.815C26.8816 15.2727 28.3969 12.3997 30.266 12.3997C32.135 12.3997 33.6504 15.2727 33.6504 18.815ZM36.6875 18.815C36.6875 21.9896 36.1545 24.5629 35.4972 24.5629C34.8398 24.5629 34.3068 21.9887 34.3068 18.815C34.3068 15.6414 34.8398 13.0672 35.4974 13.0672C36.155 13.0672 36.6875 15.6407 36.6875 18.815Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_20009_1827"
        x="0.6875"
        y="0"
        width="48"
        height="37.6304"
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
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20009_1827" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_20009_1827"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</template>
