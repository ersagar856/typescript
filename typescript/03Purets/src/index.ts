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
    private readonly city:string = "Ghaziabad"
    constructor(public email:string,public name:string){
        this.email = email;
        this.name  = name
    }
}

const sagar = new User("sagar@gmail.com","Sagar")
// sagar.city = "najibabad"