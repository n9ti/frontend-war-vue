import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Stargazers from '@/components/Stargazers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:owner/:repo',
      name: 'Stargazers',
      component: Stargazers
    }
  ]
})
