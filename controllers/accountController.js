const bodyParser = require('body-parser');
const express = require('express');
const {pool}  = require('../config/db');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


exports.getAllAccount = async (req, res) => {
    const query = 'SELECT * FROM account';
    pool.execute(query, function(err, result){
        if(err){
            res.send("error");
            throw err;
        } 
        console.log(result);
        res.send(result);
    });
}

exports.getAccountById = async (req, res) => {
    const query = `SELECT * FROM account WHERE accountId = '${req.params.accountId}'`;
    pool.execute(query, function(err, result){
        if(err){
            res.send("error");
            throw err;
        } 
        console.log(result);
        res.send(result);
    });
}


exports.addAccount = async (req, res, next) => {
    const query = `INSERT INTO account(username, password, email, name, accPhoneNumber, accountType) VALUES ('${req.body.username}', '${req.body.password}', '${req.body.email}', '${req.body.name}', '${req.body.accPhoneNumber}', '${req.body.accountType}')`;
    pool.execute(query, function(err, result){
        if(err){
            res.send("error");
            throw err;
        } 
        console.log("berhasil");
        res.send("berhasil");
    });
}

exports.deleteAccount = async (req, res) => {
    const query = `DELETE FROM account WHERE accountId = '${req.params.accountId}'`;
    pool.execute(query, function(err, result){
        if(err){
            res.send("error");
            throw err;
        } 
        console.log("berhasil");
        res.send("berhasil");
    });
}

exports.updateAccount = async (req, res) => {
    const query = `UPDATE account SET username = '${req.body.username}', password = '${req.body.password}', email = '${req.body.email}', name = '${req.body.name}', accPhoneNumber = '${req.body.accPhoneNumber}', accountType = '${req.body.accountType}' WHERE accountId = ${req.params.accountId}`;
    pool.execute(query, function(err, result){
        if(err){
            res.send("error");
            throw err;
        } 
        console.log("berhasil");
        res.send("berhasil");
    });
}


