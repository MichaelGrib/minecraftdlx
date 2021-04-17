  import './css/normalize.css'
  import './css/menu.css'
  import './css/map.css'
  import './css/mobs.css'
  import './css/test.sass'

  const gameRl = {
    worldmap: '',
    blocks: '',
  }

  import React from 'react';
  import ReactDOM from 'react-dom';
  import calculate from './calculate.js';
  import generate from './generate.js';
  import blocks from './blocks';
  import render from './rendering'
  import player from './player'
  calculate(gameRl);
  generate(gameRl);
  blocks(gameRl);
  player(gameRl)




  let menu = document.getElementById('menu')
  
  let saves = [
    {name: 'Мирок'},
    {name: 'Пустыня'},
    {name: 'Деревня'},
  ]

  const Firstmenu = () => {
    return (
    <div>
      <h1 className="menu__h1">Версия 2.0.1</h1>
      <button id="local" className="menu__local">Локальная игра</button>
      <button disabled>Настройки</button>
      <a href="../../../index.html">Выйти</a>
    </div>
    )
  }
  ReactDOM.render(<Firstmenu />, menu)
  function inLocal() {
    let Localmenu = () => {
      return (
        <div>
          <button id='localGameStart'>Начать игру</button>
          <div id='localsaves' className='localsaves'>
          </div>
        </div>
      )}
      ReactDOM.render(<Localmenu/>, menu)
      
      Localmenu.className = 'localmenu'
      function getSaves() {
        for (let i = 0; i < saves.length; i++) {
          
          let save = document.createElement('div')
          save.id = saves[i].name
          let enter = document.createElement('div')
          enter.textContent = saves[i].name
          save.appendChild(enter)
    
          let remove = document.createElement('button')
          remove.classList.add('remove')
          remove.textContent = 'Удалить'
          save.appendChild(remove)
          document.getElementById('localsaves').appendChild(save)
        }
      }
      getSaves()
      let localsaves = document.getElementById('localsaves')
      let remove = document.querySelectorAll('.remove')
      remove.forEach((element)=>{
        element.addEventListener('click', (e) => {
          let removeTarget = e.target
          let saveId = removeTarget.parentElement.id
          alert('Вы действительно хотите удалить мир ' + saveId + "?")
          for(let b = 0; b < saves.length; b++){
            
            if(saves[b].name === saveId){
              console.log(b)
              saves.splice(b, 1)
              localsaves.removeChild(localsaves.children[b])
            }
          }

        })

      }) 
      const localGameStart = document.getElementById('localGameStart')
      localGameStart.addEventListener('click', localGame)
  }
  function inMain () {
    ReactDOM.render(firstmenu, menu)
  }
  const local = document.getElementById('local')
  local.addEventListener('click', inLocal)

  function localGame () {
    menu.style.display = 'none'
    const gamescreen = document.getElementById('gamescreen')
    const Viewport = () => {
      return (
        <div id="viewport">
          <div id="wrap"/>
        </div>
      )
    }
    ReactDOM.render(<Viewport/>, gamescreen) 
    
    render(gameRl);//it isn't ReactDOM.render, it's my own module
    gamescreen.appendChild(gameRl.PL)
  }  
  console.log(gameRl)
gamescreen.addEventListener('mousemove', (e) => {
  gameRl.PL.style.top = `${e.clientY}px`
  gameRl.PL.style.left = `${e.clientX}px`
})
  
  
  
  
  
