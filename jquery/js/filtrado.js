var tienda={
    lista_articulos:[],
    lista_filtrada:[],
    recoge:function(){
        var texto_a_buscar=$("#busqueda").val();
        console.log(texto_a_buscar);
    },
    retrasa:function(){
        var miTimer=setTimeout(tienda.recoge,800);
    },
    presentaListado:function(){
        $("#sugerencias").html("");
        $.each(tienda.lista_filtrada,function(i,item){
            if(item.autor==undefined){
                item.autor="Anónimo"}
            $("#sugerencias").append("<li><a href='#'>"+item.titulo+", "
                +item.autor+"</a></li>");
            })
        },
    
    filtra:function(patron){
        tienda.lista_filtrada=[];
        
        for(var item of tienda.lista_articulos){
            if(
                item.titulo.includes(patron)
                || 
                item.autor.includes(patron)
            ){
                tienda.lista_filtrada.push(item);
            }
        }
    },   

    filtraDatos:function(){
        tienda.retrasa();
        var patron=$("#busqueda").val();
        tienda.filtra(patron);
        console.log(tienda.lista_filtrada);
        tienda.presentaListado();
        
    },
     peticionAJAX:function(){
        $.getJSON("http://www.mocky.io/v2/5a54ae822d00005f235b1cd2", function(datos){
            tienda.lista_articulos=datos;
            tienda.lista_filtrada=datos;
            tienda.presentaListado();
            $("#busqueda").keyup(tienda.filtraDatos);
            
        });
    },

    init:function(){
        tienda.peticionAJAX();
        
    },
}
$(document).ready(tienda.init);

