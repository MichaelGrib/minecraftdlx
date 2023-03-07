

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
        coordinates[i].forEach((block)=>{
            let tile = document.createElement('img')
            tile.classList.add('tile')
            tile.src = "./resourсepack/" + gameRl.blockMethods.getTexture(block)
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
        }
        
    }

    function controls () {
        let moveTimeOut,
        lastEvent,
        x = 0,
        y = 0,
        tps = 15,
        movementValue = 2,
        movementMultiplier,
        walk = 1,
        run = 2
        
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
            if (ctr.shiftKey) {movementMultiplier = run} 
            else {movementMultiplier = walk}
            if (ctr.KeyA && ctr.KeyD) {}
            else if (ctr.KeyA) {
                x += movementValue * movementMultiplier
            }
            else if (ctr.KeyD) {
                x -= movementValue * movementMultiplier
            }
            
            if (ctr.KeyW && ctr.KeyS) {}
            else if (ctr.KeyW) {
                y += movementValue * movementMultiplier
                window.gameRl.PL.skin.head.src = './images/bhead.jpg'
            }
            else if (ctr.KeyS) {
                y -= movementValue * movementMultiplier
                window.gameRl.PL.skin.head.src = './images/fhead.jpg'
            }

            wrap.style.transform = `translate(${x}px, ${y}px)`;
        } 

        let motiontime = setInterval( motion, tps)
        motiontime
    
        
        
        function keyDown (e){
            let ctr = window.gameRl.gameplay.controls;
            lastEvent = e;
            if (e.shiftKey) {ctr.shiftKey = true} 
            
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
            if (!e.shiftKey) {ctr.shiftKey = false} 
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



