import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import path from 'path'
export default defineConfig({
  plugins: [vue(), DefineOptions()],
  resolve:{
     extensions:['.vue','.js']
  },
  build: {
    lib: {
        entry: path.resolve(__dirname, 'src/package/index.js'),
        name: 'v-carousel-lucky',
        fileName: (format) => `lib.${format}.js`
    },
    rollupOptions: {
        external: ['vue'],
        output: {
            globals: {
                vue: 'Vue'
            }
        }
    }
 },
})
