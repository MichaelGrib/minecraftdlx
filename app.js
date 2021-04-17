// import * as launcher from '/launcher.js'
document.addEventListener('DOMContentLoaded', ()=>{

   function welcome () {
      let shell = document.getElementById('appshell') 
      shell.classList.add('launcher__box')
      
      let shellH1 = document.createElement('h1')
      shellH1.classList.add('launcher__h1')
      shellH1.textContent = "Добро пожаловать геймеры в майнкрафт"
      
      let shellP = document.createElement('p')
      shellP.classList.add('launcher__p')
      shellP.textContent = "Выберите версию игры"
      
      let shellA = document.createElement('a')
      shellA.href = "./versions/2.0.1/dist/index.html"
      shellA.classList.add('launcher__p')
      shellA.textContent = "Войти в игру"
      
      shell.appendChild(shellH1)
      shell.appendChild(shellP)
      shell.appendChild(shellA)
   }
   welcome ()

})
