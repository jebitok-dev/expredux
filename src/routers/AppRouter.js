import React from "react"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
const AppRouter = () => (
    <BrowserRouter>
<Header />
   <Switch>
        <Route path = "/" component = {ExpenseDashboardPage}exact= {true}/>
        <Route path = "/create" component = {AddExpensePage}/>
        <Route path = "/edit/:id" component ={EditExpensePage}/>
        <Route path = "/help" component = {HelpPage}/>
        <Route component = {NotFoundPage}/>
   </Switch>
</BrowserRouter>
)
export default AppRouter;