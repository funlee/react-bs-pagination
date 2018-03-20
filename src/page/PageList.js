import React, { Component } from 'react';

export default class PageList extends Component {
  getPageList() {
    const { total, group, current, start } = this.props;

    let pages = []
    // 上一页
    pages.push(
      <li
        className={ current === 1 ? "disabled" : null }
        onClick={ this.prePageHandeler.bind(this) }
        key={ 0 }
      >
        <a href="javascript:;" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
    )
    if (total <= group) {
      // 总页码小于等于 group 时，全部显示出来
      for (let i = 1; i <= total; i++) {
        pages.push(
          <li
            key={ i }
            onClick={ this.pageClick.bind(this, i) }
            className={current === i ? "active" : null }
          >
            <a href="javascript:;">{ i }</a>
          </li>
        )
      }
    } else {
      // 总页码大于 group 时，部分显示
      // 第一页
      pages.push(
        <li
          className={current === 1 ? "active" : null }
          key={ 1 }
          onClick={ this.pageClick.bind(this, 1) }
        >
          <a href="javascript:;">1</a>
        </li>
      )

      let pageLength = 0;
      if (group + start > total) {
        pageLength = total;
      } else {
        pageLength = group + start;
      }
      // 前面省略号(当 当前页码比分组的页码大时显示省略号)
      if (current >= group) {
        pages.push(
          <li
            className="disabled"
            key={ -1 }
          >
            <a href="javascript:;">···</a>
          </li>
        )
      }
      // 非第一页和最后一页显示
      for (let i = start; i < pageLength; i++) {
        if (i <= total - 1 && i > 1) {
          pages.push(
            <li
              className={ current === i ? "active" : null }
              key={ i }
              onClick={ this.pageClick.bind(this, i) }
            >
              <a href="javascript:;">{ i }</a>
            </li>
          )
        }
      }
      // 后面省略号
      if (total - start >= group + 1) {
        pages.push(
          <li
            className="disabled"
            key={ -2 }
          >
            <a href="javascript:;">···</a>
          </li>
        )
      }
      // 最后一页
      pages.push(
        <li
          className={ current === total ? "active" : null}
          key={ total }
          onClick={ this.pageClick.bind(this, total) }
        >
          <a href="javascript:;">{ total }</a>
        </li>
      )
    }
    // 下一页
    pages.push(
      <li
        className={ current === total ? "disabled" : null }
        onClick={ this.nextPageHandeler.bind(this) }
        key={ total + 1 }
      >
        <a href="javascript:;" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    )
    return pages;
  }
  // 页码点击
  pageClick(current) {
    const { group, start, size } = this.props
    let newStart = start
    // 当 当前页码 大于 分组的页码 时，使 当前页 前面 显示 两个页码
    if (current >= group) {
      newStart = current - 2
    }
    if (current < group) {
      newStart = 1
    }
    this.props.listStatus(current, size, newStart)
  }

  // 上一页事件
  prePageHandeler() {
    let { current } = this.props
    if (--current === 0) {
      return false
    }
    this.pageClick(current)
  }

  // 下一页事件
  nextPageHandeler() {
    let { current } = this.props;
    const { total } = this.props;
    if (++current > total) {
      return false
    }
    this.pageClick(current)
  }
  render() {
    return (
      <nav
        aria-label="Page navigation"
        className="page-list"
      >
        <ul className="pagination">
          { this.getPageList() }
        </ul>
      </nav>
    )
  }
}
