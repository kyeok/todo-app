import {ADD, COMPLETE} from './Actions';

var increId = 1; // ES6 ?
var mockData = {
  id : 1,
  text : "todo",
  complete : true
}

export function todoReducer(state=[], action){ // 1. reducer 생성
  switch (action.type) {
    case ADD:{
        return [...state, {
            id : increId++,
            text : action.text,
            complete : false
        }];
    }

    case COMPLETE: {
        return state.map(function(item){
          if (item.id === action.id) {
              item.complete = !item.complete;
          }
          return item;
        });
        // console.log('action.id',action.id);
        // state => {
        //     state.filter(item => item.id === action.id)
        //           .map(item => {
        //             console.log('TEST');
        //           item.complete = !item.complete});
        // }
        return state;
    }
    
    default:
        return state;
  }
}

