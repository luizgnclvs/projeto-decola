<template>
    <div class="app-top-bar">

    <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Páscoa Inclusiva</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        >
        <v-list
            nav
            dense
        >
            <v-list-item-group
            v-model="group"
            active-class="green lighten-1"
            >
            <router-link to='/'>
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-whistle</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Início</v-list-item-title>
            </v-list-item>
            </router-link>

            <router-link to='/classificacao'>
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-soccer-field</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Classificação</v-list-item-title>
            </v-list-item>
            </router-link>
            </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
        
    </div>

</template>

<script>
export default {
    name: "AppTopBar"
    
}
</script>

<style scoped>

</style>