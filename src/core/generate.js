
export default function generate (world) { 

    const textures = window.gameRl.blocks.map(block => {
        return block.name
    }) 
    let chance = -0.45
    let nearY = [-1,  0,  1, -1, 1, -1, 0, 1]
    let nearX = [-1, -1, -1,  0, 0,  1, 1, 1]
    

    //Make land and sea
    world.coordinates.forEach( (blockRow) => {
        blockRow.forEach((block) => {
            let waterAndGround = ['grass', 'water']
            let result = waterAndGround[Math.round(Math.random() + chance)]
            block.blocktype = result
        });    
    })
    //Set dots that will spreading blocks around itself
    world.coordinates.forEach( (blockRow) => {
        blockRow.forEach((block) => {
            let c = Math.round(Math.random())
            if (c) {
                block.blocktype = textures[Math.round(Math.random() * (textures.length - 1) + chance)]
            }
        });
        
    })
    //Check nearest blocks, expand biome
    
    //1 expand biomes
    
    world.coordinates.forEach( (yArr, yArrI) => {
        yArr.forEach((xArr, xArrI) => {
            

            
            for(let i = 1; i <= nearX.length; i++){

                //check is it into borders or not
                if (world.coordinates[ yArrI + nearY[i] ]) {

                    if (world.coordinates[ yArrI + nearY[i] ][ xArrI + nearX[i] ]) {
                        
                        let thatOne = world.coordinates[ yArrI + nearY[i] ] [ xArrI + nearX[i] ]
                        let thatOneType = window.gameRl.blockMethods.findBlock(thatOne.blocktype)
                        console.log(thatOneType)
                        let blockChance = window.gameRl.blocks[2].luck
                        
                        let chanceSet = Math.round(Math.random() + blockChance)
                        if (chanceSet) {
                            world.coordinates[yArrI][xArrI].blocktype = thatOne.blocktype
                        }
                    }
                    
                }
                

            }


            
        })

    })
    //2 expand biomes
    world.coordinates.forEach( (yArr, yArrI) => {
        yArr.forEach((xArr, xArrI) => {
            

            
            for(let i = 1; i <= nearX.length; i++){

                //check is it into borders or not
                if (world.coordinates[ yArrI + nearY[i] ]) {

                    if (world.coordinates[ yArrI + nearY[i] ][ xArrI + nearX[i] ]) {
                        
                        let thatOne = world.coordinates[ yArrI + nearY[i] ] [ xArrI + nearX[i] ]
                        let thatOneType = window.gameRl.blockMethods.findBlock(thatOne.blocktype)
                        console.log(thatOneType)
                        let blockChance = window.gameRl.blocks[2].luck
                        
                        let chanceSet = Math.round(Math.random() + blockChance)
                        if (chanceSet) {
                            world.coordinates[yArrI][xArrI].blocktype = thatOne.blocktype
                        }
                    }
                    
                }
                

            }


            
        })

    })

    //3 expand biomes
    world.coordinates.forEach( (yArr, yArrI) => {
        yArr.forEach((xArr, xArrI) => {
            

            
            for(let i = 1; i <= nearX.length; i++){

                //check is it into borders or not
                if (world.coordinates[ yArrI + nearY[i] ]) {

                    if (world.coordinates[ yArrI + nearY[i] ][ xArrI + nearX[i] ]) {
                        
                        let thatOne = world.coordinates[ yArrI + nearY[i] ] [ xArrI + nearX[i] ]
                        let thatOneType = window.gameRl.blockMethods.findBlock(thatOne.blocktype)
                        console.log(thatOneType)
                        let blockChance = window.gameRl.blocks[2].luck
                        
                        let chanceSet = Math.round(Math.random() + blockChance)
                        if (chanceSet) {
                            world.coordinates[yArrI][xArrI].blocktype = thatOne.blocktype
                        }
                    }
                    
                }
                

            }


            
        })

    })
    return world
}
