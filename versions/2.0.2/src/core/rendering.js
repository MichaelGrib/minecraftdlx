

export default function rendering (gameRl, world) {
    
    
    let coordinates = world.coordinates
    let coordLength = world.coordLength

    const gamescreen = document.getElementById('gamescreen')
    const viewport = document.createElement('div')
    const wrap = document.createElement('div')
    viewport.id = 'viewport'
    wrap.id = 'wrap'
    gamescreen.appendChild(viewport)
    viewport.appendChild(wrap)
    gamescreen.appendChild(gameRl.PL)
    
    wrap.classList.add('wrap')
    wrap.style.gridTemplateRows = `repeat(${coordLength}, 64px)`
    wrap.style.gridTemplateColumns = `repeat(${coordLength}, 64px)`
    
    for (let i = 0; i < coordinates.length; i++) {
        coordinates[i].forEach((value)=>{
            let tile = document.createElement('img')
            tile.classList.add('tile')
            tile.src = "./resourсepack/" + gameRl.blocks.getTexture(value)
            wrap.appendChild(tile)
        })
    }

    let tilelength = 64

    

    function resizeViewport() {        
        wrap.style.top = `${(world.minusradius * tilelength) +  (gamescreen.getBoundingClientRect().height / 2)}px`
        wrap.style.left = `${(world.minusradius * tilelength) + (gamescreen.getBoundingClientRect().width / 2)}px`
    }

    
//===================================
//Controls
//===================================

    window.pause = false
    function pauseGame () {
        window.pause = !window.pause
        let menu = document.getElementById('gamemenu')
        menu.classList.toggle('ingamemenu__shell_active')
        for (let control in window.gameRl.gameplay.controls) {
            window.gameRl.gameplay.controls[control] = false
            console.log(window.gameRl.gameplay.controls)
        }
        
    }

    function controls () {
        let moveTimeOut,
        lastEvent,
        x = 0,
        y = 0,
        speed = 20;
        window.gameRl.gameplay.controls = {
            KeyW: false,
            KeyA: false,
            KeyS: false,
            KeyD: false
        }

        function motion () {
            if(window.pause) {return}
            let ctr = window.gameRl.gameplay.controls;
            if (ctr.KeyA || ctr.KeyD || ctr.KeyW || ctr.KeyS) { //animation
                window.gameRl.PL.skin.lfoot.classList.add('pl__foot_motion')
                window.gameRl.PL.skin.rfoot.classList.add('pl__foot_motion')
            }
            else{
                window.gameRl.PL.skin.lfoot.classList.remove('pl__foot_motion')
                window.gameRl.PL.skin.rfoot.classList.remove('pl__foot_motion')    
            }
            if (ctr.KeyA && ctr.KeyD) {
                    
            }
            else if (ctr.KeyA) {
                x += 2
            }
            else if (ctr.KeyD) {
                x -= 2
            }
            
            if (ctr.KeyW && ctr.KeyS) {
                
            }
            else if (ctr.KeyW) {
                y += 2
                window.gameRl.PL.skin.head.src = './images/bhead.jpg'
            }
            else if (ctr.KeyS) {
                y -= 2
                window.gameRl.PL.skin.head.src = './images/fhead.jpg'
            }

            wrap.style.transform = `translate(${x}px, ${y}px)`;
        } 

        let motiontime = setInterval( motion, speed)
        motiontime
    
        
        
        function keyDown (e){
            let ctr = window.gameRl.gameplay.controls;
            lastEvent = e;
            
            switch (e.code) {
                
                case 'Escape':
                    pauseGame();
                    break;

                case 'KeyD':
                    ctr.KeyD = true;
                    break;
                case 'KeyW':
                    ctr.KeyW = true;
                    break;
                case 'KeyA':
                    ctr.KeyA = true;
                    break;
                case 'KeyS':
                    ctr.KeyS = true;
                    break;
                
            }
    
        };
    
        function keyUp (e) {      
            let ctr = window.gameRl.gameplay.controls;
            lastEvent = null;
    
            switch (e.code) {
                case 'KeyD':
                    ctr.KeyD = false;
                    break;
                case 'KeyW':
                    ctr.KeyW = false;
                    break;
                case 'KeyA':
                    ctr.KeyA = false;
                    break;
                case 'KeyS':
                    ctr.KeyS = false;
                    break;
            }
    
        };       

        if(window.firstLaunch) {
            window.addEventListener('resize', resizeViewport)

            document.addEventListener('keydown', keyDown)

            document.addEventListener('keyup', keyUp) 
            
            window.addEventListener('blur', pauseGame)
            window.firstLaunch = false
        }
        

    }
    
    controls ()
}  



