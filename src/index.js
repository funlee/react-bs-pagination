import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pagination from './page/Pagination';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  getCurrentInfo(pageNow) {
    console.log('当前页码是：' + pageNow )
  }

  render() {
    return <Pagination currentPage={1} totalPage={500} pageCallbackFn={this.getCurrentInfo.bind(this)}/>
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
