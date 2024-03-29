export default function player (gameRl) {
    const PL = document.createElement('div')
    PL.classList.add('pl')
    const imgpath = './images'

    PL.skin = document.createElement('div')
    PL.skin.classList.add('pl__skin')

    let skin = PL.skin
    skin.head = document.createElement('img')
    skin.head.src = `${imgpath}/bhead.jpg`
    skin.head.classList.add('pl__head')
  
    skin.body = document.createElement('img')
    skin.body.src = `${imgpath}/body.jpg`
    skin.body.classList.add('pl__body')
    
    skin.lhand = document.createElement('img')
    skin.lhand.src = `${imgpath}/hand.jpg`
    skin.lhand.classList.add('pl__lhand')
    
    skin.rhand = document.createElement('img')
    skin.rhand.src = `${imgpath}/hand.jpg`
    skin.rhand.classList.add('pl__rhand')
    
    skin.lfoot = document.createElement('img')
    skin.lfoot.src = `${imgpath}/foot.jpg`
    skin.lfoot.classList.add('pl__lfoot')
    
    skin.rfoot = document.createElement('img')
    skin.rfoot.src = `${imgpath}/foot.jpg`
    skin.rfoot.classList.add('pl__rfoot')
    
    PL.appendChild(skin); skin.appendChild(skin.head); skin.appendChild(skin.body); skin.appendChild(skin.lhand); skin.appendChild(skin.rhand); skin.appendChild(skin.lfoot); skin.appendChild(skin.rfoot);
    gameRl.PL = PL
}

   