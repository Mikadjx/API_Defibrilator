

// Création de variable pour inclure la connexion au dossier et intégration de la librairie express (framework )

/*Le require('express') est une façon d’importer la librairie express et ses fonctions dans notre code. 
//La constante app est l’instanciation d’un objet Express, 
qui va contenir notre serveur ainsi que les méthodes dont nous aurons besoin pour le faire fonctionner.*/

const client = require('./connection.js')
const bodyParser = require('body-parser');
const express = require('express');
const app = express();







// Utilisation de la fonction pour écouter le serveur pg admin et renvoyer un message de connexion sur la console

app.listen(3000, ()=>{
    console.log("Sever is now listening at port 3000");
})

client.connect();

//Connexion à la BDD sur le localhost:3030 + requête pour afficher toute la table defibrilator

app.get('/', (req, res)=>{
    client.query("SELECT * FROM defibrilator", (err, result)=>{
        if(!err){
            res.send(result.rows);
            app.use(bodyParser.json());
        }
    });
    client.end;
})


// Afficher la table en selectionnant par l'ID 

app.get('/defibrilator/:id', (req, res)=>{
    client.query(`Select * from defibrilator where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
client.connect();



// Ajouter de nouveau défibrilateur

app.post('/defibrilator', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into defibrilator(serial, locationName, locationAdrr, state, electrodesExpiry) 
                       values(${defibrilator.id}, '${defibrilator.serial}', '${defibrilator.locationName}', '${defibrilator.locationAdrr}', '${defibrilator.state}', '${defibrilator.electrodesExpiry}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


// Mettre à jour les défibrilateurs

app.put('/defibrilator/:id', (req, res)=> {
    let defibrilator = req.body;
    let updateQuery = `update defibrilator
                       set serial= '${defibrilator.serial}',
                       locationName = '${defibrilator.locationName}',
                       locationadrr = '${defibrilator.locationAdrr}',
                       state = '${defibrilator.state}',
                       electrodesExpiry = '${defibrilator.electrodesExpiry}',
                       where id = ${defibrilator.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

//Supprimer donnée de la table défibrilateur 

app.delete('/defibrilator/:id', (req, res)=> {
    let insertQuery = `DELETE FROM defibrilator WHERE id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})




