function makeChai(type:string,cups:number){
    console.log(`Making ${cups} cups of ${type}`)
}

makeChai("ginger",2)

function getChaiPrice():number{
    return 25
}

function makeOrder(order:string){ // if we write output will be :string then it throws error for null
    if(!order){
        return null
    }
    return order
}

// :void -> exciplitly saying this function doesn't return anything

function logChai():void{
    console.log("Chai is ready")
}


//optional parameters

// function orderChai(type?:string){
    
// }
//or we can write in this way
function orderChai(type:string = "Masala"){

}


type OrderType = {
    type:string,
    sugar:number,
    size: "small"|"large"
}

function createChai(order:OrderType) : number{
    return 4
}