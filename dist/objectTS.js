"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {
    name: "vivek",
    age: 24,
    isEligible: true,
};
//type script always infer things
// {
//     name:string;
//     age:number;
//     isEligible:boolean
// }
//Decalring object type
let tea;
tea = {
    name: "Ginger tea",
    price: 24,
    isHot: true,
};
const adrakChai = {
    name: "Ginger Tea",
    price: 55,
    ingredents: ["ginger", "tea leaves", "sugar"],
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
//This works because bigCup has at least the properties required by Cup:
smallCup = bigCup;
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew = coffee;
const updateChai = (updates) => {
    console.log("updating Chai with", updates);
    /*
      Type Script internally transforms
      type Chai = {
       name:string,
       price:number,
       isHot:boolean
      }
  
      into
      ********
      type PartialChai = {
       name?: string
       price?: number
       isHot?: boolean
      }
      */
};
updateChai({ name: "lemon" });
updateChai({ price: 25 });
updateChai({});
function placeOrder(order) {
    console.log(order);
}
const userInfo = {
    userName: "vivek",
    password: "123"
};
// const publicProductDetails = Omit<Product, "shippingAddress"> //Error- 'Omit' only refers to a type, but is being used as a value here.
//# sourceMappingURL=objectTS.js.map