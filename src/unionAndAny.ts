//Union (|)
let subs : number | string = "1M"

subs = 45
subs = "Billion"


//here we are mentioning there can be only three states of this apiResquestStatus
let apiRequestStatus : "pending" | "success" | "error" = "pending"

//ERROR: Type '"vivek"' is not assignable to type '"pending" | "success" | "error"'.
// apiRequestStatus = "vivek"


let airLineSeat: "aisle" | "window" | "middle" = "middle"

