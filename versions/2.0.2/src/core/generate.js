
export default function generate (world) {
    let selectRow = []
    let compareRow = []
    world.coordinates.forEach( (y) => {

        y.forEach((x) => {
            let blockForGeneration = ['grass', 'stone']
            let chance = -0.40
            if (compareRow[x] == 'stone' || compareRow[x-1] == 'stone' || compareRow[x+1] == 'stone') {
                chance = 0.4
                
            }
            if ((x-1).blocktype == 'stone') {
                if(chance === 0.4){
                    chance = 0.49 
                }
                else {
                    chance = 0.4
                }
            }
            x.blocktype = blockForGeneration[Math.round(Math.random() + chance)]
            
            selectRow.push(x.blocktype)
        });
        compareRow = selectRow
        selectRow = []
    })
    return world
}
