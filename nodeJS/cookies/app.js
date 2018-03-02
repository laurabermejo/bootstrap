#!/usr/bin/env node
/*
1.- Crea un nuevo proyecto express en un directorio llamado ejercicio4
2.- Crea una nueva ruta llamada /creaCookie que sea capaz de mandar una cookie al cliente con el nombre "idioma" y el valor "es_ES" para el dominio localhost y que no tenga fecha de expiración
3.- Crea una nueva ruta llamada /muestraCookies que devuelva un listado en html (ul-li) y en cada li mostrar el nombre de la cookie y el valor almacenado
4.- Crea un nuevo router express con el nombre libros que maneje la ruta /libros  
5.- Dentro del router definir las siguientes rutas:
* get /
* post /add
* get /:id
* get /edit/:id
* post /edit/:id
* get /delete/:id
* get /delete/confirm/:id
En todos estos casos las funciones deverán devolver al cliente (res) el método empleado y la ruta definida
*/
var express=require("express");
var app=express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get("/creaCookie", function(req, res){
    res.cookie('idioma', 'es_ES', {domain: 'localhost'});
    res.cookie('idioma2', 'en_EN', {domain: 'localhost'});
    res.send("Cookie creada");
});

app.get("/muestraCookies", function(req,res){
    res.send("<ul>"
             +"<li>"
             +req.cookies
             +"</li>"
             +"<li>"
             +req.cookies.name
             +"</li>"
             +"</ul>");
});

var libros = require('./libros');
app.use('/books', libros);

app.listen(3000,function(req,res){
    console.log("http://localhost:3000/");
});