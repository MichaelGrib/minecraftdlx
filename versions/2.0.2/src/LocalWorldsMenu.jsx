import React from 'react';
import ReactDOM from 'react-dom';
//This class display menu that let enter in game, create new world, get saves from localstorage and edit these saves
export default class LocalWorldsMenu extends React.Component {
  constructor (props) {
      super(props)
      this.state = {
        mode: 'main'
      }
    }

    render () {
      function LocalStorageSaves () {
        let lastsaves = localStorage.getItem('saves')
        lastsaves = JSON.parse(lastsaves)
        if(lastsaves){
          return (
            <div>
  
              {lastsaves.map((save, index) => {
                return (
                  <div key={index}>
                    <p>{save.name}</p>
                    <button id={index} onClick={window.methods.localGame.bind({save})}>Играть</button>
                  </div>
                )
              })}
  
            </div>
          )

        }
        else {
          return <div></div>
        }
        
      }
      if(this.state.mode === 'main') {
        return (
          <div>
            <button onClick={this.newLocal.bind(this)}>Создать мир</button>
            <button onClick={this.toFirstMenu.bind(this)}>Вернуться на главную</button>
            {LocalStorageSaves.call(this)}
          </div>
        )
      } 

      if (this.state.mode === 'newlocal') {
        return (
          <form name="newLocal">
            <input name="newLocalName" placeholder='Новый мир'></input>
            <button onClick={this.createLocal.bind(this)}>Создать</button>
            <button type="submit" onClick={this.mainLocal.bind(this)}>Отменить</button>
          </form>
        )
      }

      if (this.state.mode === 'editLocal') {
        return (
          <form name="editLocal">
            <input name="editLocalName"></input>
            <button type="submit" >Сохранить</button>
            <button onClick={this.mainLocal.bind(this)}>Отменить</button>
          </form>
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

      
      // localStorage.removeItem('saves');
      saves.push(world) ;
      saves = JSON.stringify(saves);
      localStorage.setItem('saves', saves);
    }
    //Method editLocalSave makes possible edit and delete some data of saves.
    editLocalSave() {

    }

    editLocal () {
      
      this.setState({mode: 'editlocal'});
    }

    newLocal () {
      this.setState({mode: 'newlocal'});
    }

    mainLocal () {
      this.setState({mode: 'main'});
    }

    toFirstMenu () {
    }
    
}