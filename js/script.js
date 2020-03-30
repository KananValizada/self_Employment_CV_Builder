
// MANAGING CV NAVS*******************************

var navPerson = document.getElementById("navPerson")
var navInterest = document.getElementById("navInterest")
var navEducate = document.getElementById("navEducate")
var navSkills = document.getElementById("navSkills")
var navExp = document.getElementById("navExp")
var navDesign = document.getElementById("navDesign")

navPerson.addEventListener("click",function(){
    CvPersonal.style.display = "block"
    CvIntersts.style.display = "none"
    intOtherBtn[1].style.display="none"
    CvExperience.style.display = "none"
    CVeditEducation.style.display = "none"
    cvEditSkills.style.display =  "none"
    cvEditDesign.style.display = "none"
})
navInterest.addEventListener("click",function(){
    CvPersonal.style.display = "none"
    CvIntersts.style.display = "block"
    intOtherBtn[1].style.display="block"
    CvExperience.style.display = "none"
    CVeditEducation.style.display = "none"
    cvEditSkills.style.display =  "none"
    cvEditDesign.style.display = "none"
})
navExp.addEventListener("click",function(){
    CvPersonal.style.display = "none"
    CvIntersts.style.display = "none"
    intOtherBtn[1].style.display="none"
    CvExperience.style.display = "block"
    CVeditEducation.style.display = "none"
    cvEditSkills.style.display =  "none"
    cvEditDesign.style.display = "none"
})
navEducate.addEventListener("click",function(){
    CvPersonal.style.display = "none"
    CvIntersts.style.display = "none"
    intOtherBtn[1].style.display="none"
    CvExperience.style.display = "none"
    CVeditEducation.style.display = "block"
    cvEditSkills.style.display =  "none"
    cvEditDesign.style.display = "none"
})
navSkills.addEventListener("click",function(){
    CvPersonal.style.display = "none"
    CvIntersts.style.display = "none"
    intOtherBtn[1].style.display="none"
    CvExperience.style.display = "none"
    CVeditEducation.style.display = "none"
    cvEditSkills.style.display =  "block"
    cvEditDesign.style.display = "none"
})
navDesign.addEventListener("click",function(){
    CvPersonal.style.display = "none"
    CvIntersts.style.display = "none"
    intOtherBtn[1].style.display="none"
    CvExperience.style.display = "none"
    CVeditEducation.style.display = "none"
    cvEditSkills.style.display =  "none"
    cvEditDesign.style.display = "block"
})
// MANAGING PERSONEDIT CV********************



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
    navPerson.classList.add("navDone")
    navPerson.disabled = false
CvPersonal.style.display="none";
CvIntersts.style.display="flex";
intOtherBtn[1].style.display="block"
})

// interest adding***********************************

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
    intOtherBtn[0].style.display ="none"
    CvIntersts.style.display="none";
intOtherBtn[1].style.display="none";
CvExperience.style.display = "block"
navInterest.disabled = false;
navInterest.classList.add("navDone")
})


var editExpName =document.getElementById("edit-exp-name")
var editExpDesc =document.getElementById("edit-exp-desc")
var editExpStartDate=document.getElementById("edit-exp-startDate")
var editExpEndDate =document.getElementById("edit-exp-endDate")
var editExpAddBtn =document.querySelector(".CV-edit-experience button")
var dispExp =document.querySelector(".CV-main-experience")
var dispExpTitle = document.querySelector(".title-experience")
{/* <div class="CV-main-experience-item">
                                <p class="CV-main-experience-item-date">
                                    <span class="CV-main-experience-start">2012</span> - <span class="CV-main-experience-end">2016</span>
                                </p>
                                <div class="CV-main-experience-item-text">
                                    <h4 class="CV-main-experience-title">Company A</h4>
                                    <p class="CV-main-experience-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis accusamus quas dolore, ducimus animi veniam doloribus delectus adipisci quam blanditiis ea sit harum aliquam deleniti facere reiciendis quisquam ad nulla! 
                                    </p>
                                </div>
                            </div> */}
