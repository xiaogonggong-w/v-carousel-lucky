import Carousel from './carousel.vue';
import CarouselItem from './CarouselItem.vue';
Carousel.install = (App) => {
    App.component("Carousel", Carousel)
}
CarouselItem.install = (App) => {
    App.component("CarouselItem", CarouselItem)
}

const components = [
    Carousel, CarouselItem
]

// 全局加载
const install = (App) => {
    components.forEach(component => {
        App.use(component)
    })
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