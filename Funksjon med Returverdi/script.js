let login = function (password){
    if (password ==="test123") {
        return "Successfully logged in";

    }   else {
        return "Password incorrect, please try again";
    }  
};

console.log(login("test123"));