editExpAddBtn.addEventListener("click",function(){
   var newWork=  document.createElement("div")
   var newDate= document.createElement("p")
   var newStartDate= document.createElement("span")
   var newEndDate= document.createElement("span")
   var newContent= document.createElement("div")
   var newTitle= document.createElement("h4")
   var newText= document.createElement("p")
   newStartDate.innerText = editExpStartDate.value.split("-")[0]
   newEndDate.innerText = editExpEndDate.value.split("-")[0]
   newTitle.innerText = editExpName.value
   newText.innerText = editExpDesc.value
   newWork.classList.add("CV-main-experience-item")
   newDate.classList.add("CV-main-experience-item-date")
   newStartDate.classList.add("CV-main-experience-start")
   newEndDate.classList.add("CV-main-experience-end")
   newContent.classList.add("CV-main-experience-item-text")
   newTitle.classList.add("CV-main-experience-title")
   newText.classList.add("CV-main-experience-text")
   newDate.appendChild(newStartDate)
   newDate.innerHTML+=" - "
   newDate.appendChild(newEndDate)
   newContent.appendChild(newTitle)
   newContent.appendChild(newText)
   newWork.appendChild(newDate)
   newWork.appendChild(newContent)
   dispExp.appendChild(newWork)
   dispExpTitle.style.display = "block"

   alert("Ugurla əlavə olundu")
})
var expContBTN = document.querySelector(".expContBtn")
var CVeditEducation = document.querySelector(".CV-edit-education")
expContBTN.addEventListener("click",function(){
CVeditEducation.style.display = "block";
navExp.classList.add("navDone")
navExp.disabled =false
CvExperience.style.display = "none"
})


//*********************** */ EDUCATİON*****************

// {/* <div class="CV-main-education-item">
//                                 <p class="CV-main-education-item-date">
//                                     <span class="CV-main-education-start">2012</span> - <span class="CV-main-experience-end">2016</span>
//                                 </p>
//                                 <div class="CV-main-education-item-text">
//                                     <h4 class="CV-main-education-title">Stratagic branding</h4>
//                                     <p class="CV-main-education-text">University of Baku</p>
//                                     <p class="CV-main-education-text">learning strategy</p>
//                                 </div>
//                             </div> */}

var dispEdu = document.querySelector(".CV-main-education")
var editEduAddBtn = document.querySelector(".editEduAddBtn")
var dispEduTitle = document.querySelector(".dispEduTitle")
var editEduStartDate = document.querySelector("#edit-edu-startDate")
var editEduEndDate = document.querySelector("#edit-edu-endDate")
var editEduName = document.querySelector("#edit-edu-name")
var editEduDesc = document.querySelector("#edit-edu-desc")
   editEduAddBtn.addEventListener("click",function(){
   var newWork=  document.createElement("div")
   var newDate= document.createElement("p")
   var newStartDate= document.createElement("span")
   var newEndDate= document.createElement("span")
   var newContent= document.createElement("div")
   var newTitle= document.createElement("h4")
   var newText= document.createElement("p")
   newStartDate.innerText = editEduStartDate.value.split("-")[0]
   newEndDate.innerText = editEduEndDate.value.split("-")[0]
   newTitle.innerText = editEduName.value
   newText.innerText = editEduDesc.value
   newWork.classList.add("CV-main-education-item")
   newDate.classList.add("CV-main-education-item-date")
   newStartDate.classList.add("CV-main-education-start")
   newEndDate.classList.add("CV-main-experience-end")
   newContent.classList.add("CV-main-education-item-text")
   newTitle.classList.add("CV-main-education-title")
   newText.classList.add("CV-main-education-text")
   newDate.appendChild(newStartDate)
   newDate.innerHTML+=" - "
   newDate.appendChild(newEndDate)
   newContent.appendChild(newTitle)
   newContent.appendChild(newText)
   newWork.appendChild(newDate)
   newWork.appendChild(newContent)
   dispEdu.appendChild(newWork)
   dispEduTitle.style.display = "block"

   alert("Ugurla əlavə olundu")
})

var eduNextBtn = document.querySelector(".eduNextBtn")
var editSkillsForm = document.querySelector(".addSkillForm")

