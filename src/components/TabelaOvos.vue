<template>
    <v-card
    class="mx-auto"
    max-width="400"
    tile
    >
        <v-list-item two-line v-for="ovo of ovos" :key="ovo.id">

            <v-list-item-avatar rounded>
                <v-img :src="ovo.imagem" :alt="ovo.nome"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>{{ ovo.nome }}</v-list-item-title>
                <v-list-item-subtitle>{{ovo.sabor}}</v-list-item-subtitle>
            </v-list-item-content>        
        </v-list-item>
    </v-card>
</template>

<script>
    export default {
        name: 'TabelaOvos',
        props: {
            ovos: {
                type: Array,
                required:true
            }
        }
    }
</script>