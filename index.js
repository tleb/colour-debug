var util = require('util')

module.exports = function (data, showHidden, depth) {
    if (showHidden !== true) {
        showHidden = false
    }
    
    if (typeof depth !== 'number') {
        depth = null
    }
    
    console.log(util.inspect(data, {
        showHidden: false,
        depth: null,
        colors: true,
        customInspect: true,
    }))
}