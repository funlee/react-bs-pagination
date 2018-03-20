react-bs-pagination
=======================
一个利用 [React](https://reactjs.org/ 'react') 开发的分页组件，样式使用的 [bootstrap](https://v3.bootcss.com/ 'bootstrap')

![](https://raw.github.com/funlee/react-bs-pagination/master/demo/demo.png "react-bs-pagination")

在线预览：[react-bs-pagination](http://show.funlee.cn/react-bs-pagination/index.html 'react-bs-pagination')


Getting started
---------------
```bash
npm i -D react-bs-pagination

```

Demo && API
--------
```javascript

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pagination from 'react-bs-pagination';
import 'react-bs-pagination/lib/index.css';  // 组件的默认样式，可替换为自定义样式

class App extends Component {
  constructor(props) {
    super(props);
  }
  getStatus(current, size) {
    console.log('the current page number is' + current + ' ,the current one page size is：' + size)
  }
  render() {
    return <Pagination
      current={1} // 当前页码 默认 1
      total={10} // 总页数 默认 10
      sizeShow={true} // 是否展示 控制每页展示数据条数的组件 默认 true
      sizeList={[10,20,30,40]} // 下拉列表数组数值 默认 [10,20,30,40]
      size={10} // 初始化每页展示的数据条数 默认取值为 sizeList.indexOf(size) === -1 ? sizeList[0] : size
      numShow={true} // 是否展示 页码输入组件 默认 true
      getStatus={this.getStatus.bind(this)} // 获取当前的状态，包括当前页码 -- current 和 每页展示的数据数量 -- size
      />
  }
}
ReactDOM.render(<App />, document.getElementById('app'))

```
Other
-------
* 如果要自定义样式，可以不引入组件的样式文件，替换为自定义的 CSS 文件
* 必须在 React 环境下使用
