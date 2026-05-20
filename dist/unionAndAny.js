"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Union (|)
let subs = "1M";
subs = 45;
subs = "Billion";
//here we are mentioning there can be only three states of this apiResquestStatus
let apiRequestStatus = "pending";
//ERROR: Type '"vivek"' is not assignable to type '"pending" | "success" | "error"'.
// apiRequestStatus = "vivek"
let airLineSeat = "middle";
const orders = ["12", "20", "28", "42"];
let currentOrder;
for (let order of orders) {
    if (order === "28") {
        currentOrder = order;
        break;
    }
}
currentOrder = 28;
console.log(currentOrder);
//# sourceMappingURL=unionAndAny.js.map