eduNextBtn.addEventListener("click",function(){
editSkillsForm.style.display =  "flex"
navEducate.classList.add("navDone")
navEducate.disabled = false
CVeditEducation.style.display = "none"
})

// SKILL SCT***********
var addSkillBtn = document.querySelector(".addSkillBtn")
var languageSkillForm = document.querySelector(".languageSkillForm")
addSkillBtn.addEventListener("click",function(){
    cvEditSkills.style.display = "block"
    editSkillsForm.style.display = "none"
    languageSkillForm.style.display = "block"

})


// {/* <div class="CV-main-skills-languages">
//                             <h3 class="CV-main-skills-languages-title">Languages</h3>
//                             <div>
//                                 <span  class="CV-main-skills-language">English</span>
//                             <div class="skill-percentage">
//                                 <h1></h1>
//                             </div>
//                             </div>
                            
//                         </div> */}

var titleDispSkils = document.querySelector(".CV-main-skills")
var skillSelectedLang = document.querySelector(".skillSelectedLang")
var skillLangRange = document.querySelector(".skillLangRange")
var addLangSkillBtn = document.querySelector(".addLangSkillBtn")
var titleSkills = document.querySelector(".title-skills")
var langSkillTitle = document.querySelector(".CV-main-skills-languages-title")
addLangSkillBtn.addEventListener("click",function(){
titleSkills.style.display = "block"
langSkillTitle.style.display = "block"
    var newLangCont = document.createElement("div")
    var newLang = document.createElement("span")
    var newLangRange = document.createElement("div")
    var newLangRangeBack = document.createElement("h1")
    newLang.classList.add("CV-main-skills-language")
    newLang.innerText = skillSelectedLang.value
    newLangRange.classList.add("skill-percentage")
    newLangRangeBack.style.width = skillLangRange.value + "%"
    newLangRange.append(newLangRangeBack)
    newLangCont.append(newLang,newLangRange)
    titleDispSkils.append(newLangCont)

})
var goDesignBtn = document.querySelector(".goDesignBtn")
var cvEditDesign  = document.querySelector(".CV-edit-design")
var cvEditSkills = document.querySelector(".CV-edit-skills")
goDesignBtn.addEventListener("click",function(){
    navSkills.disabled = false;
    navSkills.classList.add("navDone")
    navDesign.disabled = false;
    navDesign.classList.add("navDone")
    cvEditSkills.style.display =  "none"
    cvEditDesign.style.display = "block"
})

// MANAGING DESIGN ***************************

var dispImg =document.querySelector(".CV-side-imgKeeper")
var isImgSquare = document.getElementById("isImgSquare")
var imgBorderColor = document.getElementById("imgBorderColor")
isImgSquare.addEventListener("change",function(){
    if(isImgSquare.checked){
        dispImg.style.borderRadius = "0"
    }else{
        dispImg.style.borderRadius="50%"
    }
})
imgBorderColor.addEventListener("change",function(){
    console.log(imgBorderColor.value)
    dispImg.style.borderColor = imgBorderColor.value
})

var CvFontMain = document.querySelectorAll(".CV-title")
var mainFontColor = document.getElementById("mainFontColor")
var mainFontSize = document.getElementById("mainFontSize")
var skillPersentage1 = document.querySelector(".skill-percentage h1")
var skillPersentage2 = document.querySelectorAll(".skill-percentage h1")
var mainIcons = document.querySelectorAll(".CV-interests i")
mainFontColor.addEventListener("change",function(){
    CvFontMain.forEach(x=>{
        x.style.color = mainFontColor.value
        x.style.borderBottom = "1px solid" + mainFontColor.value
    }
    )
    console.log(skillPersentage1)
    skillPersentage1.style.backgroundColor =mainFontColor.value
    // skillPersentage2.forEach(x=>x.style.backgroundColor = mainFontColor.value)
    mainIcons.forEach(x=>x.style.color = mainFontColor.value)
})
mainFontSize.addEventListener("input",function(){
    console.log(mainFontSize.value)
    CvFontMain.forEach(x=>x.style.fontSize= mainFontSize.value+"px")
})