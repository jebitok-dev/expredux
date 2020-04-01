import React from "react";
import { connect } from "react-redux"; //Higher order component.
import selectExpenses from "../selectors/expenses";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = (props) =>{
    return (
        <div>
            <h1>Expense List</h1>
            {props.expenses.map((expense) =>{
                return <ExpenseListItem 
                key ={expense.id}
                description = {expense.description}
                amount = {expense.amount}
                createdAt = {expense.createdAt} 
                />
            })}
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        expenses : selectExpenses(state.expenses,state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);