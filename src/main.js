import { createApp } from 'vue'
import App from './App.vue'
import "../dist/style.css"
import CarouselUi from '../dist/lib.es'

createApp(App).use(CarouselUi).mount('#app')
