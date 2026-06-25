"use strict";
// Type Narrowing: Pata lago ki apka data hai kis type ka uske basis pe return karo message
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    //Here it is guaranteed that kind is string
    if (typeof kind === "string") {
        return `making chai of ${kind}`;
    }
    // guaranteed that kind is pakka a number
    return `Chai order no: ${kind}`;
}
//it can be a data type
function serverChai(msg) {
    //if msg is avaliable then
    if (msg) {
        return `Serving ${msg}`;
    }
    //if msg is not avaliable
    return `Serving default masala chai`;
}
//Exhaustive checks
function orderChai(size) {
    if (size === "small") {
        return `small cutting chai`;
    }
    if (size === "medium" || size === "large") {
        return "making extra tea";
    }
    return `chai order #${size}`;
}
//lets say we have same function name in different class, we have safety guard rails
class kulhadChai {
    serve() {
        return `serving Kulhad Chai`;
    }
}
class Cutting {
    serve() {
        return `serving Cutting Chai`;
    }
}
function serve(chai) {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" && obj !== null && typeof obj.type === "string");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} with sugar countity : ${item.sugar}`;
    }
    //if passed item as string
    return `Serving Chai ${item}`;
}
//Now Narrowing this stuff's
function MakeChai(order) {
    switch (order.type) {
        case "masala":
            return "MASALA CHAI";
        case "elachi":
            return "Elachi";
        case "ginger":
            return "Ginger";
    }
}
function brew(order) {
    //we can check weather the order has spicelevel as its property
    if ("spicelevel" in order) {
        //
    }
}
//in "any" we can keep any kind of type in it but here in "unknown", if you are trying to access or assign
// unknown is a top-level type that serves as a type-safe alternative to any. While both allow you to assign any value to a variable, unknown prevents you from performing any operations on that value (like calling methods or accessing properties) until you explicitly verify its type
/*
unknown vs. any

The primary difference is the level of safety:any: Essentially "turns off" type checking. You can call any method on it, even if it doesn't exist, which can lead to runtime crashes.unknown: Tells TypeScript, "I don't know what this is yet." It forces you to prove what the value is before you use it, preventing unexpected runtime errors.
*/
function isStringArray(arr) {
}
//# sourceMappingURL=TypeNarrowing.js.map