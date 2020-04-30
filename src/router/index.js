import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List'
import Edit from '../views/Edit'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'List',
    component: List,
    props: true
  },
  {
    path: '/:action/:index',
    name: 'Edit',
    component: Edit,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
