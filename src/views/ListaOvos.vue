<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">Ovos Caseiros</h2>
    </v-container>
</template>

<script>
    export default {
        name: 'ListaOvos',
        data () {
            return {
                listaOvos: []
            }
        },
        created () {
            fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
                .then(response => response.json())
                .then(json => {
                    this.listaOvos = json;
                })
        }
    }
</script>

<style scoped>

</style>