// Test runner
import { default as ENUME } from './ENUM.export.js'
const ENUMEx = requires('./ENUM.module.exports.js')

const methods = [ENUME, ENUMEx]

function test(exportMethod){
    // tests here
}

methods.forEach((method) => {
    method.test();
})

