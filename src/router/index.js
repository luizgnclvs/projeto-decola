import Vue from "vue";
import VueRouter from "vue-router";
import MeuInicio from "../views/MeuInicio";
import SobreNos from "../components/SobreNos"
import CadastroProdutos from "../components/CadastroProdutos"
import CadastroVendedores from "../components/CadastroVendedores"
import ListaOvos from "../views/ListaOvos"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MeuInicio",
    component: MeuInicio,
  },
  {
    path: "/sobrenos",
    name: "SobreNos",
    component: SobreNos,
  },
  {
    path: "/cadastroprodutos",
    name: "Cadastro",
    component: CadastroProdutos,
  },
  {
    path: "/cadastrovendedores",
    name: "CadastroVendedores",
    component: CadastroVendedores,
  },
  {
    path: "/listaovos",
    name: "ListaOvos",
    component: ListaOvos,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
