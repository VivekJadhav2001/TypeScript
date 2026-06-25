"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeChai(type, cups) {
    console.log(`Making ${cups} cups of ${type}`);
}
makeChai("ginger", 2);
function getChaiPrice() {
    return 25;
}
function makeOrder(order) {
    if (!order) {
        return null;
    }
    return order;
}
// :void -> exciplitly saying this function doesn't return anything
function logChai() {
    console.log("Chai is ready");
}
//optional parameters
// function orderChai(type?:string){
// }
//or we can write in this way
function orderChai(type = "Masala") {
}
function createChai(order) {
    return 4;
}
//# sourceMappingURL=functionTS.js.map