const BtnDeminuir = document.querySelectorAll("#deminui")
const BtnAumentar = document.querySelectorAll("#aumenta")
const counter = document.getElementById("counter")
const btnChangeTheme = document.getElementById("theme")

function changeBgColor(color){
    document.body.style.backgroundColor = color
}

function changeColor(color){
 counter.style.color = color
}

function changeTheme(){
    if(document.body.style.backgroundColor == "black"){
        changeBgColor("white")
        changeColor("black")
      }else {
          changeBgColor("black")
          changeColor("white")
      }
}

function aumentarNumero(){
    const value = Number(counter.innerHTML)+1
 counter.innerHTML = value

 //changeTheme(value)

}

btnChangeTheme.addEventListener("click", ()=>{
    changeTheme()
})


function deminuirNumero(){
    const value = Number(counter.innerHTML)-1
    counter.innerHTML = value
   /// changeTheme(value)
}

