// Test runner
import { default as ENUM } from './ENUM.mjs'

function ENUMtest(){
    // tests here
    console.log('Test begins...')

    this.obj = { 'BINARY': true }
    console.log(`this.obj = {\n    ${Object.keys(this.obj)[0]}: ${Object.values(this.obj)[0]}\n}`)
    
    const enu = new ENUM( new Genus( {'scale': false} ) )
    const genusArray = [ new Genus( {'binary': true} ) ]
    enu.pushGeni( genusArray )

    const genusObjs = [{'scale': true}, {'binary': false}, {'answer': false}]

    const enu2 = new ENUM()
    enu2.pushGenusObjs( genusObjs )
    console.log('\nenu2 =', enu2)

    console.log('Varying Variables...')

    console.log('Test complete. Have a tequila.')

}

export { ENUMtest as default }