"use strict";
// class User {
//     email:string;
//     name:string;
//     private readonly city:string = "Ghaziabad"
//     constructor(email:string,name:string){
//         this.email = email;
//         this.name  = name
//     }
// }
// const sagar = new User("sagar@gmail.com","Sagar")
// // sagar.city = "najibabad"
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Ghaziabad";
    }
}
const sagar = new User("sagar@gmail.com", "Sagar");
// sagar.city = "najibabad"
