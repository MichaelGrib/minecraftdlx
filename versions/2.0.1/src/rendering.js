export default function rendering (gameRl) {

    let coordinates = gameRl.worldmap.coordinates
    let coordLength = gameRl.worldmap.coordLength
    const wrap = document.getElementById('wrap')
    const gamescreen = document.getElementById('gamescreen')
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

    window.addEventListener('resize', () => {        
        wrap.style.top = `${(gameRl.worldmap.minusradius * tilelength) +  (gamescreen.getBoundingClientRect().height / 2)}px`
        wrap.style.left = `${(gameRl.worldmap.minusradius * tilelength) + (gamescreen.getBoundingClientRect().width / 2)}px`
    })

    function controls () {
        let moveTimeOut,
        lastEvent,
        x = 0,
        y = 0,
        speed = 100;
        window.gameRl.gameplay.controls = {
            KeyW: false,
            KeyA: false,
            KeyS: false,
            KeyD: false
        }

        function motion () {
            let ctr = window.gameRl.gameplay.controls;
            if (ctr.KeyA && ctr.KeyD) {
                    
            }
            else if (ctr.KeyA) {
                x += 7
            }
            else if (ctr.KeyD) {
                x -= 7
            }
            
            if (ctr.KeyW && ctr.KeyS) {
                
            }
            else if (ctr.KeyW) {
                y += 7
            }
            else if (ctr.KeyS) {
                y -= 7
            }

            wrap.style.transform = `translate(${x}px, ${y}px)`;
        } 

        let motiontime = setInterval( motion, speed)
        motiontime

        

        
    
    
        document.addEventListener('keydown', e => {
            e.preventDefault();
            let ctr = window.gameRl.gameplay.controls;
            if (lastEvent && lastEvent.code == e.code) return;
            lastEvent = e;
    
            switch (e.code) {
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
    
        });
    
        document.addEventListener('keyup', e => {
            e.preventDefault();
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
    
        });
    
    }
    
    controls ()
    
}


