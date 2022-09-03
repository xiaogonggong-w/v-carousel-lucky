import Carousel from './carousel.vue';
import CarouselItem from './CarouselItem.vue';
Carousel.install = (vue) => {
    vue.component(Carousel.name, Carousel)
}
CarouselItem.install = (vue) => {
    vue.component(CarouselItem.name, CarouselItem)
}

const components = [
    Carousel, CarouselItem
]

// 全局加载
const install = (vue) => {
    components.map(component => vue.use(component))
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    Carousel, CarouselItem
}
export default {
    install
}