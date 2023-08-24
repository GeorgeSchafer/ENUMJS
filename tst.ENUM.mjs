// Test runner
import { default as ENUM } from './ENUM.mjs'

function ENUMtst(){
    // tests here
    console.log('Test begins...')

    this.obj = { 'BINARY': true }
    console.log(`this.obj = {\n    ${Object.keys(this.obj)[0]}: ${Object.values(this.obj)[0]}\n}`)
    
    const enu = new ENUM( new Genus( {'SCALE': false} ) )
    const genusArray = [ new Genus( {'BINARY': true} ) ]
    enu.pushGeni( genusArray )

    const genusObjs = [{'SCALE': true}, {'BINARY': false}, {'ANSWER': false}]

    const enu2 = new ENUM()
    enu2.pushGenusObjs( genusObjs )
    console.log('\nenu2 =', enu2)

    console.log('Varying Variables...')

    console.log('Test complete. Have a tequila.')

}

export { ENUMtest as default }