  import './css/normalize.css'
  import './css/menu.css'
  import './css/map.css'
  import './css/mobs.css'
  import './css/test.sass'


  //gameRl is Main object that contains gaming core. Object gameRl will be used in game process for render textures, manage logic, physic, AI, etc. 
  window.gameRl = {
    worldmap: '',
    blocks: '',
    gameplay: {},
  }
  //But, one separate world will track in LocalStorage. All changes will commited in LocalStorage throughout the gameplay 


  import React from 'react';
  import ReactDOM from 'react-dom';
  import LocalWorldsMenu from './LocalWorldsMenu.jsx';
  import calculate from './calculate.js';
  import generate from './generate.js';
  import blocks from './blocks';
  import rendering from './rendering';
  import player from './player'
  blocks(gameRl);
  player(gameRl);
  
  let menu = document.getElementById('menu')

  //this function is enter point in game. Function gets world from localstorage and render it 

  function localGame (event) {
    
    console.log(event)

    menu.style.display = 'none'
    const gamescreen = document.getElementById('gamescreen')
    const Viewport = () => {
      return (
        <div id="viewport">
          <div id="wrap"/>
        </div>
      )
    }
    let GameRender = new Promise(() => {
      ReactDOM.render(<Viewport/>, gamescreen)
    })
    GameRender.then(() => {
      document.getElementById('wrap').style.transform  = `translate(-${2 / wrap.getComputed}, -${2 / wrap.clienHeight})`
    })
    let thisworld = event.target.id
    
    let localsaves = localStorage.getItem('saves')
    localsaves = JSON.parse(localsaves)
    thisworld = localsaves[thisworld]
      
    window.methods.rendering(gameRl, thisworld);//it isn't ReactDOM.render, it's my own module
    gamescreen.appendChild(gameRl.PL)
    
  }  

  
  //This methods had been used in different modules. They should be available in global scope
  window.methods = {
    calculate,
    generate,
    localGame,
    rendering,
  }
  

  
  
  //starter menu with basic settings. This menu allows enter in Local game, settings, exit game , maybe in future Network game
  const Firstmenu = () => {
    return (
      <div>
        <h1 className="menu__h1">Версия 2.0.2</h1>
        <button id="local" className="menu__local" onClick={toLocalWorldsMenu}>Локальная игра</button>
        <button disabled>Настройки</button>
        <a href="../../../index.html">Выйти</a>
      </div>
    )
  }
  let firstmenu = () => {
    ReactDOM.render(<Firstmenu />, menu) 
  }
  firstmenu()


  
  
  function toLocalWorldsMenu () {
    ReactDOM.render(<LocalWorldsMenu />, menu)
  }
  
  

