
var nametxt = document.getElementById("CV-main-header-name")
var names = document.getElementById("edit-name")
var city = document.getElementById("edit-city")
var mobile = document.getElementById("edit-mobile")
var phone = document.getElementById("edit-phone")
var mail = document.getElementById("edit-mail")
var dispcity = document.getElementById("display-city")
var dispmobile = document.getElementById("display-mobile")
var dispphone = document.getElementById("display-phone")
var dispmail = document.getElementById("display-mail")
var editpict = document.getElementById("edit-pict")
var editPersonBtn = document.getElementById("edit-btn")
var disppict =document.getElementById("display-pict")
editpict.addEventListener("change",function(){
    var reader = new FileReader();
    reader.onload = function(e){
        disppict.src=e.target.result
        disppict.style.cssText = ""
    }
    reader.readAsDataURL(editpict.files[0])

})


names.addEventListener("input",function(){
    nametxt.innerText = names.value
})
city.addEventListener("input",function(){
    dispcity.innerText = city.value
})
phone.addEventListener("input",function(){
    dispphone.innerText = phone.value
})
mobile.addEventListener("input",function(){
    dispmobile.innerText = mobile.value
})
mail.addEventListener("input",function(){
    dispmail.innerText = mail.value
})

var CvPersonal =document.getElementById("CV-edit-personal")
var CvIntersts =document.getElementById("CV-edit-interests")
CvIntersts.style.display="none";
editPersonBtn.addEventListener("click",function(){
CvPersonal.style.display="none";
CvIntersts.style.display="flex";
})

// interest adding
var interestEditSelect = document.getElementById("interest-select")
var intersetSport =document.getElementById("sport")
var intersetBook =document.getElementById("bookRead")
var intersetEducate =document.getElementById("education")
interestEditSelect.addEventListener("change",function(){
if(interestEditSelect.value=="Idmanla məşğul olmaq"){
    intersetSport.style.display="flex"
    intersetBook.style.display = "none"
    intersetEducate.style.display = "none"
}else if(interestEditSelect.value=="Kitab oxumaq"){
intersetBook.style.display = "flex"
intersetSport.style.display="none"
intersetEducate.style.display = "none"
}else if(interestEditSelect.value=="Təhsil"){
    intersetBook.style.display = "none"
    intersetSport.style.display="none"
    intersetEducate.style.display = "flex"
}else{
    intersetBook.style.display = "none"
    intersetSport.style.display="none"
    intersetEducate.style.display = "none"
}
})
var intTitle = document.querySelector(".interest-title input")
var intDispTitleBook = document.querySelector("#bookRead .CV-interests-title")
var intDispTitleEducate = document.querySelector("#education .CV-interests-title")
var intDispTitleSport = document.querySelector("#sport .CV-interests-title")
intTitle.addEventListener("input",function(){
if(intersetSport.style.display=="flex"){
    intDispTitleSport.innerText= intTitle.value 
}
if(intersetBook.style.display=="flex"){
    intDispTitleBook.innerText= intTitle.value 
}
if(intersetEducate.style.display=="flex"){
    intDispTitleEducate.innerText= intTitle.value 
}
})

var intEditDesc = document.getElementById("interest-desc")
var intDispDescBook = document.querySelector("#bookRead .CV-interests-text")
var intDispDescEducate = document.querySelector("#education .CV-interests-text")
var intDispDescSport = document.querySelector("#sport .CV-interests-text")

intEditDesc.addEventListener("input",function(){
    if(intersetSport.style.display=="flex"){
        intDispDescSport.innerText= intEditDesc.value 
    }
    if(intersetBook.style.display=="flex"){
        intDispDescBook.innerText= intEditDesc.value 
    }
    if(intersetEducate.style.display=="flex"){
        intDispDescEducate.innerText= intEditDesc.value 
    }
})

