
export const ADD = 'ADD';
export const COMPLETE = 'COMPLETE';

///////////////////////////////////////////////////////////////////////////
// 3 . action을 생성해보자.
///////////////////////////////////////////////////////////////////////////
// action creator
export function addTodo(text) {
  return {
    type : ADD,
    text
  }
}

export function completeTodo(id) {
  return  {
    type : COMPLETE,
    id
  }
}