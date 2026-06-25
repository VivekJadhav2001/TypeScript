const chaiFlavours :string[] = ["Masala","Ginger"]
const chaiPrice: number[] = [25,50]

const chaiRating : Array<number> = [4.5,4.2,3.5]


//Array of Objects
type Chai = {
    name:string,
    price:number
}
const allChai:Chai[] = [
    {name:"lemon",price:15},
    {name:"green Tea",price:30}
]

const cities : readonly string[] = ["Hyderabad","mumbai"]
// cities.push("vijaywada")


//2d Arrays
const table : number[][] = [
    [1,2,3],
    [4,5,6]
]

//Tuples -A tuple is a typed array with a pre-defined length and types for each index. Tuples are great because they allow each element in the array to be a known type of value.

let chaiTuple : [string,number] = ["Masala",20]
// chaiTuple = [20,"Masala"] Error- here the order matters [string, number]

let userInfo : [string,number,boolean?] //boolean is optional here

userInfo = ["vivek",24]
userInfo = ["vivek",24,true]

//Readonly Tuples
const location : readonly number[] = [2.54,62.89]

// location[0] = 55

//Defined Tuples
const chaiItems : [name:string,cups:number] = ["lemon",2]






//Enums -> restricts users choices (Very Usefull for constants.js)
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const myCupSize = CupSize.MEDIUM //here we get to choose only those values that are present inside Enum


enum Status {
    PENDING = 100,
    FULLFILLED, // Automatically - 101
    REJECTED    //Automatically - 102
}


//enums are helpful for constants.js files

enum ChaiType{
    TYPE= "masala",
    SUGAR = "white" //you can only have one type of value no Union ("white" | "brown")
}

type SugarType = "white" | "brown"

// enum NewChaiType {
//     TYPE = "ginger",
//     SUGAR = SugarType          //We can't Do like this here we have to specifically create a interface
// }


interface NewChaiType{
    TYPE:"ginger",
    SUGAR:SugarType
}


function makeTea(type:ChaiType){
    console.log(type)
}
makeTea(ChaiType.TYPE) //we onl get ChaiType.TYPE and ChaiType.SUGAR, we cannot pass "masala"

//Not A Standard Practice

enum RandomEnum {
    ID = 1,
    NAME = "VIVEK"
}


//If you want a enum to never change and bee constant

const enum Sugar {
    LOW = 1,
    MEDIUM = 2,
    THREE = 3
}


//unexpected Behaviour
const t : [string,number]=["BMW",10]
t.push("AUDI")

console.log(t) // ["BMW", 10, "AUDI"]