/*
1.- Crear un código html con un JS asociado
2.- Descargar los datos mediante uan petición AJAX desde una URL "http://www.mocky.io/v2/5a54ae822d00005f235b1cd2" JSON y colocarlos en una variable llamada datos
3.- Presentar los datos en un formato listado (ul+li)
4.- Presentar los datos en un formato de tabla (tr+td)
5.- Presentar los datos en un formato grid (bootstrap+col-6)
*/

//EJERCICIO CON JQUERY Y OBJETOS
var app={
    resultados:[],
    presentaListado:function(){
        $.each(app.resultados,function(i,item){
            if(item.autor==undefined){
            item.autor="Anónimo"
            }
            var nuevoLi="<li><a href='#'>"+item.titulo
            +"</a></li>";
            $("#listado").append(nuevoLi);
        });
 
    },
    presentaTabla:function(){
        $.each(app.resultados,function(i,item){
            if(item.autor==undefined){
            item.autor="Anónimo"
            }
              var nuevaFila="<tr>"
              +"<td>"+item.titulo+"</td>"
              +"<td>"+item.autor+"</td>"
    
              +"</tr>";
              $("#tabla").append(nuevaFila);
          });
    },

    presentaCol:function(item){
        if(item.autor==undefined){
            item.autor="Anónimo"
            }
        var columna="<div class='col-md-6'>"
                    +"<p>Título: "+item.titulo+"</p>"
                    +"<p>Autor: "+item.autor+"</p>"
                    +"<div class='text-center'>"
                    +"</div>"
                    +"</div>";
                  var ultimaFila=$(".container-fluid .row:last").append(columna);
    },
    presentaGrid:function(){
        var filaPar=0;
        for( var item of app.resultados){
              if(filaPar==0){
                  filaPar=1;
                  //row
                  var nuevaRow="<div class='row'></div>";
                  $(".container-fluid").append(nuevaRow);
                  // primer col
                  app.presentaCol(item);
                  //console.log(ultimaFila);
              }else{
                  filaPar=0;
                  // segunda col
                  app.presentaCol(item);
              }
          }
    },
    peticionAjax:function(){
        $.getJSON(
            "http://www.mocky.io/v2/5a54ae822d00005f235b1cd2",
        function(datos){
            app.resultados=datos;
            console.log(app.resultados);
            app.presentaListado();
            app.presentaTabla();
            app.presentaGrid();
        })
        .fail(function(){
            console.log("error");
        });  
    },
    init:function(){
        console.log("Dom cargado");
        //gestionar la petición ajax
        app.peticionAjax();
        //en el caso de recoger los datos
            //pintar por pantalla listado
            //pintar por pantalla tabla
            //pintar por pantalla grid
            //guardar datos en indexeddb
    }
}
$(document).ready(app.init);

/*
EJERCICIO CON JQUERY

var datos;

function ejecuta(){
    $.getJSON("http://www.mocky.io/v2/5a54ae822d00005f235b1cd2", function(info){
    datos=info;
        $.each(info, function(i,libro){
            if(libro.autor==undefined){
            libro.autor="Anónimo"
            }
            $("#lista").append("<li>Título:"+libro.titulo+",        Autor:"+libro.autor+"</li>")})
        $.each(info, function(i,libro){
            if(libro.autor==undefined){
            libro.autor="Anónimo"
            }
            $("#tabla").append("<tr><td>"+libro.titulo+"</td><td>"+libro.autor+"</td></tr>")})
        $.each(info, function(i,libro){
            if(libro.autor==undefined){
            libro.autor="Anónimo"
            }
            $("#titulo").append("<p>Título:"+libro.titulo+"</p>")
            $("#autor").append("<p>Autor:"+libro.autor+"</p>")})
        }
    )}
function init(){
    console.log("DOMCargado");
    ejecuta(); 
}
    $(document).ready(init);
*/