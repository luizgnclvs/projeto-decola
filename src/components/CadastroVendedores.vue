<template>
    <v-container>
      <v-card-title primary-title class=" title mb-4">
        Cadastro de Vendedores
      </v-card-title>
    <form ref=form>
      <v-text-field
        v-model="nome"
        :rules="nameRules"
        :counter="10"
        label="Nome da empresa"
        required
        @input="$v.nome.$touch()"
        @blur="$v.nome.$touch()"
      ></v-text-field>
      
      <v-text-field
        v-model="cep"
        :rules="CepRules"
        label="CEP"
        required
        @input="$v.cep.$touch()"
        @blur="$v.cep.$touch()"
      ></v-text-field>
      
      <v-text-field
        v-model="endereco"
        :rules="EnderecoRules"
        :counter="10"
        label="Endereço"
        required
        @input="$v.endereco.$touch()"
        @blur="$v.endereco.$touch()"
      ></v-text-field>      
      
      <v-btn class="mr-4" color="red lighten-1" @click="submit" > Cadastrar </v-btn>
      <v-btn @click="reset"> Limpar </v-btn>
    </form>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name é obrigatório'
        ],
        CepRules: [
            v => !!v || 'CEP é obrigatório'
        ],
        EnderecoRules: [
            v => !!v || 'Endereço é obrigatório'
        ],
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