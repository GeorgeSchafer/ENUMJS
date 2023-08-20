// Test runner
const pathto = require('../../paths.cjs')
const { ENUM, Type } = require(pathto.ENUM)


class TSTenum {
    constructor(){
        // tests here
        console.log('Test begins...')

        this.obj = { 'BINARY': true }
        console.log(`this.obj = {
            ${Object.keys(this.obj)[0]}: ${Object.values(this.obj)[0]}
        }`)
        
        const enu = new ENUM( new Type( {'SCALE': false} ) )
        const typeArray = [
            new Type( {'BINARY': true} )
        ] 
        enu.pushTypes( typeArray )

        console.log('Varying Variables...')


        console.log(enu)

        console.log('Test complete. Have a tequila.')
    }
}



module.exports = TSTenum
