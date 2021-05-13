//DEPENDENCIES========
    //BUTTONS
    //FORM/INPUTS
        //name, phone, email, id
    //DIVS FOR HTML LISTS

//OBJECT CONSTRUCTOR FOR RESERVATIONS
function Res(name, phone, email, id) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.id = id;
}


//FUCNTIONS==========
//RES ARRAY
let resArray = []
    //CREATE RES OBJECT
        //FORM USER INPUT, INTO OBJECT PROPERTIES
function generateRes() {
    let newRes = new Res("formName", "formPhone", "formEmail", "formID");
    resArray.push(newRes);
}

    // FETCH DATA
        //
    
    //PLACE RES OBJECT INTO JSON

    //RENDER PAGE INFO

    //CHECK TABLE LIMIT (<5)

    //HANDLE OVERFLOW

    //EVENT LISTENERS