<template>
    <div class="app-top-bar">
          <v-app-bar
        color="green lighten-1"
        dense
        dark
        >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>Páscoa Inclusiva</v-toolbar-title>

        <v-spacer></v-spacer>
    
        </v-app-bar>

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

            <router-link to='/Cadastro'>
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-soccer-field</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Cadastro</v-list-item-title>
            </v-list-item>
            </router-link>
            </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

    </div>

</template>

<script>
export default {
    name: "AppTopBar"
    
}
</script>

<style scoped>

</style>