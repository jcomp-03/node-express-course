const express = require('express');
// create an instance of the express constructor, name it 'app'
const app = express();

const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
];

app.get('/users', function(req, res){
    res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
    })
})

app.get('/users/:id', function(req, res){
    console.log('req.params.id is: ', req.params.id);
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})


// now we can access methods used for making a server by
// by including their name after app
// start up the server locally on the designated port
app.listen(8000, function(){
    console.log('server is running');
})