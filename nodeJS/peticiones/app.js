#!/usr/bin/env node
/*
1.- todos los ejercicios deberán ser resueltos en una carpeta llamada ejercicio3
2.- Crea una aplicación express, arráncala y comprueba que sepuede acceder correctamente a ella
3.- Gestiona las peticiones que entre por la URL (/libros) para los métodos Get y Post. Devuelve un texto que indique que método es el que se ha empleado para hacer la petición
4.- Crea una nueva ruta en la aplicación que devuelva un listado html con las provincias de castilla y león accesible desde la url /provincias y el método get
5.- Crea una nueva ruta en la aplicación que sea capaz de recoger los datos de un formulario enviados vía post a la url /provincias. Esto deverá devolver un objeto con los datos enviados por el formulario.
6.- Crea una nueva ruta variable que sea del tipo 
/get/miidentificativo donde mi midentificativo sea variable. Haz que devuelva el valor que se le ha dado cada vez a ese identificativo
7.- Crea un nueva ruta para la edición y borrado de items ambas tendrán una ruta parecida al ejercicio 6
/edit/miiden /delete/miiden. En ambos casos se devolverá el identificativo. En el caso de la edición se enviará una petición POST, en el caso del borrado será GET.
8.- Pasa una seríe de parámetros por URL en el formato ?+&. Los datos a pasar son username y password. Devuelve true o false dependiendo de si ambos son "admin" la URL será /login y se hará via POST.
 */

//Ejercicio 1 y2
var express=require ("express");
var app=express();
console.log("app.js arrancado");

//Ejercicio 3 
app.route("/libros")
    .get (function (req, res){
    res.send("Has hecho un get de los libros");
})
    .post (function (req, res){
    res.send("Has hecho un post de los libros");
});

//Ejercicio 4
app.get("/provincias",function(req,res){
    res.send("<ul>"
    +"<li>Ávila</li>"
    +"<li>Salamanca</li>"
    +"<li>Zamora</li>"
    +"<li>León</li>"
    +"<li>Palencia</li>"
    +"<li>Burgos</li>"
    +"<li>Soria</li>"
    +"<li>Segovia</li>"
    +"<li>Valladolid</li>"         
    +"</ul>"); 
});

//Ejercicio 5 
app.post("/provincias",function(req,res){
    res.send(req.body);
})

//Ejercicio 6
app.get("/get/:id", function(req,res){
    res.send(req.params.id);
});

//Ejercicio 7
app.get("/edit/:id", function(req,res){
    res.send(req.params.id);
});
app.get("/delete/:id", function(req,res){
    res.send(req.params.id);
});

//Ejercicio 8
// URL a generar /login?username=admin&password=admin
app.post("/login",function(req,res){
    var user=req.query.username;
    var pass=req.query.password;
    if(user=="admin" && pass=="admin"){
        res.send(true);
    }else{
        res.send(false);
    }
});

app.post("/loginCorrecto",function(req,res){
    var user=req.body;
    if(user.username=="admin" && user.password=="admin"){
        res.send(true);
    }else{
        res.send(false);
    }
})

app.listen(3000, function(){
    console.log("El ejemplo app está en el puerto 3000")
} );
