<template>
<div>
    <v-container class="pa-6">
        <h2 class="text-h5 text-center mb-3 mt-5">Sobre o Projeto</h2>
         <v-img class="inicio-imagem mb-4" src="https://i.ytimg.com/vi/5QIsyuVqbNQ/mqdefault.jpg">
        </v-img>
        <p>O projeto "Páscoa Inclusiva" foi desenvolvido durante o hackaton do Projeto Decola, no processo de seleção de estágio para a empresa
            <a href="www.iteris.com.br">Iteris</a>.</p>
        
        <p>Desenvolvedores envolvidos no projeto</p>

        <v-simple-table>
            <template>
                <tbody>
                <tr v-for="desenvolvedor of desenvolvedores" :key="desenvolvedor.id" >
                    <td>
                        <v-avatar size=62 mb-50 mt-5>
                            <img
                                :src="desenvolvedor.avatar" 
                                :alt="desenvolvedor.nome"
                            >
                        </v-avatar>
                    </td>
                    <td><a :href="desenvolvedor.link"> {{desenvolvedor.nome}}</a></td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>

    </v-container>
</div>
</template>

<script>
export default {
    name: 'SobreNos',
    data() {
        return {
            desenvolvedores: [
                {
                    "id": 2,
                    "link": "https://github.com/lipecd/",
                    "nome": "Felipe Cardoso Duarte",
                    "avatar": "https://github.com/lipecd.png"
                },
                {
                    "id": 4,
                    "link": "https://github.com/JessicaTroiano/",
                    "nome": "Jessica Troiano",
                    "avatar": "https://github.com/luizfelipetorres.png"
                },
                {
                    "id": 1,
                    "link": "https://github.com/luizgnclvs/",
                    "nome": "Luis Gonçalves",
                    "avatar": "https://github.com/luizgnclvs.png"
                },
              
                {
                    "id": 5,
                    "link": "https://github.com/paulinhac/",
                    "nome": "Paula Cabral",
                    "avatar": "https://github.com/paulinhac.png"
                },
                 {
                    "id": 3,
                    "link": "https://github.com/talis-reis/",
                    "nome": "Talis Reis",
                    "avatar": "https://github.com/talis-reis.png"
                },
            ]
        };
    },
    
};
</script>

<style scoped>
    .inicio-imagem {
        border-radius: 5px;
    }
</style>