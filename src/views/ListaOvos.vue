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
                    icon
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
                            <v-container>
                                <v-row>
                                    <v-col>
                                    <v-checkbox
                                    v-model="ex4"
                                    label="Nome"
                                    color="red"
                                    value="red"
                                    hide-details
                                    ></v-checkbox>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                    <v-checkbox
                                    v-model="ex4"
                                    label="Preço"
                                    color="red"
                                    value="red"
                                    hide-details
                                    ></v-checkbox>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                    <v-checkbox
                                    v-model="ex4"
                                    label="Estabelecimento"
                                    color="red"
                                    value="red"
                                    hide-details
                                    ></v-checkbox>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>   
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
                listaOvos: [],
                filtros: [{"id" : 1,
                    "on" : false,
                    "icon" : "mdi-checkbox-blank-outline",
                    "icon-off" : "mdi-checkbox-marked-outline"
                    }, {"id" : 2,
                    "on" : false,
                    "icon" : "mdi-checkbox-blank-outline",
                    "icon-off" : "mdi-checkbox-marked-outline"
                    }, {"id" : 3,
                    "on" : false,
                    "icon" : "mdi-checkbox-blank-outline",
                    "icon-off" : "mdi-checkbox-marked-outline"
                    }],                
            }
        },
        created () {
            fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
                .then(response => response.json())
                .then(json => {
                    this.listaOvos = json;
                })
        },
        methods: {
            SelectFiltro () {
                
            },
        }
    }
</script>

<style scoped>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }    
</style>