import Vue from 'vue'
import 

Vue.use(VueRouter)

const routes = 
{
  path: '/MeuInicio',
  name: 'Inicio',
  component: MeuInicio
}
  {
    path: '/SobreNós',
    name: 'Sobre Nós',
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
 
]

const router = new VueRouter({
  routes
})

export default router
