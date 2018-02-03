//Ejercicio 2
 var Moto=function(){
     this.matricula="";
     this.setMatricula=function(n){
         this.matricula=n;
     };//Ejercicio 3 y 10
     this.km="";
     this.setKm=function(n){
         this.km=n;
     }; //Ejercicio 7, 8 y 10
     this.getMatricula=function(){
         return console.log(this.matricula);
     };
     this.getKm=function(){
         return console.log(this.km);
     }; //Ejercicio 10
 };
//Ejercicio 4
var miburra=new Moto;
//Ejercicio 5
miburra.setMatricula("SA1234H");
//Ejercicio 6
console.log(miburra.matricula);
//Ejercicio 9
var moto1=new Moto;
console.log(moto1);
//Ejercicio 11
miburra.setKm(100);
miburra.getMatricula();
miburra.getKm();
//Ejercicio 12
Moto=function(matricula,km){
     this.matricula=matricula;
     this.setMatricula=function(n){
         this.matricula=n;
     };
     this.km=km;
     this.setKm=function(n){
         this.km=n;
     };
     this.getMatricula=function(){
         return console.log(this.matricula);
     };
     this.getKm=function(){
         return console.log(this.km);
     };
 };
//Ejercicio 13
var moto2=new Moto("M1234H", 250);
console.log(moto2);
//Ejercicio 14
var Animal=function(){
    this.edad=0;
};
//Ejercicio 15
var animalico=new Animal;
//Ejercicio 16
console.log(animalico);
console.log(animalico.edad);
//Ejercicio 17
animalico.edad=3;
//Ejercicio 18
console.log(animalico.edad);