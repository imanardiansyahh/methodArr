var whitelist = ['.css', '.js']


var event = [
    {
        file : 'css/core.css'
    },

    {
        file : 'js/app.js'
    },

    {
        file : 'index.html'
    }
]


var filtered = event.filter(event => {
    var ext = require('path').extname(event.file)
    return whitelist.indexOf(ext) > -1
})

console.log(filtered)