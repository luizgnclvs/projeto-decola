<template>
  <v-container>
    <v-card-title primary-title> Cadastro Produtos </v-card-title>
    <form>
      <v-text-field
        v-model="nome"
        :counter="100"
        label="Nome"
        required
      ></v-text-field>
      <v-text-field
        v-model="preco"
        label="Preco"
        prefix="R$"
        required
      ></v-text-field>
      <v-text-field
        v-model="sabor"
        :counter="100"
        label="Sabor"
        required
      ></v-text-field>
      <v-file-input accept="image/*" label="Imagem"></v-file-input>

      <v-btn class="mr-4" @click="submit"> submit </v-btn>
      <v-btn @click="clear"> clear </v-btn>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="text-h5"> Cadastro de Produto </v-card-title>

          <v-card-text>
            Desculpe! Algum campo não foi presenchido corretamente!
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogSucess" hide-overlay persistent width="300">
        <v-card color="primary" dark>
          <v-card-text>
            Cadastrando Produto
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-alert v-if="sucesso" color="green" dismissible type="success">Produto cadastrado com Sucesso!</v-alert>
    </form>
  </v-container>
</template>

<script>
export default {
  name: "CadastroProdutos",
  data: () => ({
    nome: "",
    preco: 0,
    sabor: "",
    dialog: false,
    dialogSucess: false,
    sucesso: false
  }),
  watch: {
    dialogSucess(val) {
      if (!val) return;

      setTimeout(() => (this.dialogSucess = false), 4000);
      setTimeout(() => (this.sucesso = true), 4000);
      
    },
  },
  methods: {
    submit() {
      const storageinfos = [];
      const erros = [];

      if (this.nome != "") {
        storageinfos.push(this.nome);
      } else {
        erros.push("Produto must be at most 10 characters long");
        erros.push("Produto is required.");
        console.log(erros);
      }

      if (this.preco != "") {
        storageinfos.push(this.preco);
      } else {
        erros.push("Preco must be at most 10 characters long");
        erros.push("Preco is required.");
        console.log(erros);
      }

      if (this.sabor != "") {
        storageinfos.push(this.sabor);
      } else {
        erros.push("Sabor must be at most 10 characters long");
        erros.push("Sabor is required.");
        console.log(erros);
      }

      if (erros.length === 0) {
        this.dialogSucess = true;
        console.log(this.dialog);
      } else {
        this.dialog = true;
      }
      this.clear();
    },
    clear() {
      this.nome = "";
      this.preco = "";
      this.sabor = "";
    },
  },
};
</script>