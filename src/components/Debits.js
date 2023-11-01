/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Debits extends Component {
  constructor (props) {  // Create and initialize state
    super(props)
    this.state = {
      updatedDebits: this.props.debits,
      newDescription: '', //description of the current debit
      newAmount: 0  //amount of the current debit
    };
  }

  //called when the form values change
  handleChange = (e) => {
    //get the current form values
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  //called when the submit button is pressed
  handleSubmit = (e) => {
    e.preventDefault()  //prevent submitting default values

    //get the final form values
    this.setState({
      [e.target.name] : e.target.value
    })
    //pass the form values to function for adding new debit
    this.props.addDebit(this.state);
  }

  //function for printing list of all debits
  debitsView = () => {
    //for each array in the debits array, print out money amount, description, and date
    return this.state.updatedDebits.map((debit) =>{
      return <h4>{debit[0]} {debit[1]} {debit[2]} <br/></h4>
    });
  }

  // Render the list of Debit items and a form to input new Debit item
  render() {
    return (
      <div>
        <h1>Debits</h1>
        <div>
          {this.debitsView()}
        </div>
      

      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Description</label>
          <input type="text" name="newDescription" value={this.state.newDescription} onChange={this.handleChange}/>
        </div>
        <div>
          <label>Amount</label>
          <input type="number" name="newAmount" value={this.state.newAmount} onChange={this.handleChange}/>
        </div>
        <button type="submit">Add Debit</button>
      </form>
      <br/>
      <AccountBalance accountBalance={this.props.accountBalance}/>
      <hr/>
      <Link to="/">Return to Home</Link>
    </div>
    );
  }
}

export default Debits;