import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //Higher order component
import AppRouter from './routers/AppRouter';
import configStore from './store/configStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configStore();

store.dispatch(addExpense ({ description : "Water Bill", amount: 9500, createdAt : 15000}));
store.dispatch(addExpense({ description : "Gas Bill", amount : 6000, createdAt : 27000}));
store.dispatch(addExpense({ description : "Rent", amount : 35700, createdAt : 500}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
    
const jsx = (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));
