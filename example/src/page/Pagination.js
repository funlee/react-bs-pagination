import React,{ Component } from 'react';
import './bootstrap.css'
import './pagination.css'

import PageList from './PageList';
import PageSize from './pageSize';
import PageNum from './pageNum';

class Pagination extends Component {
  constructor(props) {
    super(props)
    const { current = 1, size = 10, sizeList = [10, 20, 30, 40], group, sizeShow = true} = this.props
    let start = 1
    if(current < group || current - 2 <= 0) {
      start = 1
    } else {
      start = current - 2
    }
    let targetSize = sizeList.indexOf(size) === -1 ? sizeList[0] : size
    if(!sizeShow) {
      targetSize = null
    }

    this.state = {
      size: targetSize,
      sizeList,
      current,
      start
    }
  }
  getAllStatus(current,size,start) {
    this.setState({
      current,
      size,
      start
    }, () => {
      if (this.props.getStatus && typeof this.props.getStatus == 'function') {
        this.props.getStatus(current, size, start)
      }
    })
  }
  render() {
    const {
      group = 5,
      total = 10,
      sizeShow = true,
      numShow = true
    } = this.props
    const {
      current,
      start,
      size,
      sizeList
    } = this.state

    return(
      <div className="funlee-pagination">
        <PageList
          group={ group }
          start={ start }
          current={ current }
          total={ total }
          size={size}
          listStatus={this.getAllStatus.bind(this) }
        />
        <PageSize
          show={ sizeShow }
          start={start}
          sizeList={ sizeList }
          current={current}
          size={ size }
          sizeStatus={this.getAllStatus.bind(this) }
        />
        <PageNum
          show={ numShow }
          group={ group }
          total={ total }
          current={ current }
          size={ size }
          start={ start }
          numStatus={this.getAllStatus.bind(this)}
        />
      </div>
    )
  }
}
export default Pagination
