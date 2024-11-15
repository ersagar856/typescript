function addTwo(num:number):number{
    return num+2
}

function getUpper(val:string):string{
    return val.toUpperCase()
}

function signUpUser(name:string,email:string,password:string,isPaid:boolean){}

let loginUser = (name:string,email:string,isPaid:boolean=false) =>{}

loginUser("sagar","s@c")

signUpUser("Sagar","sagar@gmail.com","sagar123",false)

addTwo(2);

getUpper("Sagar")


// function getValue(myVal: number):boolean{
//     if(myVal>5){
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s:string):string=>{
    return ""
}

const heros = ["thors","spiderman",'ironman'];
// const heros = [1,2,3];

heros.map((hero):string => {
    return `hero is ${hero}`
})

function consoleError(errmsg:string):void{
    console.log(errmsg)
}

function handleError(){

}

export {}