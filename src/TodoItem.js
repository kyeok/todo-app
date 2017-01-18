import React, { Component } from 'react';
import { completeTodo } from './Actions';
import {Link} from 'react-router';
// export class TodoItem extends Component { // dumb component  우직한 컴포넌트
//   render() {
//     var item = this.props.item;
//     return(<li style={{textDecoration : item.complete ? 'line-through' : 'none'}}
//              onClick={()=>this.props.toggleComplete(item.id)}>{item.text}</li>)
//   }
// }


export default class TodoItem extends Component { // dumb component  우직한 컴포넌트
  // state
  constructor(props){
    super(props);
  }

  toggleComplete(id) {
        console.log(this.props.item);      
        this.props.dispatch(completeTodo(id));
  }

  render() {
    var item = this.props.item;
    var url = "todoContent/" + item.id;
    return(<li style={{textDecoration : item.complete ? 'line-through' : 'none'}}
             ><Link to={url}>{item.text}</Link><button onClick={()=>this.toggleComplete(item.id)}>click</button>
             </li>)
  }
}