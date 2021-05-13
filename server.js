const express = require('express');
const path = require('path');

const app = express()
const PORT = process.env.PORT || 3800;

app.get('/', function (req, res) {
    res.send('hello world')
})


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(PORT, () => console.log(`We chopping it up on PORT ${PORT}`));
// IT'S A SERVER!

//API ROUTES
    //CRUD :)
        //CREATE - POST RESERVATIONS
            //FS
        //READ - GET RESERVATION OBJECTS
        //UPDATE
        //DELETE
//HTML ROUTES
    //GET, RES.SENDFILE TABLES
    //GET, RES.SENDFILE RESERVATIONS
