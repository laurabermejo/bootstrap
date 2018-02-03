//Ejercicio 2-4-5-12-13-14-15
var Alumno=function(nombre="", dni="", tlf="", email="",notas=[]){
    this.nombre=nombre;
    this.dni=dni;
    this.tlf=tlf;
    this.email=email;
    this.notas=notas;
    this.getNombre=function(){
        return this.nombre; 
    };
    this.setNombre=function(nombre){
        this.nombre=nombre;
    };
    this.getDni=function(){
        return this.dni; 
    };
    this.setDni=function(dni){
        this.dni=dni;
    };
    this.getTlf=function(){
        return this.tlf; 
    };
    this.setTlf=function(tlf){
        this.tlf=tlf;
    };
    this.getEmail=function(){
        return this.email; 
    };
    this.setEmail=function(email){
        this.email=email;
    };
    this.getNotas=function(){
        return this.notas; 
    };
    this.setNotas=function(notas){
        this.notas=notas;
    };
    this.addNota=function(nota){
        this.notas.push(nota);
    }
//Ejercicio 17
    this.mediaNotas=function(){
        var media=0;
        var suma=0;
        var numElementos=this.notas.length;
        for( let nota of this.notas){
            suma+=nota.valor;
        }
        media=suma/numElementos;
        return media;
    }
}
//Ejercicio 3
var alumno1=new Alumno();
//Ejercicio 6
var alumno2=new Alumno("Laura","07197543A","65594525","p@p.com");
//Ejercicio 7-9-10
var Nota=function(valor=0,asignatura=""){
    this.valor=valor;
    this.asignatura=asignatura;
    this.setValor=function(valor){
        this.valor=valor;
    }
    this.getValor=function(){
        return this.valor;
    }
    this.setAsignatura=function(asignatura){
        this.asignatura=asignatura;
    }
    this.getAsignatura=function(){
        return this.asignatura;
    }
}
//Ejercicio 8
var miNota=new Nota();
//Ejercicio 11
var miNota2=new Nota(7,"Lengua y Literatura");
//Ejercicio 16
var miNota3=new Nota(9,"Geografía e Historia");
alumno2.addNota(miNota3);
console.log(alumno2);

alumno2.addNota(miNota2);
console.log(alumno2.mediaNotas());
