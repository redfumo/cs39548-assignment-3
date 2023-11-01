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
  /*
  testForm() {
    const [state, setState] = React.useState({
      desc: "",
      money: ""
    });
  }
  */

  handleChange = (e) => {
    //const newCredit = {...this.state.updatedCredits};
    //updatedCredits.push(e.target.value);
    //this.setState({updatedCredits: newCredit})
    //const name = e.target.name;
    //const value = e.target.value;
    //setInputs(values => ({...values, [name]: value}))
    //const value = e.target.value;
    //this.setState({
    //  ...this.state,
    //  [e.target.name]: value
    //});
    //const temp = {...this.state.updatedCredits};

    //const temp = {...this.state.newCreditInfo};
    //console.log(this.state.newCreditInfo);
    //const newArray = [];
    //temp.amount = e.target.value;
    //temp.description = e.target.value;
    //this.setState({newCreditInfo: temp});
    //temp.push();

    //get the current form values
    this.setState({
      [e.target.name] : e.target.value
    })

    //console.log(this.state.newAmount);
    //console.log(this.state.newDescription);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //this.props.addCredit(this.state.updatedCredits);
    //console.log(inputs);
    //console.log(this.setState);

    //this.props.mockLogIn(this.state.user)  // Update state in the top-level component (App.js)
    //this.setState({redirect: true})  // Update state to trigger Redirect
    
    //get the final form values
    this.setState({
      [e.target.name] : e.target.value
    })
    //console.log(this.state.newAmount);
    //console.log(this.state.newDescription);

    //pass the form values to function for adding new credit
    this.props.addCredit(this.state);
  }

  creditsView = () => {
    //console.log("test");
    //console.log(this.state.updatedCredits);
    //console.log(this.state.updatedCredits.length);
    //var list = document.createElement("div");  //create credit list to be put into body
    //for (let i = 0; i < this.state.updatedCredits.length; i++) {
      //let currentCredit = this.state.updatedCredits[i]; //get new credit
      //console.log(currentCredit);
      //const printCredit = <h3>{currentCredit[0]} {currentCredit[1]} {currentCredit[2]} <br/></h3> //turn array element into text
      //ReactDOM.render(printCredit, document.getElementById('creditsplace'));
      //list.appendChild(printCredit);  //add current credit to list
    //}
    //return (list);
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