// Test runner
const {ENUM, Genus} = require('./ENUM.cjs')

module.exports = () => {
    // tests here
    console.log('Test begins...')

    console.log('ENUM class:',ENUM)

    this.obj = { 'BINARY': true }
    console.log(`this.obj = {\n    ${Object.keys(this.obj)[0]}: ${Object.values(this.obj)[0]}\n}`)
    
    const enu = new ENUM( new Genus( {'scale': false} ) )
    const genusArray = [ new Genus( {'binary': true} ) ]
    enu.pushGeni( genusArray )

    const genusObj = [{'SCALE': true}, {'BINARY': false}, {'ANSWER': false}]

    const enu2 = new ENUM()
    enu2.pushGenusObj( genusObj )
    console.log('\nenu2 =', enu2)

    console.log('Varying Variables...')

    console.log('Test complete. Have a tequila.')

}


