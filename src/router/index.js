import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/Member'
import Cart from '@/components/Cart'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ],
  linkActiveClass: 'mui-active'
})
