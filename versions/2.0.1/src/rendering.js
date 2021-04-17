export default function rendering (gameRl) {
    const wrap = document.getElementById('wrap')
    let coordLength = gameRl.worldmap.coordLength
    wrap.classList.add('wrap')
    wrap.style.gridTemplateRows = `repeat(${coordLength}, 64px)`
    wrap.style.gridTemplateColumns = `repeat(${coordLength}, 64px)`
    let coordinates = gameRl.worldmap.coordinates
    for (let i = 0; i < coordinates.length; i++) {
        coordinates[i].forEach((value)=>{
            let tile = document.createElement('img')
            tile.classList.add('tile')
            tile.src = "./resourсepack/" + gameRl.blocks.getTexture(value)
            wrap.appendChild(tile)
        })
    }
}