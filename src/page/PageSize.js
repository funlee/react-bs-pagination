import React, { Component } from 'react';

class PageSize extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      size: this.props.size
    }
  }
  getList() {
    const { sizeList } = this.props
    return sizeList.map((d, i) => (
      <li key={`${i}`} onClick={this.selectPageSize.bind(this,d)}>
        <a href="javascript:;">
        {d}条/页
        </a>
      </li>
    ))
  }
  selectPageSize(size) {
    // 将当前展示的数据条数（每页）返回父组件
    const { current, start } = this.props
    if (size != this.state.size) {
      this.setState({
        size,
        open: false
      }, this.props.sizeStatus(current, size, start))
    }
  }
  toggleSizeList() {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    const { open, size } = this.state
    if(this.props.show) {
      return (
        <div className={open ? "btn-group open" : "btn-group"}>
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
            onClick={this.toggleSizeList.bind(this)}
          >
            {size}条/页
            <span className="caret" />
          </button>
          <ul className="dropdown-menu">
            {this.getList()}
          </ul>
        </div>
      )
    } else {
      return null
    }
  }
}
export default PageSize
