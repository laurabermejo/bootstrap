/*
A partir de la página web proporcionada, completar el código JavaScript para que:
1.- Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
2.- Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
3.- Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
4.- Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado

EJERCICIO CON JQUERY-FUNCIÓN GENÉRICA

function oculta(event){
    event.preventDefault();
    console.log(event.target)
    event.target.parentNode.children[0].classList.toggle("oculta");
    if(this.innerHTML=="Ocultar contenidos"){
        this.innerHTML="Mostrar contenidos";
    }else{this.innerHTML="Ocultar contenidos"}; 
  };

function init(){
    $("a").click(oculta);
    
};
$(document).ready(init);
*/

//EJERCICIO CON JAVASCRIPT-FUNCIÓN GENÉRICA

function oculta(event){
    event.preventDefault();
    console.log(event.target)
    event.target.parentNode.children[0].classList.toggle("oculta");
  if(this.innerHTML=="Ocultar contenidos"){
        this.innerHTML="Mostrar contenidos";
    }else{this.innerHTML="Ocultar contenidos"}; 
  };

function init(){
    console.log("DOM cargado");
    for (var item of document.querySelectorAll("a")){
        item.addEventListener("click",oculta);
    };
 
}

document.addEventListener("DOMContentLoaded",init);

/*
 EJERCICIO CON JQUERY-FUNCIONES PROPIAS PARA CADA ID
Ejercicio 2 y 4
function oculta(event){
    event.preventDefault();
    $("#parrafo1").toggleClass("oculta");
    if ($("#parrafo1").hasClass("oculta")) {
        $("#enlace1").html("Mostrar contenidos");
        } else {
        $("#enlace1").html("Oculta contenidos");
  };
};
Ejercicio 3
function oculta2(event){
    event.preventDefault();
    $("#parrafo2").toggleClass("oculta");
    if ($("#parrafo2").hasClass("oculta")) {
        $("#enlace2").html("Mostrar contenidos");
        } else {
        $("#enlace2").html("Oculta contenidos");
  };
};

function oculta3(event){
    event.preventDefault();
    $("#parrafo3").toggleClass("oculta");
    if ($("#parrafo3").hasClass("oculta")) {
        $("#enlace3").html("Mostrar contenidos");
        } else {
        $("#enlace3").html("Oculta contenidos");
  };
};

function init(){
    $("#enlace1").click(oculta);
    $("#enlace2").click(oculta2);
    $("#enlace3").click(oculta3);
};
$(document).ready(init);
*/
