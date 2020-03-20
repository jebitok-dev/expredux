// import { createStore , combineReducers } from "redux";
// import uuid from 'uuid';

// //ADD EXPENSE.

// // const addExpense = (expense={}) => {
// //     return {
// //         type : "ADD_EXPENSE",
// //         expense : {
// //             id : uuid(),
// //             description : expense.description ? expense.description : "" ,
// //             note : expense.note ? expense.note : "",
// //             amount : expense.amount ? expense.amount : 0,
// //             createdAt : expense.createdAt ? expense.createdAt : 0
// //         }
// //     } 
// // }

// //addExpense destructuring
// const addExpense = (
//     {
//         description = "",
//         note = 0,
//         amount = 0,
//         createdAt = 0
//     } = {}
// ) => ({
//         type : 'ADD_EXPENSE',
//         expense : {
//             id : uuid(),
//             description,
//             note,
//             amount,
//             createdAt
//         }
// });

// //REMOVE EXPENSE
// const removeExpense = ({ id } = {}) => ({
//         type : "REMOVE_EXPENSE",
//         id 
// });

// //EDIT EXPENSE
// const editExpense = (id,updates) => ({
//         type : 'EDIT_EXPENSE',
//         id,
//         updates  
// });

// //SET_START_DATE action creator
// const setStartDate = (startDate) => ({ 
//         type : 'SET_START_DATE',
//         startDate
// });

// //SET_END_DATE 
// const setEndDate = (endDate) =>({ 
//         type : 'SET_END_DATE',
//         endDate
// })
// //Expenses reducer
// const expensesReducerDefaultState = [];
// const expensesReducer = (state = expensesReducerDefaultState , action) => {
//     switch (action.type){
//         case "ADD_EXPENSE": 
//             //return state.concat(action.expense) 
//            //return Object.assign({}, state, action.expense)
//            return [
//                ...state,
//                action.expense
//            ];
//               case 'REMOVE_EXPENSE':
//                    return state.filter(({ id }) => id !== action.id);
//                   case 'EDIT_EXPENSE':
//                    return state.map((expense) => {
//                     if (expense.id === action.id) {
//                      return {
//                       ...expense,
//                       ...action.updates
//                      };
//                     } else {
//                      return expense;
//                     };
//                    });
//                   default:
//                    return state;
//     };
// };
// //Filters Reducer
// const filtersReducerDefaultState = {
//     text: "",
//     sortBy : "date",
//     startDate : undefined,
//     endDate : undefined
// };

// const filtersReducer = (state = filtersReducerDefaultState, action) => {
//     switch (action.type){
//         case "SET_TEXT_FILTER":
//             return {
//                 ...state,
//                 text: action.text
//             };
//         case "SORT_BY_AMOUNT":
//             return {
//                 ...state,
//                 sortBy:"amount"
//             };
//         case "SORT_BY_DATE":
//                 return {
//                     ...state,
//                     sortBy : "date"
//                 }
//         case "SET_START_DATE":
//                 return {
//                     ...state,
//                     startDate : action.startDate
//                 };  
                
//         case "SET_END_DATE":
//             return {
//                 ...state,
//                 endDate : action.endDate
//             }  
//             default :      
//         return state;
//     }
// }

// //SET_TEXT_FILTER
// const setTextFilter = (text = "") => ({
//         type :'SET_TEXT_FILTER',
//         text
// });
 
// //SORT_BY_AMOUNT
// const sortByAmount = ()=>({
//         type : 'SORT_BY_AMOUNT'
// })

// //SORT_BY_DATE
// const sortByDate = () => ({
//         type:"SORT_BY_DATE"
// })

// //Functional programming methods with reducers
// //Get Visible expenses.
// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
//      return expenses.filter((expense) => {
//       const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
//       const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
//       const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    
//       return startDateMatch && endDateMatch && textMatch;
//      }).sort((a, b) => {
//       if (sortBy === 'date') {
//        return a.createdAt < b.createdAt ? 1 : -1;
//       } else if (sortBy === 'amount') {
//        return a.amount < b.amount ? 1 : -1;
//       }
//      });
//     };

// //Store creation
// const store = createStore (combineReducers({
//     expenses : expensesReducer,
//     filters : filtersReducer
// })
// );

// console.log(store.getState());

// //Checking  changes in the app. Listener
// store.subscribe(() => {
//      const state = store.getState();
//      const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//      console.log(visibleExpenses);
//     });

//     const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
//     const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));  

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('ffe'));
// //Dispatch of the action
// // const expenseOne = store.dispatch(addExpense({description:"Vacation",amount:500}));
// // const expenseTwo = store.dispatch(addExpense({description:'Coffee',amount:600}))
// // const expenseThree = store.dispatch(addExpense("vehicle"))
// // const expenseFour = store.dispatch(addExpense());
// // store.dispatch(removeExpense({id:expenseThree.expense.id}))
// // store.dispatch(editExpense(expenseTwo.expense.id,{description :"TEA"}))
// // store.dispatch(setTextFilter("sport"));
// // store.dispatch(sortByAmount())
// // store.dispatch(sortByDate())
// // store.dispatch(setStartDate(5000))
// // store.dispatch(setEndDate(10000))
// // store.dispatch(sortByAmount());
