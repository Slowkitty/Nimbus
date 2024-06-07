function toggleMenu() {
    var menuList = document.getElementById("menuList");
    if (menuList.style.display === "block") {
      menuList.style.display = "none";
    } else {
      menuList.style.display = "block";
    }
  }
  

  function ocultar(id){
    var elementos = document.querySelectorAll('.Hotel and .hotelimagem, .Passagens, .Pacotes');

    elementos.forEach(function(elemento) {
      elemento.style.display = 'none';
  });

    var elemento = document.getElementById(id);
    elemento.style.display = 'block';
  }

  window.onload = function() {
    ocultar('Hotel');
};