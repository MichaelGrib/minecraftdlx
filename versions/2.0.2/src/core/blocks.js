    
export default function blocks (gameRl){
    class BlockType {
        constructor(name, luck){
            this.name = name;
            this.luck = luck; //It have to number between 0.01 and 0.49 
        }   
        
    }    
    const nativeBlocks = []

    const grass = new BlockType('grass', 0.10),
          stone = new BlockType('stone', 0.04),
     stonygrass = new BlockType('stonygrass', 0.10),
           sand = new BlockType('sand', 0.10),
          water = new BlockType('water', 0.30)





    nativeBlocks.push(
        ...[grass, stone, stonygrass, sand, water]
    )
        
    gameRl.blocks = nativeBlocks
    gameRl.blockMethods = {
        getTexture (block) {
            let textureSrc = block.blocktype + '.jpg'
            return textureSrc
        },
        findBlock (name) {
            const foundBlock = window.gameRl.blocks.findIndex(block => {
                return block.name === name
            })
            return foundBlock
        }
    }
}