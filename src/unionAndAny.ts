//Union (|)
let subs : number | string = "1M"

subs = 45
subs = "Billion"


//here we are mentioning there can be only three states of this apiResquestStatus
let apiRequestStatus : "pending" | "success" | "error" = "pending"

//ERROR: Type '"vivek"' is not assignable to type '"pending" | "success" | "error"'.
// apiRequestStatus = "vivek"


let airLineSeat: "aisle" | "window" | "middle" = "middle"


const orders = ["12", "20", "28", "42"]

// let currentOrder; //ANY (we have to avoid)
// let currentOrder:string //Error: Type 'number' is not assignable to type 'string'
let currentOrder:string | undefined ;


for(let order of orders){
    if(order === "28"){
        currentOrder = order
        break
    }

    currentOrder = "28"

}

console.log(currentOrder)
