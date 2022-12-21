

// Création de variable pour inclure la connexion au dossier et intégration de la librairie express (framework )

/*Le require('express') est une façon d’importer la librairie express et ses fonctions dans notre code. 
//La constante app est l’instanciation d’un objet Express, 
qui va contenir notre serveur ainsi que les méthodes dont nous aurons besoin pour le faire fonctionner.*/

const client = require('./connection.js')
const bodyParser = require("body-parser");
const express = require('express');
const app = express();







// Utilisation de la fonction pour écouter le serveur pg admin et renvoyer un message de connexion sur la console

app.listen(3000, ()=>{
    console.log("Sever is now listening at port 3000");
})

client.connect();

//Connexion 

app.get('/', (req, res)=>{
    client.query("SELECT * FROM defibrilator", (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})




