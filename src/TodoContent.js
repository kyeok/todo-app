import React, { Component } from 'react';
class TodoContent extends Component {
  // state
  constructor(props){
    super(props);
  }

    render() {
        return(
            <div>
                <h1>TodoContent</h1>
                id : {this.props.params.id}
            </div>
        );
    }
}

export default TodoContent;