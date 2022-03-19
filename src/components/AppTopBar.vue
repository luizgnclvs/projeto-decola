<template>
  <v-app class="app-top-bar">
    <v-app-bar app elevation="4" color="red darken-1" class="title-camp cor">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title> Pascoa Inclusiva </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="red lighten-2 text--accent-4">
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/sobrenos">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sobre</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/cadastroprodutos">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Cadastro Produtos</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/cadastrovendedores">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Cadastro Vendedores</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/listaovos">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Lista Ovos</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "AppTopBar",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>


<style scoped>
.title-camp {
  display: flex;
  justify-content: center;
  align-content: center;
}
.app-top-bar a {
  text-decoration: none;
  color:black;
}
</style>