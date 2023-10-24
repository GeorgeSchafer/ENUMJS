const EENUM = require('./ExtEnum.cjs')

const colors = new EENUM({red: '#f00'})

// colors.addKeys([{blue: '#0f0'}, {green: '#00f'}])
colors.addKey({purple: '#ff0'})
colors.select('purple');

console.log('colors:', colors.valueOf())
