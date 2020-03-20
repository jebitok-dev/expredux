import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configStore from './store/configStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configStore();

store.dispatch(addExpense ({ description : "Water Bill"}));
store.dispatch(addExpense({ description : "Gas Bill"}));
store.dispatch(setTextFilter( "gas"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
    



ReactDOM.render(<AppRouter/>, document.getElementById('app'));
