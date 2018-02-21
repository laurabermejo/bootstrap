/*EJERCICIO
Implementa una tienda online de libros que almacene en la base de datos los libros disponibles (http://www.mocky.io/v2/5a54ae822d00005f235b1cd2).
Crear un input de búsqueda que filtre los libros según lo que el usuario escriba*/
var tienda = {
     lista_articulos: [],
     lista_filtrada: [],
     db: null,
     recoge: function () {
         var texto_a_buscar = $("#busqueda").val();
         console.log(texto_a_buscar);
     },
     retrasa: function () {
         var miTimer = setTimeout(tienda.recoge, 800);
     },
     presentaListado: function () {
         $("#listado").html("");
         $.each(tienda.lista_filtrada, function (i, item) {
             if (item.autor == undefined) {
                 item.autor = "Anónimo"
             }
             $("#listado").append("<li><a href='#'>" + item.titulo + ", " +
                 item.autor + "</a></li>");
         })
     },

     filtra: function (patron) {
         tienda.lista_filtrada = [];

         for (var item of tienda.lista_articulos) {
             if (
                 item.titulo.includes(patron) ||
                 item.autor.includes(patron)
             ) {
                 tienda.lista_filtrada.push(item);
             }
         }
     },

     filtraDatos: function () {
         tienda.retrasa();
         var patron = $("#busqueda").val();
         tienda.filtra(patron);
         console.log(tienda.lista_filtrada);
         tienda.presentaListado();

     },
     guardaListado: function () {
         console.log("queremos guardar los datos");
         console.log(tienda.lista_articulos);
         $.each(tienda.lista_articulos, function (i, item) {
             if (item.autor == undefined) {
                 item.autor = "Anónimo"
             }
             var request = tienda.db.transaction(["libros"], "readwrite")
                 .objectStore("libros") 
                 .add(item);
             request.onsuccess = function (event) {
                 console.log("Se ha añadido el elemento a la bbdd");
             };

             request.onerror = function (event) {
                 console.log("No se ha podido añadir el elemento a la bbdd");
             }
         })

     },
     peticionAJAX: function () {
         $.getJSON("http://www.mocky.io/v2/5a54ae822d00005f235b1cd2", function (datos) {
             tienda.lista_articulos = datos;
             tienda.lista_filtrada = datos;
             console.log(tienda.lista_articulos);
             tienda.presentaListado();
             tienda.guardaListado();
             $("#busqueda").keyup(tienda.filtraDatos);
         }, );
     },
     conectaDB: function () {
         console.log("conecta DDBB");
         window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

         window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
         window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
         var request = window.indexedDB.open("Base de datos librería", 1); //versión 1

         request.onerror = function (event) {
             console.log("error: ");
         };

         request.onsuccess = function (event) {
             tienda.db = request.result;
             console.log("success: " + tienda.db);
         };

         request.onupgradeneeded = function (event) {
             var db = event.target.result;
             var objectStore = db.createObjectStore("libros", {
                 keyPath: "titulo"
             });
         }
     },

     init: function () {
         
         if (!window.indexedDB) {
             console.log("Tu navegador no soporta esta versión de IndexedDB.")
         } else {
             console.log("IndexedDB HTML5 está soportada en este navegador.");
             tienda.conectaDB();
             tienda.peticionAJAX();
         }

     },
 }
 $(document).ready(tienda.init);
