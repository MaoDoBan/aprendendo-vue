const app = Vue.createApp({
  //template: "<h2>Eu sou a template!</h2>"
  data(){
    return {
      titulo: "A volta dos que não foram",
      autor: "Aquele Cara",
      idade: 44
    };
  },
  methods: {
    alteraTitulo(){
      this.titulo = "A ida dos que não voltaram";
    }
  }
});

app.mount("#div-bah");