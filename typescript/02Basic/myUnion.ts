let score : number | string = 33

score = "55"

type User = {
    name: string
    id  : number
}

type Admin = {
    username : string
    id       : number
}

let sagar: User | Admin = {name : "Sagar" , id : 213}

sagar = {username:"sg",id:123}

function getDbId(id:number|string){
    // console.log(`DB id is : ${id}`);
    if(typeof id==="string"){
        id.toLowerCase();
    }

}

getDbId(2);


// Array 

const data:number[]=[1, 2, 3, 4, 5];

const data2:string[] = ["1", "2", "3"]

const data3:(string | number)[] = ["1","2","3",3]


let seatAllowment:"aisle" | "middle" | "window";

seatAllowment = "aisle";
// seatAllowment = "crew";
export{}