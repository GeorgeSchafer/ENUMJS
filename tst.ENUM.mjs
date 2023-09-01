// Test runner
import { default as ENUM } from './ENUM.mjs'

function ENUMtest(){
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

export { ENUMtest as default }