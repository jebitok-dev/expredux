import { createStore } from "redux";

const store = createStore((state = {count : 0} , action) =>{
    switch (action.type){
        case "INCREMENT":
        
            return {
                count : state.count + action.incrementBy
            }
        case "DECREMENT" :
           
                return {
                    count : state.count - action.decrementBy
                }
        case "RESET":
                return {
                    count : 0
                }
        case "SET":
                return {
                        count : action.count
                    }
            default :
        return state;
    }   
})
 
//Action creator  - functions that return action objects
const incrementCount = (payload = {}) => {
    return {
        type : 'INCREMENT',
        incrementBy:typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
    }
}
const decrementCount = (payload = {}) => {
    return {
        type : "DECREMENT",
        decrementBy : typeof payload.decrementBy === "number" ? payload.decrementBy : 1
    }
}

const resetCount = () =>{
    return {
        type : 'RESET',
    }
}

const setCount = (payload) => {
    return {
        type:'SET',
        count : payload.count
    }
}
store.subscribe((() => {
    console.log(store.getState());
}));


store.dispatch(incrementCount({ incrementBy : 5}));
store.dispatch(incrementCount())   
 
store.dispatch(resetCount())

store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy : 10}))

store.dispatch(setCount({count : 150}));
