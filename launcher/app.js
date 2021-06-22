// import * as launcher from '/launcher.js'
document.addEventListener("DOMContentLoaded", () => {
  function welcome() {
    let shell = document.getElementById("appshell")
    let selectVersion = document.getElementById("launcher__select")
    let version = "2.0.2"
    selectVersion.addEventListener("change", (event) => {
      version = event.target.value
      shellA.href = `../versions/${version}/dist/index.html`
      console.log(version)
    })
    let shellA = document.createElement("a")
    shellA.href = `../versions/${version}/dist/index.html`
    shellA.classList.add("launcher__btn")
    shellA.textContent = "Войти в игру"

    shell.appendChild(shellA)
  }
  welcome()
})
