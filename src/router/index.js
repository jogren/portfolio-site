import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'about',
    component: About,
    meta: {
      title: 'Jacob\'s Portfolio!',
      metaTags: [
        {
          name: 'Home Page',
          content: 'The home page of the portfolio site of jacob ogren.'
        }
      ]
    }
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      title: 'Jacob\'s Contact Information!',
      metaTags: [
        {
          name: 'Contact Page',
          content: 'The contact page of the portfolio site of jacob ogren.'
        }
      ]
    },
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
