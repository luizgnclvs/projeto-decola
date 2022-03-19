<template>
    <v-container>
      <v-card-title primary-title class=" title mb-4">
        Cadastro de Vendedores
      </v-card-title>
    <form ref=form>
      <v-text-field
        v-model="Nome"
        :error-messages="nameErrors"
        :counter="10"
        label="Nome da empresa"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      
      <v-text-field
        v-model="Cep"
        :error-messages="emailErrors"
        label="CEP"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      
      <v-text-field
        v-model="Endereco"
        :error-messages="nameErrors"
        :counter="10"
        label="Endereço"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      
      <v-text-field
        v-model="Foto"
        :error-messages="nameErrors"
        :counter="10"
        label="Foto do Avatar (insira uma url)"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>      

      <v-btn class="mr-4" color="red darken-1" @click="submit"> Cadastrar </v-btn>
      <v-btn @click="reset"> Limpar </v-btn>
    </form>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
           items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ], 
        }
    },
    methods: {
        reset () {
        this.$refs.form.reset()
      },
    }
}
</script>

<style scoped>
    .title {
        color: #E53935!important;
    }
</style>