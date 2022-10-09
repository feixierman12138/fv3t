import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import Components from 'unplugin-vue-components/vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  server: {
    port: 8080,
    proxy: {
      // 选项写法
      '/demoapi': {
        target: 'https://www.xxx.com/xx',
        secure: true,
        changeOrigin: true,
        rewrite: path => {
          return path.replace(/^\/demoapi/, '')
        },
      },
    },
  },
  plugins: [
    VueSetupExtend(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === 'wx-open-launch-weapp',
        },
      },
    }),
    vueJsx(),
    Components({
      dirs: ['src/components'], // 需要自动导入组件的文件夹
      dts: 'src/components.d.ts', // 生成的components.d.ts位置
    }),
  ],
})
