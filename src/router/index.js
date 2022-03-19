import Vue from 'vue'
import 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
  {
    path: '/CadastroProduto',
    name: 'Cadastro',
    component: CadastroProduto
  }
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

const router = new VueRouter({
  routes
})

export default router
