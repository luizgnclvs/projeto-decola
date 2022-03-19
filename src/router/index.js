import Vue from 'vue'
import 

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
    path: '/CadastroProduto',
    name: 'Cadastro',
    component: CadastroProduto
  }
  {
    path: '/cadastrovendedores',
    name: 'CadastroVendedored',
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
