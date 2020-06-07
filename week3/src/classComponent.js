import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {                           
      x: "This is x from state",    
      y: "This is y from state"
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.x}</h1>
        <h2>{this.state.y}</h2>
      </div>
    );
  }
}
export default ClassComponent;