// Test runner
const ENUM = require('./ENUM.cjs')

module.exports = () => {
    // tests here
    console.log('Test begins...')    
    console.log('ENUM class:', ENUM)

    const SIGN = new ENUM('positive')

    SIGN.setKey('negative')
    console.log(SIGN)

    SIGN.selectKey('negative')
    console.log(SIGN)

    console.log('Varying Variables...')

    console.log('Test complete. Have a tequila.')

}


