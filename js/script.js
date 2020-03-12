
var nametxt = document.getElementById("aba")
var names = document.getElementById("person-name")

names.addEventListener("input",function(){
    console.log(nametxt)
    names.innerHTML = nametxt.innerHTML
})