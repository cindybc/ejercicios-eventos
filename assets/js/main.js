function carga(){
  alert("Pagina CARGADA!!");
};

function clicki(){
  var boton= document.getElementById("demo");
  boton.addEventListener("click", function(){
    document.getElementById("text").innerHTML = "HOLA MUNDO";
  });
}

function mouse(){

  var inputito = document.getElementById("cajita");
  inputito.addEventListener("mouseover", function(){
    alert("Estas sobre mi");
  });

  inputito.addEventListener("mouseout", function(){
    alert("No estas sobre mi")
  });
}

mouse();
clicki();
