class Model {
  constructor() {
      this.images = [
        { src : "img/astronomia/magnetar.jpg", category : "Astronomia", title : "Magnetar"},
        { src : "img/astronomia/quasar.jpg", category : "Astronomia", title : "Quasar"},
        { src : "img/astronomia/pulsar.jpg", category : "Astronomia", title : "Pulsar"},
        { src : "img/astronomia/nebulosa.jpg", category : "Astronomia", title : "Nebulosa de Órion"},
        { src : "img/astronomia/caranguejo.jpeg", category : "Astronomia", title : "Nebulosa do Caranguejo"},
        { src : "img/astronomia/galaxia.jpg", category : "Astronomia", title : "Galáxia de Andrômeda"},
        { src : "img/astronomia/lactea.jpeg", category : "Astronomia", title : "Via Láctea"},
        { src : "img/astronomia/estrela.jpg", category : "Astronomia", title : "Supergigante azul"},
        { src : "img/astronomia/venus.jpg", category : "Astronomia", title : "Planeta Vênus"},


        { src : "img/biologia/dna.jpg", category : "Biologia", title : "Fita de DNA"},
        { src : "img/biologia/telomeros.jpg", category : "Biologia", title : "Telômeros"},
        { src : "img/biologia/divisao_celular.jpg", category : "Biologia", title : "Divisão celular"},
        { src : "img/biologia/hemacias.jpg", category : "Biologia", title : "Eritrócitos"},

        { src : "img/fisica/buraco.png", category : "Física", title : "Buraco negro"},
        { src : "img/fisica/aviacao.jpg", category : "Física", title : "Aerodinâmica"},
        { src : "img/fisica/bomba.jpg", category : "Física", title : "Bomba de hidrogênio"},
        { src : "img/fisica/bobina.jpg", category : "Física", title : "Bobina de Tesla"},


        { src : "img/literatura/renascimento.jpg", category : "Literatura", title : "A Última Ceia - Renascimento"},
        { src : "img/literatura/arcadismo.jpg", category : "Literatura", title : "Apotheose Homers - Arcadismo"},
        { src : "img/literatura/romantismo.jpg", category : "Literatura", title : "Caminhante sobre o mar de névoa - Romantismo"},
        { src : "img/literatura/realismo.jpg", category : "Literatura", title : "As respigadoras - Realismo"},
      ]
  }

  filter(category, search) {
      let result = this.images;

      if (category && category !== "all") {
          result = result.filter(img => img.category === category);
      }

      if (search) {
          result = result.filter(img => 
              img.title.toLowerCase().includes(search.toLowerCase())
          );
      }
      return result;
  }
}