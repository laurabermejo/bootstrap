/*
1.- Crear un código html con un JS asociado
2.- Descargar los datos mediante uan petición AJAX desde una URL "http://www.mocky.io/v2/5a54ae822d00005f235b1cd2" JSON y colocarlos en una variable llamada datos
3.- Presentar los datos en un formato listado (ul+li)
4.- Presentar los datos en un formato de tabla (tr+td)
5.- Presentar los datos en un formato grid (bootstrap+col-6)
6.- Guardar los datos en indexeddb para luego consultarlos antes de hacer la petición ajax
*/
var datos;

function ejecuta(){
            $.getJSON("http://www.mocky.io/v2/5a54ae822d00005f235b1cd2", function(info){
                    datos=info;
                    $.each(info, function(i,libro){
                        if(libro.autor==undefined){
                            libro.autor="Anónimo"
                        }
                    $("#lista").append("<li>Título:"+libro.titulo+", Autor:"+libro.autor+"</li>")})
                    $.each(info, function(i,libro){
                    $("#tabla").append("<tr><td>"+libro.titulo+"</td><td>"+libro.autor+"</td></tr>")})
                    $.each(info, function(i,libro){
                    $("#titulo").append("<p>Título:"+libro.titulo+"</p>")
                    $("#autor").append("<p>Autor:"+libro.autor+"</p>")})
            }
                      )}


function init(){
    console.log("DOMCargado");
    ejecuta(); 
}

    $(document).ready(init);
