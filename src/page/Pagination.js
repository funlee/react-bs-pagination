import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class Pagination extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groupCount: 5, //页码分组，显示7个页码，其余用省略号显示
      startPage: 1,  //分组开始页码
      currentPage: this.props.currentPage || 1
    }
  }
  getPageList() {
    const { totalPage = 10 } = this.props;
    const { currentPage, groupCount, startPage } = this.state;
    let pages = []
    // 上一页
    pages.push(
      <li
        className={currentPage === 1 ? "disabled" : null}
        onClick={this.prePageHandeler.bind(this)}
        key={0}
      >
        <a href="javascript:;" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
    )
    if (totalPage <= groupCount) {
      // 总页码小于等于10时，全部显示出来
      for (let i = 1; i <= totalPage; i++) {
        pages.push(
          <li
            key={i}
            onClick={this.pageClick.bind(this, i)}
            className={currentPage === i ? "active" : null}
          >
            <a href="javascript:;">{i}</a>
          </li>
        )
      }
    } else {
      // 总页码大于10时，部分显示
      // 第一页
      pages.push(
        <li
          className={currentPage === 1 ? "active" : null}
          key={1}
          onClick={this.pageClick.bind(this, 1)}
        >
        <a href="javascript:;">1</a>
        </li>
      )

      let pageLength = 0;
      if (groupCount + startPage > totalPage) {
        pageLength = totalPage;
      } else {
        pageLength = groupCount + startPage;
      }
      // 前面省略号(当当前页码比分组的页码大时显示省略号)
      if (currentPage >= groupCount) {
        pages.push(
          <li
          className="disabled"
          key={-1}
          >
            <a href="javascript:;">···</a>
          </li>
        )
      }
      // 非第一页和最后一页显示
      for (let i = startPage; i < pageLength; i++) {
        if (i <= totalPage - 1 && i > 1) {
          pages.push(
            <li
              className={currentPage === i ? "active" : null}
              key={i}
              onClick={this.pageClick.bind(this, i)}
            >
              <a href="javascript:;">{i}</a>
            </li>
          )
        }
      }
      // 后面省略号
      if (totalPage - startPage >= groupCount + 1) {
        pages.push(
          <li
            className="disabled"
            key={-2}
          >
            <a href="javascript:;">···</a>
          </li>
        )
      }
      // 最后一页
      pages.push(
        <li
          className={currentPage === totalPage ? "active" : null}
          key={totalPage}
          onClick={this.pageClick.bind(this, totalPage)}
        >
          <a href="javascript:;">{totalPage}</a>
        </li>
      )
    }
    // 下一页
    pages.push(
      <li
        className={currentPage === totalPage ? "disabled" : null}
        onClick={this.nextPageHandeler.bind(this)}
        key={totalPage + 1}
      >
        <a href="javascript:;" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    )
    return pages;
  }
  // 页码点击
  pageClick(currentPage) {
    const { groupCount } = this.state
    // 当 当前页码 大于 分组的页码 时，使 当前页 前面 显示 两个页码
    if (currentPage >= groupCount) {
      this.setState({
        startPage: currentPage - 2,
      })
    }
    if (currentPage < groupCount) {
      this.setState({
        startPage: 1,
      })
    }
    // 第一页时重新设置分组的起始页
    if (currentPage === 1) {
      this.setState({
        startPage: 1,
      })
    }
    this.setState({
      currentPage
    })
    // 将当前页码返回父组件
    if (this.props.pageCallbackFn && typeof this.props.pageCallbackFn == 'function') {
      this.props.pageCallbackFn(currentPage)
    }
  }

  // 上一页事件
  prePageHandeler() {
    let { currentPage } = this.state
    if (--currentPage === 0) {
      return false
    }
    this.pageClick(currentPage)
  }

  // 下一页事件
  nextPageHandeler() {
    let { currentPage, totalPage } = this.state
    // const {totalPage} = this.props.pageConfig;
    if (++currentPage > totalPage) {
      return false
    }
    this.pageClick(currentPage)
  }
  render() {
    return(
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {this.getPageList()}
        </ul>
      </nav>
    )
  }
}
export default Pagination
