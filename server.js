const express = require('express');
// create an instance of the express constructor, name it 'app'
const app = express();

// now we can access methods used for making a server by
// by including their name after app
// start up the server locally on the designated port
app.listen(8000, function(){
    console.log('server is running');
})