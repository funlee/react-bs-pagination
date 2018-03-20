import React, { Component } from 'react';

class PageNum extends Component {
  constructor(props) {
    super(props)
    const { current } = this.props
    this.state = {
      num: current
    }
  }
  handleChange(e) {
    this.setState({
      num: e.target.value
    })
  }
  handleKeyUp(e) {
    if(e.keyCode != 13) {
      return false
    }
    const { total, current, start, group, size } = this.props
    const page = parseInt(this.state.num, 10)
    let newStart = start

    if(!page || page < 0 || page > total) {
      alert('输入不合法！！')
      this.setState({
        num: current
      })
      return false
    } else if(page === current) {
      return false
    }

    // 确定新的 start 和  current（page）
    if(page < group ) {
      newStart = 1
    }
    if(page > group && page < total) {
      newStart = page - 2
    }
    this.props.numStatus(page, size, newStart) // current,size,start
  }
  render() {
    if (this.props.show) {
      return (
        <input
          type="text"
          className="form-control"
          value={this.state.num}
          onChange={this.handleChange.bind(this)}
          onKeyUp={this.handleKeyUp.bind(this)}
        />
      )
    } else {
      return null
    }
  }
}
export default PageNum
