import uuid from "uuid";

//ADD EXPENSE
//addExpense destructuring
export const addExpense = (
    {
        description = "",
        note = 0,
        amount = 0,
        createdAt = 0
    } = {}
) => ({
        type : 'ADD_EXPENSE',
        expense : {
            id : uuid(),
            description,
            note,
            amount,
            createdAt
        }
});

//REMOVE EXPENSE
export const removeExpense = ({ id } = {}) => ({
        type : "REMOVE_EXPENSE",
        id 
});

//EDIT EXPENSE
export const editExpense = (id,updates) => ({
        type : 'EDIT_EXPENSE',
        id,
        updates  
});