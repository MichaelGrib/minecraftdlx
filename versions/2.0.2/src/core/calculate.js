export default function calculate (world) {
    world.coordinates = []
    world.radius = 40
    world.minusradius = -1 * world.radius
    world.coordLength = world.radius * 2 + 1 //'1' add zero coordinate 
    world.blocksCount = Math.pow((world.coordLength), 2) 
    world.blockCoordsX = world.minusradius
    world.blockCoordsY = world.minusradius 
    let coordRow = []
    for(let i = 1; i <= world.blocksCount; i++) {
        let coord = {
            x: world.blockCoordsX,
            y: world.blockCoordsY,
        }
        coordRow.push(coord)
        if(world.blockCoordsX >= world.radius){
            world.blockCoordsY++
            world.blockCoordsX = world.minusradius
            world.coordinates.push(coordRow)
            coordRow = []
        }
        else{
            world.blockCoordsX++
        }
    } 
    return world
}



    






