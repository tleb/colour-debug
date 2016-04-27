var util = require('util')

module.exports = function (data, showHidden) {
    if (showHidden !== true) {
        showHidden = false
    }
    
    console.log(util.inspect(data, {
        showHidden: false,
        depth: null,
        colors: true,
        customInspect: true,
    }))
}