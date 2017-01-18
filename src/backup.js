
// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       todolist : []
//     }
//   }

//   addItem() {
//     var inputValue = this.refs.inputbox.value;
    
//     if (inputValue ==="") return;

//     this.setState(prevState  => {
//       prevState.todolist.push(
//         {
//           id : increId++,
//           text : inputValue,
//           complete : false
//         }
//       )
//       return prevState;
//     });

//     this.refs.inputbox.value = "";
//   }

//   toggleComplete(id) {
//     console.log("id:",id);
//     console.log("state:",this.state);
//     this.setState(prevState =>
//           prevState.todolist
//           .filter(item => item.id ===id)
//           .map(item => item.complete = !item.complete)
//     );
//   }

//   render() {
//     //console.log(this.status.todolist);
//     //jsx문법임. 여기에 javascript그대로 넣어줄 수도 있음
//     return (
//       <div className="App">
//         <h1>TODO LIST</h1>
//         <input ref="inputbox" />
//         <button onClick={() => this.addItem()}>add</button>
//         <ul>
//           {
//             this.state.todolist.map((item, index) => {
//               return (<TodoItem key={index} 
//                         item={item} 
//               toggleComplete={this.toggleComplete.bind(this)} />)
//             })
//           }
//         </ul>
//       </div>
//     );
//   }
// }

// export default App;
