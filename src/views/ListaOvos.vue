<template>
    <v-container>
        <div class="header">
        <h2 class="text-h5 text-left mb-3 mt-5">Ovos Caseiros</h2>
        <v-dialog
                v-model="dialog"
                persistent
                max-width="290"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="red lighten-2"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    >
                        <v-icon>mdi-filter</v-icon>
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title class="text-h5">
                    Filtrar itens por:
                    </v-card-title>
                        <v-card-text>
                            <v-container
                                fluid
                                class="pa-0"
                            >   
                                <v-row>
                                    <v-col
                                    cols="12"
                                    sm="3"
                                    >
                                    <v-btn
                                    icon
                                    color="red lighten-2"
                                    >
                                    <v-icon>mdi-checkbox-blank-outline</v-icon>
                                    </v-btn>                                        
                                </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                    <v-card-actions class="alinhamento">
                        <v-btn 
                            icon
                            color="red lighten-2"                                          
                            @click="dialog = false"
                        >
                            <v-icon dark>mdi-check-box-outline-blank</v-icon>
                        </v-btn>
                        
                        <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                        >
                            Agree
                        </v-btn>                            
                    </v-card-actions>
                    </v-card>
                </v-dialog>
        </div>
        <TabelaOvos :ovos="listaOvos"/>
    </v-container>
</template>

<script>

    import TabelaOvos from '../components/TabelaOvos.vue'

    export default {
        name: 'ListaOvos',
        components: {
            TabelaOvos
        },
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
        },
    }
</script>

<style scoped>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }    
</style>