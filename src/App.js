import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {addTodo, completeTodo} from './Actions';
import TodoItem from './TodoItem';
import TodoContent from './TodoContent';
import {connect, Provider} from 'react-redux';


// var mockData = {
//   id : 0,
//   text : "React class",
//   complete : true
// }

// var increId = 1; //ES6

// class TodoItem extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     //var {item, toggleComplete} = this.props;
//     var item = this.props.item;
//     console.log(item);
//     return(<li style={{textDecoration : item.complete ? 'line-through' : 'none'}} 
//                 key={this.props.index} 
//                 onClick={() => this.props.toggleComplete(item.id)}>{item.text}</li>)
//   }
// }


class App extends Component {
  constructor(props){
    super(props);
  }
  addItem() {
    var inputValue = this.refs.inputbox.value;
    if(inputValue==="") return;
    // 로직 처리
    this.props.dispatch(addTodo(inputValue));

    this.refs.inputbox.value = "";
  }

  toggleComplete(id) {
      this.props.dispatch(completeTodo(id));
      // this.setState(prevState => {
      //     prevState.todolist
      //           .filter(item => item.id === id)
      //           .map(item => item.complete = !item.complete);

      //     return prevState;
      //   }
      // )
  }

  render() {
    console.log("this.props", this.props);
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <input ref="inputbox" />
        <button onClick={this.addItem.bind(this)}>add</button>
        <ul>
          {
            this.props.todos.map((item, index) => {
              return (  <TodoItem key={index} item={item} dispatch={this.props.dispatch} /> );
            })
          }
        </ul>
      </div>
    );
  }
}

// select 라는 함수  : 어플리케이션 상태(store 안에 있는 state)하고 컴포넌트(App)이 어떤 props가 필요한지를 연결시켜주는 함수
function select(state) {
  return {
    todos : state // component가 받을 props : store가 가진 state
  }
}

//props : 부모로부터 받은 속성값
//state : 해당 Component안의 범위에서만 데이터를 관리 함

// Provider : 공급 '컴포넌트 '
export default connect(select)(App); // 함수에요. 상태값/컴포넌트를 연결