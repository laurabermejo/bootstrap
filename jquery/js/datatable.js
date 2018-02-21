var app={
    resultados:[],
    
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
    peticionAjax:function(){
        $.getJSON(
            "http://www.mocky.io/v2/5a54ae822d00005f235b1cd2",
        function(datos){
            app.resultados=datos;
            console.log(app.resultados);
            app.presentaTabla();
            $('#tabla').dataTable();
            
        })
        .fail(function(){
            console.log("error");
        });  
    },
    init:function(){
        console.log("Dom cargado");
        app.peticionAjax();

    }
}
$(document).ready(app.init);