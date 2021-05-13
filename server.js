const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express()
const PORT = process.env.PORT || 3800;

// sets up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//API ROUTES
    //CRUD :)
        //CREATE - POST RESERVATIONS
            //FS
app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/tables.html"));
});

app.get('/reservations', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/reservations.html"));
});

        //READ - GET RESERVATION OBJECTS
        //UPDATE
        //DELETE
//HTML ROUTES
    //GET, RES.SENDFILE TABLES
    //GET, RES.SENDFILE RESERVATIONS

app.get('/', function (req, res) {
    res.send('hello world')
})


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.listen(PORT, () => console.log(`We chopping it up on PORT ${PORT}`));
// IT'S A SERVER!


