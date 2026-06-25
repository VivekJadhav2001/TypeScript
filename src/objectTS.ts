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

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger tea",
  price: 24,
  isHot: true,
};

//How to Declare Alias Object
type Tea = {
  name: string;
  price: number;
  ingredents: string[];
};

const adrakChai: Tea = {
  name: "Ginger Tea",
  price: 55,
  ingredents: ["ginger", "tea leaves", "sugar"],
};

//TypeScript's structural typing (also called duck typing)
type Cup = {
  size: string;
};

let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };

//This works because bigCup has at least the properties required by Cup:
smallCup = bigCup;
// Why isn't this an error?
//ANS=> TypeScript checks whether the source type is a superset of the target type.

type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee;

//Type Seperation

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  name: string;
  items: Item[];
  address: Address;
};

//PARTIAL
type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
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

//REQUIRED
type ChaiOrder = {
    name?:"string",
    quantity?:number
}

function placeOrder(order:Required<ChaiOrder>){
    console.log(order)
}

//We have to Provide all the properties here
// placeOrder({}) //Argument of type '{}' is not assignable to parameter of type 'Required<ChaiOrder>'.  Type '{}' is missing the following properties from type 'Required<ChaiOrder>': name, quantity


//PICK - Pick<T, K> creates a new type by selecting only specific properties (K) from an existing type (T).

type User = {
    userName:string,
    password:string,
    number:number
}
//Pick lets you "pick" only the properties you need from a type.
type BasicUserInfo = Pick<User,"userName" | "password">;

const userInfo:BasicUserInfo = {
    userName:"vivek",
    password:"123"
}

//OMIT - Omit<T, K> creates a new type by removing specific properties (K) from an existing type (T).

type Product = {
    price:number;
    shippingAddress:string,
    country:string;
}

// const publicProductDetails = Omit<Product, "shippingAddress"> //Error- 'Omit' only refers to a type, but is being used as a value here.

