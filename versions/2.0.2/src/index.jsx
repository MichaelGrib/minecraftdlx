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
  import calculate from './core/calculate.js';
  import generate from './core/generate.js';
  import blocks from './core/blocks';
  import stopGame from './core/stopgame'
  import rendering from './core/rendering';
  import player from './core/player'
  blocks(gameRl);
  player(gameRl);
  
  let menu = document.getElementById('menu')
  window.firstLaunch = true




  //this function is enter point in game. Function gets world from localstorage and render it 

  function localGame (event) {
    
    
    let localsaves = localStorage.getItem('saves')
    localsaves = JSON.parse(localsaves)
    let thisworld = localsaves[event.target.parentElement.id]
      
    window.methods.rendering(gameRl, thisworld)
    gamescreen.appendChild(gameRl.PL)
    
  }  

  
  //This methods had been used in different modules. They should be available in global scope
  window.methods = {
    calculate,
    generate,
    localGame,
    rendering,
    stopGame,
  }
  
  ReactDOM.render(<LocalWorldsMenu />, menu)

  
  

