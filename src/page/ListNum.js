/*
 * @Author: funlee
 * @Email: i@funlee.cn
 * @Date: 2018-03-19 17:29:35
 * @Description: 控制每页展示的数据条数
 */
import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {this.getPageList()}
        </ul>
      </nav>
    )
  }
}
export default Pagination

