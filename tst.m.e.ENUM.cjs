// Test runner
const pathto = require('../../paths.cjs')
const { ENUM, Type } = require(pathto.ENUM)


class TSTenum {
    constructor(){
        // tests here
        console.log('Test begins...')

        this.obj = { 'BINARY': true }
        console.log(`this.obj = {\n    ${Object.keys(this.obj)[0]}: ${Object.values(this.obj)[0]}\n}`)
        
        const enu = new ENUM( new Type( {'SCALE': false} ) )
        const typeArray = [ new Type( {'BINARY': true} ) ]
        enu.pushTypes( typeArray )

        const typeObjs = [{'SCALE': true}, {'BINARY': false}, {'ANSWER': false}]

        const enu2 = new ENUM()
        enu2.pushTypeObjs( typeObjs )
        console.log('\nenu2 =', enu2)

        console.log('Varying Variables...')

        console.log('Test complete. Have a tequila.')

    }
}



module.exports = TSTenum
