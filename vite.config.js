import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import path from "path"
export default defineConfig({
  plugins: [vue(), DefineOptions()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'package/index.js'),
      name: 'v-carousel-lucky',
      fileName: (format) => `lib.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'package')
    }
  },
  test:{
    
  }
})
