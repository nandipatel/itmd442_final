// requiring the different modules to use below
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');


const app = express();

// specifying path of the env file
dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT

// morgan allows logging the request
app.use(morgan('tiny'));

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

// setting view engine --> using ejs template
app.set("view engine", "ejs")

//loading the components (css & js)
//not sure which will load  --> will test after
app.use('/css', express.static(path.resolve(__dirname, "components/css")))
app.use('css/style.css', express.static(path.resolve(__dirname, "components/css")))
app.use('/js', express.static(path.resolve(__dirname, "components/js")))

// GETTING PAGES:
// index page
app.get('/', (req, res)=>{
    res.render('index');
})
// add_user page
app.get('/add_user', (req, res)=>{
    res.render('add_user');
})
// updating user
app.get('/update_user', (req, res)=>{
    res.render('update_user');
})

app.listen(PORT, ()=> { console.log(`Server's running on http://localhost:${PORT}`)});