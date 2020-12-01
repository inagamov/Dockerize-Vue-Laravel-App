module.exports = {
    // options...
    devServer: {
        // Solves problems like "Invalid Host header" and other
        disableHostCheck: true,

        // Allow all headers for your app
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },

        // If you have troubles with VHR (Vue Hot Reload)
        watchOptions: {
            poll: true
        },
    } 
}