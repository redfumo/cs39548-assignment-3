/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

/*
const Debits = (props) => {
  // Create the list of Debit items
  let debitsView = () => {
    const { debits } = props;
    return debits.map((debit) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
      let date = debit.date.slice(0,10);
      return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    });
  }
*/

class Debits extends Component {
  constructor (props) {  // Create and initialize state
    super(props)
    this.state = {
      updatedDebits: this.props.debits,
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
    e.preventDefault()  //prevent submitting default values

    //get the final form values
    this.setState({
      [e.target.name] : e.target.value
    })
    //console.log(this.state.newAmount);
    //console.log(this.state.newDescription);

    //pass the form values to function for adding new debit
    console.log(this.state.newAmount);  //newAmount is string
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
        <input type="text" name="newDescription" value={this.state.newDescription} onChange={this.handleChange}/>
        <input type="number" name="newAmount" value={this.state.newAmount} onChange={this.handleChange}/>
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