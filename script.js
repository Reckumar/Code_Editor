let box = document.getElementById("box");
let btnCopy = document.getElementById("btnCopy");
let btnSave = document.getElementById("btnSave");
let btnLock = document.getElementById("btnLock");

//using ace library
ace.edit(box, {
    theme:"ace/theme/cobalt",
    mode:"ace/mode/javascript",
});

//buttons functionally 
btnCopy.addEventListener("click", function (){
    btnCopy.innerHTML = "Copied";
    box.select();
    document.execCommand("copy");
    
});

btnSave.addEventListener("click", function(){
    document.execCommand("save");
    btnSave.innerHTML = "Saved";
});

btnLock.addEventListener("click", function(){
    document.execCommand("lock");
    btnLock.innerHTML = "Locked";
});



