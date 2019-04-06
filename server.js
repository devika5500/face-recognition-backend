const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');
const register = require('./controller/register');
const signin = require('./controller/signin');
const profile = require('./controller/profile');
const image = require('./controller/image');
const app = express();
app.use(bodyparser.json());
app.use(cors());


const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'devikajadhav',
        password : '',
        database : 'face-recognition'
    }
});





app.get('/', (req, res)=> { res.send(database.users) });

app.post('/signin',(req,res)=>{signin.handleSignin(req,res,db,bcrypt)});

app.post('/register',(req,res)=>{register.handleRegister(req,res,db,bcrypt)});



app.get('/profile/:id',(req,res)=>{profile.handleProfile(req,res,db)});

app.put('/image',(req,res)=>{ image.handleImage(req,res,db)});
app.post('/imageurl',(req,res)=>{ image.handleApiCall(req,res)});

app.listen(3002,()=>{
    console.log("running on port 3002")
});

