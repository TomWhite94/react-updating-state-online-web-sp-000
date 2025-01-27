import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue',
    };
  }
 
  handleClick = () => {
    this.setState(previousState => {
        return {
        hasBeenClicked: !previousState.hasBeenClicked
      }})
      
  };
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>{this.state.hasBeenClicked ? "ON" : "OFF"}</button>
      </div>
    );
  }
}
 
export default ClickityClick;
 

