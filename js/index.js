var createCvBtn = document.querySelector(".createCV-btn")
var login = document.querySelector(".login")
var createCV = document.querySelector(".createCV")

login.addEventListener("click",function(e){
    if(e.target.classList.value=="login"){
        login.style.display = "none"
    }
    
})
createCvBtn.addEventListener("click",function(){
login.style.display = "block"
})

