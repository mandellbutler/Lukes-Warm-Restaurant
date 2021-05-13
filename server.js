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


        //READ - GET RESERVATION OBJECTS
        //UPDATE
        
//HTML ROUTES
    //GET, RES.SENDFILE TABLES
    //GET, RES.SENDFILE RESERVATIONS
app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/tables.html"));
});



app.get("/api/reservations", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/reservations.json"));
});

app.post("/api/reservations", (req, res) => {
    const newResObj = req.body;
    res.send(newResObj)
})

app.get("/api/waitlist", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/waitlist.json"));
});
//========read by id
app.get("/api/reservations/:id", (req, res) => {
    res.json(reservations[req.params.id]);
});

//DELETE
// //=======delete by id
app.delete("api/reservations/:id", (req, res) => {
    res.json(reservations[req.params.id]);
});

//===========
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.listen(PORT, () => console.log(`We chopping it up on PORT ${PORT}`));
// IT'S A SERVER!


