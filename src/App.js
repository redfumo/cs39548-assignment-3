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

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 1234567.89,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    };
    console.log(this.state.creditList);
  }

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
  }

  componentDidMount() {
    console.log("test test");
    //then update credit list and debit list?
    //CreditArray.map
    //CreditArray.map((credit)) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
      //let date = credit.date.slice(0,10);
      //return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
    //}
    //console.log(CreditArray);

    //initialize the default credit list entries
    for (let i = 0; i < CreditArray.length; i++) {
      //console.log(CreditArray[i]);
      let d = CreditArray[i].date.slice(0,10); //get date from json file
      //console.log(date);
      let temp = [];  //create new array
      temp.push(CreditArray[i].amount); //add money amount to array
      temp.push(CreditArray[i].description);  //add description
      temp.push(d);  //add date
      this.state.creditList.push(temp); //push array to creditList
    }
    console.log(this.state.creditList);
    
  }

  //add credit entry to the creditList array
  addCredit = (newCredit) => {
    //console.log(newCredit);
    var date = new Date();  //get the current date
    //console.log(date);
    //console.log(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate());
    date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(); //format date
    //console.log(date);
    let temp = [];  //create new array
    temp.push(parseFloat(newCredit.newAmount).toFixed(2));  //add the new amount of money, rounds up 2 decimal places 
    temp.push(newCredit.newDescription);  //add the new description
    temp.push(date);  //add the current date
    this.state.creditList.push(temp); //add the new credit to the main list of credits
    //console.log(this.state.creditList);
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
    const DebitsComponent = () => (<Debits debits={this.state.debitList} />) 

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/bank-of-react-starter-code">
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