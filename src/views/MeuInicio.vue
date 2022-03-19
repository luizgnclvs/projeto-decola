<template>
    <v-container>
    <div class="Meu-Inicio"></div>
        <v-img
        class= 'imagem-inicial'
        :src="require('../assets/pascoa.jpg')">
        </v-img>
        <p class="text-uppercase mb-4 mt-6 font-weight-bold">
        Conectando Pessoas!
        </p>
        <p class="text-justify mb-4 mt-6">
            Aqui você encontra variadas opções de ovos de páscoa e lojistas tornando o consumo de ovos de páscoa mais democrático e feliz! 
        </p>
</v-container>
    
</template>

<script>
export default {
    name: "MeuInicio"
}
</script>

<style scoped>


</style>