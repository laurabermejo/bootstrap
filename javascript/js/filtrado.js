/*
1.- Crea un html y asocia un fichero JS
2.- Descarga desde la URL: http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001 y colócalos en un variable llamada tiendas
3.- Presenta los resultados en la petición ajax por pantalla en un formato de listado, donde debe parecer exclusivamente el dato "agentfirstname" en cada elementos visual
4.- Incluye un campo de texto de formulario llamado id:"texto" y haz que cada vez que se pulse una tecla almacene el valor del campo en la variable criterio
5.- Crea una función que sea capaz de filtrar los resultados de una búsqueda de tiendas mediante un texto. En los resultados que debe devolver la función sólo deberán estar aquellos que contengan dicho texto en el campo "agentfirstname"
6.- Aplicar a que se presenten sólo los resultados que contengan el texto de la variable criterio, según vaya cambiándose (tecla a tecla)
*/
var tiendas;
var criterio;

/* Ejercicio 2*/
function peticionGetJson(){
    $.getJSON("http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001", function (datos){
        console.log("sucess");
        tiendas=datos;
        console.log(tiendas);      
            })
    .fail(function (jqXHR, textStatus, errorThrown) {
                console.log("error " + textStatus);
                console.log("incoming Text " + jqXHR.responseText);
                console.log("error " + errorThrown);
                })
};

/* Ejercicio 3 y 6*/
function muestraResultados(tiendas_filtrado){
    $("#sugerencias").html("");
    $.each(tiendas_filtrado, function (i, resultado) {
                 if(resultado.agentfirstname!=undefined){
                    $("#sugerencias").append("<li>Agent:" + resultado.agentfirstname+"</li>");
                 }
                });
}

/* Ejercicio 4*/
function ejecuta(){
    criterio=$("#texto").val();
    var tiendas_filtrado=filtra(tiendas,criterio);
    $("#sugerencias").html("");
    muestraResultados(tiendas_filtrado);
};

/* Ejercicio 5*/
function filtra(tiendas,patron){
    var tiendas_filtrado=[];
    for(var item of tiendas){
        if( 
            (item.agentfirstname!=null && item.agentfirstname.includes(patron)) 
        ){
            tiendas_filtrado.push(item);   
        }
    }
    return tiendas_filtrado;
}

function init(){
    console.log("DOM Cargado");
    $("#sugerencias").html("");
    $("#texto").keyup(ejecuta);
    peticionGetJson();
}
$(document).ready(init);


