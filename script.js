function toggleMenu() {
    var menuList = document.getElementById("menuList");
    if (menuList.style.display === "block") {
      menuList.style.display = "none";
    } else {
      menuList.style.display = "block";
    }
  }
  

  function ocultar(id){
    var elementos = document.querySelectorAll(' .Hotel, .Passagens, .Pacotes');

    elementos.forEach(function(elemento) {
      elemento.style.display = 'none';
  });

    var elemento = document.getElementById(id);
    elemento.style.display = 'block';
  }

  window.onload = function() {
    ocultar('Hotel');
};


/////separação/////
document.getElementById("pedidoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Obter os valores do formulário
  var localizacao = document.getElementById("localizacao").value;
  var origem = document.getElementById("origem").value;
  var destino = document.getElementById("destino").value;
  var dataIda = document.getElementById("dataIda").value;
  var dataVolta = document.getElementById("dataVolta").value;
  var quantidadePessoas = document.getElementById("quantidadePessoas").value;
  var quantidadeQuartos = document.getElementById("quantidadeQuartos").value;
  var valorMaximo = document.getElementById("valorMaximo").value;

  // Enviar os valores do formulário (poderia ser feito via AJAX, por exemplo)
  console.log("Localização:", localizacao);
  console.log("Origem:", origem);
  console.log("Destino:", destino);
  console.log("Data de Ida:", dataIda);
  console.log("Data de Volta:", dataVolta);
  console.log("Quantidade de Pessoas:", quantidadePessoas);
  console.log("Quantidade de Quartos:", quantidadeQuartos);
  console.log("Valor Máximo por Noite:", valorMaximo);

  // Aqui você pode adicionar lógica para enviar os dados para o servidor
});
