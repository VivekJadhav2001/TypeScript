"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaiFlavours = ["Masala", "Ginger"];
const chaiPrice = [25, 50];
const chaiRating = [4.5, 4.2, 3.5];
const allChai = [
    { name: "lemon", price: 15 },
    { name: "green Tea", price: 30 }
];
const cities = ["Hyderabad", "mumbai"];
// cities.push("vijaywada")
//2d Arrays
const table = [
    [1, 2, 3],
    [4, 5, 6]
];
//Tuples -A tuple is a typed array with a pre-defined length and types for each index. Tuples are great because they allow each element in the array to be a known type of value.
let chaiTuple = ["Masala", 20];
// chaiTuple = [20,"Masala"] Error- here the order matters [string, number]
let userInfo; //boolean is optional here
userInfo = ["vivek", 24];
userInfo = ["vivek", 24, true];
//Readonly Tuples
const location = [2.54, 62.89];
// location[0] = 55
//Defined Tuples
const chaiItems = ["lemon", 2];
//Enums -> restricts users choices (Very Usefull for constants.js)
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
const myCupSize = CupSize.MEDIUM; //here we get to choose only those values that are present inside Enum
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["FULLFILLED"] = 101] = "FULLFILLED";
    Status[Status["REJECTED"] = 102] = "REJECTED"; //Automatically - 102
})(Status || (Status = {}));
//enums are helpful for constants.js files
var ChaiType;
(function (ChaiType) {
    ChaiType["TYPE"] = "masala";
    ChaiType["SUGAR"] = "white"; //you can only have one type of value no Union ("white" | "brown")
})(ChaiType || (ChaiType = {}));
function makeTea(type) {
    console.log(type);
}
makeTea(ChaiType.TYPE); //we onl get ChaiType.TYPE and ChaiType.SUGAR, we cannot pass "masala"
//Not A Standard Practice
var RandomEnum;
(function (RandomEnum) {
    RandomEnum[RandomEnum["ID"] = 1] = "ID";
    RandomEnum["NAME"] = "VIVEK";
})(RandomEnum || (RandomEnum = {}));
//If you want a enum to never change and bee constant
var Sugar;
(function (Sugar) {
    Sugar[Sugar["LOW"] = 1] = "LOW";
    Sugar[Sugar["MEDIUM"] = 2] = "MEDIUM";
    Sugar[Sugar["THREE"] = 3] = "THREE";
})(Sugar || (Sugar = {}));
//unexpected Behaviour
const t = ["BMW", 10];
t.push("AUDI");
console.log(t);
//# sourceMappingURL=ArrayEnum.js.map