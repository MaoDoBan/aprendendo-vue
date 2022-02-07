const app = Vue.createApp({
  //template: "<h2>Eu sou a template!</h2>"
  data(){
    return {
      mostrarLivros: true,
      titulo: "A volta dos que não foram",
      autor: "Aquele Cara",
      idade: 44
    };
  },
  methods: {
    alteraTitulo(parâmetro){
      this.titulo = parâmetro;//"A ida dos que não voltaram";
    },
    trocarVerLivros(){
      this.mostrarLivros = !this.mostrarLivros;
    }
  }
});

app.mount("#div-bah");