export default function calculate (gameRl) {
    let worldmap = {}
    worldmap.coordinates = []
    worldmap.radius = 20
    worldmap.minusradius = -1 * worldmap.radius
    worldmap.coordLength = worldmap.radius * 2 + 1 //'1' add zero coordinate 
    worldmap.blocksCount = Math.pow((worldmap.coordLength), 2) 
    worldmap.blockCoordsX = worldmap.minusradius
    worldmap.blockCoordsY = worldmap.minusradius 
    let coordRow = []
    for(let i = 1; i <= worldmap.blocksCount; i++) {
        let coord = {
            name: `${worldmap.blockCoordsX + ',' + worldmap.blockCoordsY}`
        }
        coordRow.push(coord)
        if(worldmap.blockCoordsX >= worldmap.radius){
            worldmap.blockCoordsY++
            worldmap.blockCoordsX = worldmap.minusradius
            worldmap.coordinates.push(coordRow)
            coordRow = []
        }
        else{
            worldmap.blockCoordsX++
        }
    } 
     gameRl.worldmap = worldmap
}



    






