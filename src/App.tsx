import React from 'react';
import LoginPage from "./pages/LoginPage";
import axios from 'axios';

class App extends React.Component {
  logIn = () => {
    axios.get(`http://localhost:8001`)
      .then((response: any) => {
        console.log(response);
      })
  };

  render() {
    return <LoginPage handlerLogin={this.logIn}/>;
  }
}

export default App;
