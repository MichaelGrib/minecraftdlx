import React from 'react';
import ReactDOM from 'react-dom';
//This class display menu that let enter in game, create new world, get saves from localstorage and edit these saves
export default class LocalWorldsMenu extends React.Component {
  constructor (props) {
      super(props)
      this.state = {
        mode: 'firstMenu',
        reload: true,
      }
    }



    render () {
      function LocalStorageSaves () {
        let lastsaves = localStorage.getItem('saves')
        lastsaves = JSON.parse(lastsaves)
        if(lastsaves){
          return (
            <div className='localsaves__container'>
              <p className='localsaves__p'>Сохранения</p>
              {lastsaves.map((save, index) => {
                let thisSave = save
                return (
                  <div className="localsaves__box" key={index} id={index}>
                    <p className="localsaves__name">{save.name}</p>
                    <button className="localsaves__play"  onClick={(event) => this.playLocalGame({event})}>Играть</button>
                    <button className="localsaves__delete" onClick={(event) => {this.deleteLocalSave(event)}}>Удалить</button>
                  </div>
                )
              })}
  
            </div>
          )

        }
        else {
          return (
            <div className='localsaves__container'>
              <p className='localsaves__p'>Сохранения</p>
            </div>
          )
        }
        
      }
      if (this.state.mode === "firstMenu") {
        return (
          <div className='entrymenu__container'>
            <h1 className='entrymenu__h1'>Версия 2.0.2</h1>
            <button id='local' className='entrymenu__btn' onClick={this.mainLocal.bind(this)}>Локальная игра</button>
            <button className='entrymenu__btn entrymenu__btn_disabled' disabled>Настройки</button>
            <a className='entrymenu__btn' href='../../../index.html'>Выйти</a>
          </div>
        )
      }

      if(this.state.mode === 'main') {
        return (
          <div className='localmenu__container'>
            <button className='localmenu__btn' onClick={this.newLocal.bind(this)}>Создать мир</button>
            <button className='localmenu__btn' onClick={this.toFirstMenu.bind(this)}>Вернуться на главную</button>
            {LocalStorageSaves.call(this)}
          </div>
        )
      } 
      if (this.state.mode === 'newLocal') {
        return (
          <form className='newlocal__container' name='newLocal'>
            <input className='newlocal__input' name='newLocalName' placeholder='Новый мир'></input>
            <button className='newlocal__btn' onClick={this.createLocal.bind(this)}>Создать</button>
            <button className='newlocal__btn' type='submit' onClick={this.mainLocal.bind(this)}>Отменить</button>
          </form>
        )
      }
      if (this.state.mode === 'editLocal') {
        return (
          <form className='editlocal__container' name='editLocal'>
            <input className='editlocal__input' name='editLocalName'></input>
            <button className='editlocal__btn' type='submit'>Сохранить</button>
            <button className='editlocal__btn' onClick={this.mainLocal.bind(this)}>Отменить</button>
          </form>
        )
      }

      if (this.state.mode === 'inGame' ) {
        
        return (
          <div id='gamemenu' className='ingamemenu__shell'>
            <button id='exitGame' className='ingamemenu__exit' onClick={this.exitGame.bind(this)}>Выйти</button>
          </div>
        )
      }
    }
    
    //In method createLocal, form data of world goes through calculate() and generate() functions. So, then we get object 'world' with all necessary data for launch world and push it in saves on localstorage.    
    createLocal (event) {
      class WorldCreate {
          constructor (name) {
              this.name = name
          } 
      }
      let world = new WorldCreate(document.forms.newLocal.elements.newLocalName.value) 
        
      world = window.methods.calculate(world);
      world = window.methods.generate(world);
      let lastsaves = localStorage.getItem('saves');
      let saves = []
      if(lastsaves){
        
        lastsaves = JSON.parse(lastsaves)
        saves = lastsaves
      }

      
      saves.push(world)
      this.sendInLocalSaves(saves)
    }
    //Method editLocalSave makes possible edit and delete some data of saves.
    exitGame() {
      window.methods.stopGame()
      this.setState({mode: 'main'})
    }
    editLocalSave() {

    }
    deleteLocalSave(event) {
      let save = event.target.parentNode.id 
      let saves = this.getFromLocalSaves()
      saves.splice(save, 1)
      this.sendInLocalSaves(saves)
      this.setState({reload: !this.state.reload})
      
    }
    editLocal () {
      this.setState({mode: 'editLocal'});
    }
    newLocal () {
      this.setState({mode: 'newLocal'});
    }
    mainLocal () {
      this.setState({mode: 'main'});
    }
    toFirstMenu () {
      this.setState({mode: 'firstMenu'});
    }
    getFromLocalSaves () {
      let saves = localStorage.getItem('saves')
          saves = JSON.parse(saves)
          return saves
    }
    sendInLocalSaves(s) {
      let saves = JSON.stringify(s)
      localStorage.setItem('saves', saves)
    }
    playLocalGame(event) {
      this.setState({mode: 'inGame'})
      window.methods.localGame(event.event)
    }
}