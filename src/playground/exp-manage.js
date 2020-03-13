import { createStore , combineReducers } from "redux";
import uuid from "uuid";

//ADD EXPENSE.

const addExpense = (expense) => {
    return {
        type : "ADD_EXPENSE",
        expense : {
            id : uuid(),
            description : expense.description ? expense.description : "" ,
            note : expense.note ? expense.note : "",
            amount : expense.amount ? expense.amount : 0,
            createdAt : expense.createdAt ? expense.createdAt : 0
        }
    } 
}
//Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState , action) => {
    switch (action.type){
        case "ADD_EXPENSE": 
            return state.concat(action.expense) 
           //return Object.assign({}, state, action.expense)
        //    return [
        //        ...state,
        //        action.expense
        //    ]
        default :
        return state;
    }
}
//Filters Reducer
const filtersReducerDefaultState = {
    text: "",
    sortBy : "date",
    startDate : undefined,
    endDate : undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type){
        default :
        return state;
    }
}

//Store creation
const store = createStore (combineReducers({
    expenses : expensesReducer,
    filters : filtersReducer
}));

console.log(store.getState());

//Checking  changes in the app.
store.subscribe (() => {
    console.log(store.getState());
})

//Dispatch of the action
const expenseOne = store.dispatch(addExpense({description:"Vacation",amount:500}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee',amount:600}))
const expenseThree = store.dispatch(addExpense("vehicle"))