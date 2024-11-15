const User = {
    name:"sagar",
    email:"sagar@gmail.com",
    isActive:true
}

function createUser({name:string,isPaid:boolean}){}
let newUser = {name:"Sagar",isPaid:false,email:"sagar@gmail.com"}


createUser(newUser)

function createCourse():{name:string,price:number}{
    return {name:"reactjs",price:399}
}


type User = {
    name: string,
    email:string,
    isActive:boolean
}

function createUser1(user:User):User{
   return {name:"",email:"",isActive:true}
}

createUser1({name:"",email:"",isActive:true})

export {}