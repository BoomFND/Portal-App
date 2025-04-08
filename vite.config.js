import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import VitePluginCompression from 'vite-plugin-compression'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const plugins = [
    vue(),
    Components({
      /* options */
      dirs: ['src/components', 'src/layout'],
      dts: true
    }),
    AutoImport({
      dts: true,
      imports: ['vue'],
      eslintrc: {
        enabled: true, // @default false
        // 下面两个是其他配置，默认即可
        // 输出一份json文件，默认输出路径为./.eslintrc-auto-import.json
        filepath: './.eslintrc-auto-import.json' // @default './.eslintrc-auto-import.json'
      }
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    }),
    VitePluginCompression()
  ]

  if (command !== 'serve') plugins.push(ViteImageOptimizer())
  return {
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
