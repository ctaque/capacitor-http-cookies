const express = require('express');
const cookiesParser = require('cookie-parser');
const cors = require('cors')


const app = express();
app.use(cookiesParser());
app.use(cors({ origin: 'http://localhost', credentials: true }));
app.options('*', cors());

app.get('/getCookie' , function(req, res) { 
    const options = {
	maxAge: 1000 * 60 * 15,
        httpOnly: true,
    };
    res.cookie('auth', 'abcdef', options);
    console.log('sendCookies');
    res.send('sentCookies');
});

app.get('/sendCookie', function(req, res) {
	console.log(req.cookies.auth);
    res.send(JSON.stringify(req.cookies));
});

app.listen(5000);
