type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}
makeChai({ type: "normal", sugar: 2, strong: false });

type TeaRecipe = {
  water: number;
  milk: number;
};

class MasalaChai implements TeaRecipe {
  water: number = 5;
  milk: number = 4;
}

/*

will Through Error as we can't implement a class with a defined value catergory type, that why we use interface

type CupSize = "small" | "large"

class Chai implements CupSize{

}
*/

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "small";
}

//Whenever we write class avoid type and use interface

//Example 2

/*
A class can only implement an object type or intersection of object types with statically known members.

type Response = {ok:"true"} | {ok:"false"}

class myResponse implements Response{
    ok: "true" | "false" = "false"
}

*/

/*TYPES of type */
//Literal Types
type Tea = "malasa" | "ginger" | "lemon";

function orderChai(t: Tea) {
  console.log(t);
}

orderChai("ginger");

//intersection

//Case 1 : Here in cup you have to write every key present in types like tealeaves, masala
type BaseChai = { tealeaves: number };
type Extra = { masala: number };

type SpecialChai = BaseChai & Extra;

const cup: SpecialChai = {
  tealeaves: 5,
  masala: 5,
};

//Case 2 : what if we want to write any value with getting any error

type User = {
  username: string;
  age?: number; // you can pass it or just leave this field
};

const u1: User = {
  username: "vivek",
};
const u2: User = {
  username: "vivek",
  age: 25,
};

// console.log(u1,u2)

//Case 3 => we can make any value readonly with keyword "readonly"


type Config = {
    readonly appName : string,
    version : number
}

const cfg : Config = {
    appName:"AI Resume Builder",
    version : 1
}

// cfg.appName = "Connexa" //Error = "Cannot assign to 'appName' because it is a read-only property."

