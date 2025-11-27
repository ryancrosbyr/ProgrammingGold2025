// TASK: Edit this code to correctly set up prototype inheritence. 
let person = {
    firstname: "Ryan",
    lastname: "Crosby",
    age: 31,
    giveinfo: function(){ 
        x = "This person is: " + this.firstname + this.lastname + " they are " + this.age + " years old"; 
        return x; 
    },
    calculateDob: function(){
        currentDate = new Date(); 
        var DoB = currentDate.getFullYear() - this.age; 
        return DoB
    }

}

let personTwo = {
    firstname: "Bob",
    lastname: "Smith",
    giveinfo: function(){ 
        x = "This person is: " + this.firstname + this.lastname + " they are " + this.age + "years old"; 
        return x; 
    },
    calculateDob: () => {
        currentDate = new Date(); 
        Dob = currentDate.getFullYear() - this.age; 
        return DoB
    }

}