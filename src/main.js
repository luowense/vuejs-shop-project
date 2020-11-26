import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  data: {
    products: [
      {
        id: 1,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011?wid=904&hei=840&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1603406905000',
        title: 'MacBook Pro',
        description: 'Avec la puce Apple M1, le MacBook Pro 13 pouces atteint une vitesse et une puissance sidérantes.',
        price: '$1200'
      },
      {
        id: 2,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011?wid=904&hei=840&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1603406905000',
        title: 'MacBook Pro',
        description: 'Avec la puce Apple M1, le MacBook Pro 13 pouces atteint une vitesse et une puissance sidérantes.',
        price: '$1200'
      },
      {
        id: 3,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011?wid=904&hei=840&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1603406905000',
        title: 'MacBook Pro',
        description: 'Avec la puce Apple M1, le MacBook Pro 13 pouces atteint une vitesse et une puissance sidérantes.',
        price: '$1200'
      },
      {
        id: 4,
        img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011?wid=904&hei=840&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1603406905000',
        title: 'MacBook Pro',
        description: 'Avec la puce Apple M1, le MacBook Pro 13 pouces atteint une vitesse et une puissance sidérantes.',
        price: '$1200'
      }
    ],
    cart: []
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
