import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import logo from './logo.svg';
//import './App.css';
import { createStore } from 'redux'; // store 생성을 위해
import { addTodo, completeTodo, ADD, COMPLETE } from './Actions';
import { todoReducer } from './Reducers';
import { TodoItem } from './TodoItem';
import TodoContent from './TodoContent';
import App from './App';
import { Router, Route, hashHistory, Link, IndexRoute, Redirect } from 'react-router';
// store > reducer(로직) >  store > view > action > store >
// 1. reducer 생성  : 로직을 처리하는 함수

// reducer/*
// Components/*
// Actions/*

// action
// { type : "ADD",
//      ,
//       id : 1 ,
//       text : "text",
//       complete : true
//   }
// }

///////////////////////////////////////////////////////////////////////////
// 2 . Store 생성. 리듀서에 맞는 State를 만들어야 한다.
///////////////////////////////////////////////////////////////////////////
var store = createStore(todoReducer);

///////////////////////////////////////////////////////////////////////////

import {connect, Provider} from 'react-redux';
// component = connect (매핑을 이렇게 할꺼야) (이 컴포넌트를)
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/todoContent/:id" component={TodoContent} />
    </Router>
  </Provider>
  ,document.getElementById('root')
);
