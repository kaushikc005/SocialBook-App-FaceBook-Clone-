
const profiles=document.getElementsByClassName('navProfile')
for(const profile of profiles)
profile.addEventListener('click',() => {
    
    document.querySelector('.settingsMenu').style.display==="none"?document.querySelector('.settingsMenu').style.display="block":document.querySelector('.settingsMenu').style.display="none"
})

const darkMode=document.getElementById('darkMode')

if(localStorage.getItem("theme")==="light")
{
    darkMode.classList.remove("darkModeOn")
    document.body.classList.remove("darkModeTheme")
}

else if(localStorage.getItem("theme")==="dark"){
    darkMode.classList.add("darkModeOn")
document.body.classList.add("darkModeTheme")
}else
 localStorage.setItem("theme","light")

darkMode.addEventListener('click',() => {
    darkMode.classList.toggle("darkModeOn")
    document.body.classList.toggle("darkModeTheme")
    localStorage.getItem("theme")==="light"?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light")
})

