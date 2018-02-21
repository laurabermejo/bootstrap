var ficheros;
var dropbox;
function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}
function uploadFile(file){ 
    //aquí se puede añadir un gif de cargando
    var url = 'file.php'; 
    var xhr = new XMLHttpRequest(); 
    var fd = new FormData(); 
    xhr.open("POST", url, true); 
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { 
            console.log(xhr.responseText); 
            document.getElementById("images").innerHTML+="<img src='"+xhr.responseText+"'/>" 
        } 
    };
    fd.append("upload_file", file); 
    xhr.send(fd); 
}
function handleFiles(files) { 
    console.log(files);
  for (var i = 0; i < files.length; i++) {
    var file = files[i]; 
    uploadFile(file);
  }
}
function drop(e) {
  e.stopPropagation(); 
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files; 

  handleFiles(files);
}
function cambia(e){
    ficheros=e.target.files;
    console.log(ficheros);
    for(var file of ficheros){
        console.log(file);
     uploadFile(file);   
    }
}
function init(){
    console.log("DOM Cargado");
    var fichero=document.getElementById('fichero');
    fichero.addEventListener("change",cambia);
    dropbox = document.getElementById("dropbox");
    dropbox.addEventListener("dragenter", dragenter, false);
    dropbox.addEventListener("dragover", dragover, false);
    dropbox.addEventListener("drop", drop, false);
}
document.addEventListener("DOMContentLoaded",init);
