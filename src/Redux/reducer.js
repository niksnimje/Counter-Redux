
export const reducer=(action,state)=>{
    switch (action.type){
        case 'Increment':{
            return{counter:state.counter+action.payload}
        }
        case 'Decrement':{
            return{counter:state.counter-action.payload}
        }
        default: return state
    }
}