// let sql = "SELECT * FROM restaurant;";
const bodyParser = require('body-parser');
const express = require('express');
const {client}  = require('../server');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


// pool.execute(sql, function(err, result){
//     if(err) throw err;

//     console.log(result);
// });

const mysql = require("mysql2");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});

exports.getAllRestaurant = async (req, res) => {
    const query = 'SELECT * FROM restaurant';
    pool.execute(query, function(err, result){
        if(err){
            res.send("error");
            throw err;
        } 
        console.log(result);
        res.send(result);
    });
}


exports.addRestaurant = async (req, res, next) => {
    const query = `INSERT INTO restaurant(restaurantName, rating, address, resPhoneNumber) VALUES ('${req.body.restaurantName}', ${req.body.rating}, '${req.body.address}', '${req.body.resPhoneNumber}')`;
    pool.execute(query, function(err, result){
        if(err){
            res.send("error");
            throw err;
        } 
        console.log("berhasil");
        res.send("berhasil");
    });
}

exports.deleteRestaurant = async (req, res) => {
    const query = `DELETE FROM restaurant WHERE restaurantId = '${req.params.restaurantId}'`;
    pool.execute(query, function(err, result){
        if(err){
            res.send("error");
            throw err;
        } 
        console.log("berhasil");
        res.send("berhasil");
    });
}

exports.updateRestaurant = async (req, res) => {
    const query = `UPDATE restaurant SET restaurantName = '${req.body.restaurantName}', rating = ${req.body.rating}, address = '${req.body.address}', resPhoneNumber = '${req.body.resPhoneNumber}' WHERE restaurantId = ${req.params.restaurantId}`;
    pool.execute(query, function(err, result){
        if(err){
            res.send("error");
            throw err;
        } 
        console.log("berhasil");
        res.send("berhasil");
    });
}

