const bodyParser = require('body-parser');
const express = require('express');
const {pool}  = require('../config/db');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


exports.getAllOrder = async (req, res) => {
    const query = 'SELECT * FROM orderFood';
    pool.execute(query, function(err, result){
        if(err){
            res.send("error");
            throw err;
        } 
        console.log(result);
        res.send(result);
    });
}

exports.getOrderByOrderNumber = async (req, res) => {
    const query = `SELECT * FROM orderFood WHERE orderNumber = '${req.params.orderNumber}'`;
    pool.execute(query, function(err, result){
        if(err){
            res.send("error");
            throw err;
        } 
        console.log(result);
        res.send(result);
    });
}

// exports.getOrderByEachOrder = async (req, res) => {
//     const query = `SELECT * FROM orderFood WHERE accountId = '${req.params.accountId}' AND restaurantId = '${req.params.restaurantId}' AND orderNumber = '${req.params.orderNumber}'`;
//     pool.execute(query, function(err, result){
//         if(err){
//             res.send("error");
//             throw err;
//         } 
//         console.log(result);
//         res.send(result);
//     });
// }

exports.addOrder = async (req, res, next) => {
    const query = `INSERT INTO orderFood(orderNumber, accountId, orderType, restaurantId, orderMenu, price, quantity, orderDate) VALUES ('${req.body.orderNumber}', '${req.body.accountId}', '${req.body.orderType}', '${req.body.restaurantId}', '${req.body.orderMenu}', '${req.body.price}', '${req.body.quantity}', '${req.body.orderDate}')`;
    pool.execute(query, function(err, result){
        if(err){
            res.send("error");
            throw err;
        } 
        console.log("berhasil");
        res.send("berhasil");
    });
}





