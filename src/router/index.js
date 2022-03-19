import Vue from 'vue'
import MeuInicio from './views/MeuInicio.vue'
import CadastroProdutos from './components/CadastroProdutos'
import CadastroVendedores from './components/CadastroVendedores'
import ListaOvos from './components/ListaOvos'
Vue.use(VueRouter)

const routes = 
{
  path: '/inicio',
  name: 'MeuInicio',
  component: MeuInicio
}
  {
    path: '/sobrenos',
    name: 'SobreNos',
    component: SobreNos
  }
  {
    path: '/CadastroProdutos',
    name: 'Cadastro',
    component: CadastroProdutos
  }
  {
    path: '/cadastrovendedores',
    name: 'CadastroVendedores',
    component: cadastrovendedores
  }
  {
    path: '/listaovos',
    name: 'ListaOvos',
    component: ListaOvos
  }
 
]

const router = new VueRouter({
  routes
})

export default router
