export default function calculate (gameRl) {
    let worldmap = {}
    worldmap.coordinates = []
    worldmap.endCoord = 20
    worldmap.startCoord = -1 * worldmap.endCoord
    worldmap.coordLength = worldmap.endCoord * 2 + 1 //'1' add zero coordinate 
    worldmap.blocksCount = Math.pow((worldmap.coordLength), 2) 
    worldmap.blockCoordsX = worldmap.startCoord
    worldmap.blockCoordsY = worldmap.startCoord 
    let coordRow = []
    for(let i = 1; i <= worldmap.blocksCount; i++) {
        let coord = {
            name: `${worldmap.blockCoordsX + ',' + worldmap.blockCoordsY}`
        }
        coordRow.push(coord)
        if(worldmap.blockCoordsX >= worldmap.endCoord){
            worldmap.blockCoordsY++
            worldmap.blockCoordsX = worldmap.startCoord
            worldmap.coordinates.push(coordRow)
            coordRow = []
        }
        else{
            worldmap.blockCoordsX++
        }
    } 
     gameRl.worldmap = worldmap
}



    






