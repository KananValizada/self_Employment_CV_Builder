
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
var dispProff=document.getElementById("CV-main-header-proff")
var editpict = document.getElementById("edit-pict")
var editPersonBtn = document.getElementById("edit-btn")
var editProfess =document.getElementById("edit-profess")
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
editProfess.addEventListener("input",function(){
    dispProff.innerText=editProfess.value
})

var CvPersonal =document.getElementById("CV-edit-personal")
var CvIntersts =document.getElementById("CV-edit-interests")
CvIntersts.style.display="none";
var intOtherBtn = document.querySelectorAll(".CV-edit-sections > button")
editPersonBtn.addEventListener("click",function(){
    if( editProfess=="" ||names.value==""||city.value==""||phone.value==""||mobile.value==""|| mail.value==""){
        alert("Məlumatları doldurmalısınız")
        return;
    }
CvPersonal.style.display="none";
CvIntersts.style.display="flex";
intOtherBtn[1].style.display="block"
})

// interest adding
var interestEditSelect = document.getElementById("interest-select")
var intersetSport =document.getElementById("sport")
var intersetBook =document.getElementById("bookRead")
var intersetEducate =document.getElementById("education")
var slct = ""
var act=0
interestEditSelect.addEventListener("click",function(){
act++
if(interestEditSelect.value=="Idmanla məşğul olmaq"){
    intersetSport.style.display="flex"
    if(!slct.includes("b") ||intCount==0 ){
        intersetBook.style.display = "none"
    }
    if(!slct.includes("e") || intCount==0 ){
        intersetEducate.style.display = "none"
    }
}else if(interestEditSelect.value=="Kitab oxumaq"){
intersetBook.style.display = "flex"
if(!slct.includes("s") ||intCount==0 ){
    intersetSport.style.display = "none"
}
if(!slct.includes("e")||intCount==0 ){
    intersetEducate.style.display = "none"
}
}else if(interestEditSelect.value=="Təhsil"){
    if(!slct.includes("b")||intCount==0 ){
    intersetBook.style.display = "none"
    }
    if(!slct.includes("s") || intCount==0 ){
    intersetSport.style.display="none"
    }
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
if(interestEditSelect.value=="Idmanla məşğul olmaq"){
    intDispTitleSport.innerText= intTitle.value 
}
if(interestEditSelect.value=="Kitab oxumaq"){
    intDispTitleBook.innerText= intTitle.value 
}
if(interestEditSelect.value=="Təhsil"){
    intDispTitleEducate.innerText= intTitle.value 
}
})

var intEditDesc = document.getElementById("interest-desc")
var intDispDescBook = document.querySelector("#bookRead .CV-interests-text")
var intDispDescEducate = document.querySelector("#education .CV-interests-text")
var intDispDescSport = document.querySelector("#sport .CV-interests-text")

intEditDesc.addEventListener("input",function(){
    if(interestEditSelect.value=="Idmanla məşğul olmaq"){
        intDispDescSport.innerText= intEditDesc.value 
    }
    if(interestEditSelect.value=="Kitab oxumaq"){
        intDispDescBook.innerText= intEditDesc.value 
    }
    if(interestEditSelect.value=="Təhsil"){
        intDispDescEducate.innerText= intEditDesc.value 
    }
})

var intAddBtn =document.querySelector(".interest-btn-add")
var intEdit = document.querySelector(".CV-edit-interests")
intAddBtn.addEventListener("click",function(){
    if( act==0||interestEditSelect.value=="Secin"){
        interestEditSelect.style.border="1px solid red"
        return
    }
    // if()
    interestEditSelect.style.border="1px solid black"
    document.querySelector(".title-interest").style.display = "block"
    intEdit.style.display = "none"
    intOtherBtn[0].style.display="block"
    if(interestEditSelect.value=="Kitab oxumaq"){
        slct +="b"
    }
    if(interestEditSelect.value=="Idmanla məşğul olmaq"){
        slct +="s"
    }
    if(interestEditSelect.value=="Təhsil"){
        slct +="e"
    }
})

var interestNew = document.querySelector(".interest-btn-new")
var options = document.querySelectorAll(".interest-select option")
var intCount = 0
interestNew.addEventListener("click", function(){
    
    intCount ++
    if(intCount==2){
        interestNew.disabled = true
    }
    if(slct.includes("b")){
        options[1].disabled =true
        options[1].selected=false
    }
    if(slct.includes("e")){
        options[3].disabled =true
        options[3].selected=false
    }
    if(slct.includes("s")){
        options[2].disabled =true
        options[2].selected=false
    }
    act=0
    intEdit.style.display = "flex"
    intOtherBtn[0].style.display= "none"
})
var  CvExperience = document.querySelector(".CV-edit-experience")
intOtherBtn[1].addEventListener("click",function(){
    CvIntersts.style.display="none";
intOtherBtn[1].style.display="none";
CvExperience.style.display = "block"
})


var editExpName =document.getElementById("edit-exp-name")
var editExpDesc =document.getElementById("edit-exp-desc")
var editExpStartDate=document.getElementById("edit-exp-startDate")
var editExpEndDate =document.getElementById("edit-exp-endDate")