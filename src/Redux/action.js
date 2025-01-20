import { DECREMENT, INCREMENT } from "./actionType"

export const IncrementFunc=()=>{
    return {type:INCREMENT,paylaod:1}
}

export const DecrementFunc=()=>{
    return {type:DECREMENT,paylaod:1}
    
}