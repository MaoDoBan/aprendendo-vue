const app = Vue.createApp({
  //template: "<h2>Eu sou a template!</h2>"
  data(){
    return {
      titulo: "A volta dos que não foram",
      autor: "Aquele Cara",
      idade: 44
    };
  }
});

app.mount("#div-bah");