import React from "react"
import ExpenseList from "./ExpenseList"
import ExpenseListFilters from './ExpenseListFilters'
const ExpenseDashboardPage = ()=> (
    <div>
        This is my dashboard board
        <ExpenseList />
        <ExpenseListFilters />
    </div>
)
export default ExpenseDashboardPage;