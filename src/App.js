/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';
import CreditArray from './credits.json';
import DebitArray from './debits.json';
import AccountBalance from './components/AccountBalance';

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 0.00,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    };
  }

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
  }

  //called when component mounts
  componentDidMount() {
    //initialize the default credit list entries
    for (let i = 0; i < CreditArray.length; i++) {
      let d = CreditArray[i].date.slice(0,10); //get date from json file

      let temp = [];  //create new array
      temp.push(CreditArray[i].amount); //add money amount to array
      temp.push(CreditArray[i].description);  //add description
      temp.push(d);  //add date

      this.state.creditList.push(temp); //push array to creditList
      this.state.accountBalance += CreditArray[i].amount; //add money to account balance
    }
    
    //initialize the default debit list entries
    for (let i = 0; i < DebitArray.length; i++) {
      let d = DebitArray[i].date.slice(0,10); //get date from json file

      let temp = [];  //create new array
      temp.push(parseFloat(DebitArray[i].amount).toFixed(2));  //add money amount to array (with two decimal places)
      temp.push(DebitArray[i].description);  //add description
      temp.push(d);  //add date

      this.state.debitList.push(temp);  //push array to debitList
      this.state.accountBalance -= DebitArray[i].amount;  //subtract money from account balance
    }
  }

  //add credit entry to the creditList array, add credits to the account balance
  addCredit = (newCredit) => {
    var date = new Date();  //get the current date
    date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(); //format date

    let temp = [];  //create new array
    temp.push(parseFloat(newCredit.newAmount).toFixed(2));  //add the new amount of money, rounds up 2 decimal places 
    temp.push(newCredit.newDescription);  //add the new description
    temp.push(date);  //add the current date

    this.state.creditList.push(temp); //add the new credit to the main list of credits
    this.state.accountBalance += parseFloat(newCredit.newAmount); //add credit to the total account balance

    this.setState({});  //update the account balance to the new balance
  }

  //add debit entry to the debitList array, subtract debits from account balance
  addDebit = (newDebit) => {
    var date = new Date();  //get the current date
    date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(); //format date

    let temp = [];  //create new array
    temp.push(parseFloat(newDebit.newAmount).toFixed(2));  //add the new amount of money, rounds up 2 decimal places 
    temp.push(newDebit.newDescription);  //add the new description
    temp.push(date);  //add the current date

    this.state.debitList.push(temp);  //add the new debit to the main list of debits
    this.state.accountBalance -= parseFloat(newDebit.newAmount);  //subtract debit from the total account balance

    this.setState({});  //update the account balance to the new balance
  }

  // Create Routes and React elements to be rendered using React components
  render() {   
    // Create React elements and pass input props to components
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />)
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    )
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditsComponent = () => (<Credits credits={this.state.creditList} accountBalance={this.state.accountBalance} addCredit={this.addCredit} />) 
    const DebitsComponent = () => (<Debits debits={this.state.debitList} accountBalance={this.state.accountBalance} addDebit={this.addDebit}/>) 

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/cs39548-assignment-3">
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;