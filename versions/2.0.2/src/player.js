export default function player (gameRl) {
    const PL = document.createElement('div')
    PL.classList.add('pl')

    PL.skin = document.createElement('div')
    PL.skin.classList.add('pl__skin')

    let skin = PL.skin
    skin.head = document.createElement('img')
    skin.head.src = './images/bhead.jpg'
    skin.head.classList.add('pl__head')
  
    skin.body = document.createElement('img')
    skin.body.src = './images/body.jpg'
    skin.body.classList.add('pl__body')
    
    skin.lhand = document.createElement('img')
    skin.lhand.src = './images/hand.jpg'
    skin.lhand.classList.add('pl__lhand')
    
    skin.rhand = document.createElement('img')
    skin.rhand.src = './images/hand.jpg'
    skin.rhand.classList.add('pl__rhand')
    
    skin.lfoot = document.createElement('img')
    skin.lfoot.src = './images/foot.jpg'
    skin.lfoot.classList.add('pl__lfoot')
    
    skin.rfoot = document.createElement('img')
    skin.rfoot.src = './images/foot.jpg'
    skin.rfoot.classList.add('pl__rfoot')
    
    PL.appendChild(skin); skin.appendChild(skin.head); skin.appendChild(skin.body); skin.appendChild(skin.lhand); skin.appendChild(skin.rhand); skin.appendChild(skin.lfoot); skin.appendChild(skin.rfoot);
    gameRl.PL = PL
}

   