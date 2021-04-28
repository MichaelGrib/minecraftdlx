    
    export default function blocks (gameRl){
        class BlockType {
            constructor(name){
                this.name = name;
            }   
        }
        let blocksArr = []
        
        const grass = new BlockType('grass')
        const stone = new BlockType('stone')
        blocksArr.push(grass, stone)
        blocksArr.getTexture = function getTexture (value) {
            let srcOfTextureBlock = value.blocktype + '.jpg'
            return srcOfTextureBlock
        }
        gameRl.blocks = blocksArr
    }
    