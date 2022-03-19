<template>
  <v-container>
      <v-card-title primary-title>
          Cadastro Produtos
      </v-card-title>
    <form>
      <v-text-field
        v-model="Produto"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="Preco"
        :error-messages="emailErrors"
        label="Preco"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="Sabor"
        :error-messages="nameErrors"
        :counter="10"
        label="Sabor"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>

      <v-btn class="mr-4" @click="submit"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </form>
  </v-container>
</template>

<script>
export default {
    name: 'CadastroProdutos',
    methods: {
        
    }
}
</script>

<style scoped>

</style>