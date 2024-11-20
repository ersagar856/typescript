interface User {
    readonly dbId:number
    email : string,
    userId : number,
    googleId?:string,
    // stratTrail : () => string
    startTrail():string,
    getCoupon(couponname:string,value:number):number,
}

interface User {
    githubToken:string
}

interface Admin extends User {
    role : "admin" | "ta" | "learner",
}

const Sagar:User = {
    dbId:123,
    email: "Sagar@gmail.com",
    userId: 123,
    startTrail: () => {
       return "Trial started"
    },
    getCoupon:(name:"Sagar10",off:2378)=>{
        return 10
    },
    githubToken:"sadfddf"
}


Sagar.email = "sk@gmail.com"