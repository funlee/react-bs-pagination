import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pagination from './page/Pagination';

class App extends Component {
  constructor(props) {
    super(props);
  }
  getStatus(current, size) {
    console.log('当前页码是：' + current + ' ,当前每页展示条数是：' + size)
  }

  render() {
    return <Pagination
      group={5} // 页码分组，显示7个页码，其余用省略号显示  - 不开放
      start={1} // 分组开始页码 - 不开放

      current={1} // 当前页码
      total={10} // 总页数
      sizeShow={true}
      sizeList={[10,20,30,40]} // 下拉列表条目
      size={10}
      numShow={true}
      getStatus={this.getStatus.bind(this)} // 获取当前的状态，包括当前页码和每页展示的数据数量
      />
  }
}
ReactDOM.render(<App />, document.getElementById('app'))
