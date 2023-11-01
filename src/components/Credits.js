/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

/*
const Credits = (props) => {
  return (
    <div>
      <h1>Credits</h1>
      <br/>
      
      <Link to="/">Return to Home</Link>
    </div>
  );
}
*/

class Credits extends Component {
  constructor (props) {  // Create and initialize state
    super(props)
    this.state = {
      updatedCredits: this.props.credits,
      newDescription: '',
      newAmount: 0
    };
    //console.log(this.state.updatedCredits);
    //console.log(props);
  }

  handleChange = (e) => {
    //get the current form values
    this.setState({
      [e.target.name] : e.target.value
    })
    //console.log(this.state.newAmount);
    //console.log(this.state.newDescription);
  }

  handleSubmit = (e) => {
    e.preventDefault()

    //get the final form values
    this.setState({
      [e.target.name] : e.target.value
    })
    //console.log(this.state.newAmount);
    //console.log(this.state.newDescription);

    //pass the form values to function for adding new credit
    console.log(this.state.newAmount);  //newAmount is string
    this.props.addCredit(this.state);
  }

  //function for printing list of all credits
  creditsView = () => {
    //for each array in the credits array, print out money amount, description, and date
    return this.state.updatedCredits.map((credit) =>{
      return <h4>{credit[0]} {credit[1]} {credit[2]} <br/></h4>
    });
  }

  render() {
    return (
      <div>
        <h1>Credits</h1>
        <div id='creditsplace'> 
          {/*this.state.updatedCredits*/}
          {this.creditsView()}
        </div>
        

        <form onSubmit={this.handleSubmit}>
          <input type="text" name="newDescription" value={this.state.newDescription} onChange={this.handleChange}/>
          <input type="number" name="newAmount" value={this.state.newAmount} onChange={this.handleChange}/>
          <button type="submit">Add Credit</button>
        </form>

        <br/>
        <AccountBalance accountBalance={this.props.accountBalance}/>
        <hr/>
        <Link to="/">Return to Home</Link> 
    </div>
    );
  }

}

export default Credits;