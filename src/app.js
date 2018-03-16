import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import Pagination from './components/Pagination';

class App extends Component {
  getCurrentInfo(currentPage) {
    console.log(currentPage)
  }
  render() {
    playTitle()
    return (
      <Pagination pageCallbackFn={this.getCurrentInfo.bind(this,currentPage)}/>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

