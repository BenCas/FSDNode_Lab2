var express = require('express'); 
var app = express();

app.post('/API/user', passport.authenticate('login', {
    successRedirect : '/home', 
    failureRedirect : '/user', 
    failureFlash : true
}));

app.get('/user', function(request, response) {
        response.render('API/user');
});