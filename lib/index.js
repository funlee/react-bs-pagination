module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootstrap_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pagination_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PageList__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pageSize__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pageNum__ = __webpack_require__(6);








class Pagination extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    const { current = 1, size = 10, sizeList = [10, 20, 30, 40], group, sizeShow = true } = this.props;
    let start = 1;
    if (current < group || current - 2 <= 0) {
      start = 1;
    } else {
      start = current - 2;
    }
    let targetSize = sizeList.indexOf(size) === -1 ? sizeList[0] : size;
    if (!sizeShow) {
      targetSize = null;
    }

    this.state = {
      size: targetSize,
      sizeList,
      current,
      start
    };
  }
  getAllStatus(current, size, start) {
    this.setState({
      current,
      size,
      start
    }, () => {
      if (this.props.getStatus && typeof this.props.getStatus == 'function') {
        this.props.getStatus(current, size, start);
      }
    });
  }
  render() {
    const {
      group = 5,
      total = 10,
      sizeShow = true,
      numShow = true
    } = this.props;
    const {
      current,
      start,
      size,
      sizeList
    } = this.state;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'funlee-pagination' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__PageList__["a" /* default */], {
        group: group,
        start: start,
        current: current,
        total: total,
        size: size,
        listStatus: this.getAllStatus.bind(this)
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__pageSize__["a" /* default */], {
        show: sizeShow,
        start: start,
        sizeList: sizeList,
        current: current,
        size: size,
        sizeStatus: this.getAllStatus.bind(this)
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__pageNum__["a" /* default */], {
        show: numShow,
        group: group,
        total: total,
        current: current,
        size: size,
        start: start,
        numStatus: this.getAllStatus.bind(this)
      })
    );
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class PageList extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  getPageList() {
    const { total, group, current, start } = this.props;

    let pages = [];
    // 上一页
    pages.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "li",
      {
        className: current === 1 ? "disabled" : null,
        onClick: this.prePageHandeler.bind(this),
        key: 0
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { href: "javascript:;", "aria-label": "Previous" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "span",
          { "aria-hidden": "true" },
          "\xAB"
        )
      )
    ));
    if (total <= group) {
      // 总页码小于等于 group 时，全部显示出来
      for (let i = 1; i <= total; i++) {
        pages.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "li",
          {
            key: i,
            onClick: this.pageClick.bind(this, i),
            className: current === i ? "active" : null
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "a",
            { href: "javascript:;" },
            i
          )
        ));
      }
    } else {
      // 总页码大于 group 时，部分显示
      // 第一页
      pages.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "li",
        {
          className: current === 1 ? "active" : null,
          key: 1,
          onClick: this.pageClick.bind(this, 1)
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "a",
          { href: "javascript:;" },
          "1"
        )
      ));

      let pageLength = 0;
      if (group + start > total) {
        pageLength = total;
      } else {
        pageLength = group + start;
      }
      // 前面省略号(当 当前页码比分组的页码大时显示省略号)
      if (current >= group) {
        pages.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "li",
          {
            className: "disabled",
            key: -1
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "a",
            { href: "javascript:;" },
            "\xB7\xB7\xB7"
          )
        ));
      }
      // 非第一页和最后一页显示
      for (let i = start; i < pageLength; i++) {
        if (i <= total - 1 && i > 1) {
          pages.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            {
              className: current === i ? "active" : null,
              key: i,
              onClick: this.pageClick.bind(this, i)
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              { href: "javascript:;" },
              i
            )
          ));
        }
      }
      // 后面省略号
      if (total - start >= group + 1) {
        pages.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "li",
          {
            className: "disabled",
            key: -2
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "a",
            { href: "javascript:;" },
            "\xB7\xB7\xB7"
          )
        ));
      }
      // 最后一页
      pages.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "li",
        {
          className: current === total ? "active" : null,
          key: total,
          onClick: this.pageClick.bind(this, total)
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "a",
          { href: "javascript:;" },
          total
        )
      ));
    }
    // 下一页
    pages.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "li",
      {
        className: current === total ? "disabled" : null,
        onClick: this.nextPageHandeler.bind(this),
        key: total + 1
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { href: "javascript:;", "aria-label": "Next" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "span",
          { "aria-hidden": "true" },
          "\xBB"
        )
      )
    ));
    return pages;
  }
  // 页码点击
  pageClick(current) {
    const { group, start, size } = this.props;
    let newStart = start;
    // 当 当前页码 大于 分组的页码 时，使 当前页 前面 显示 两个页码
    if (current >= group) {
      newStart = current - 2;
    }
    if (current < group) {
      newStart = 1;
    }
    this.props.listStatus(current, size, newStart);
  }

  // 上一页事件
  prePageHandeler() {
    let { current } = this.props;
    if (--current === 0) {
      return false;
    }
    this.pageClick(current);
  }

  // 下一页事件
  nextPageHandeler() {
    let { current } = this.props;
    const { total } = this.props;
    if (++current > total) {
      return false;
    }
    this.pageClick(current);
  }
  render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "nav",
      {
        "aria-label": "Page navigation",
        className: "page-list"
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "ul",
        { className: "pagination" },
        this.getPageList()
      )
    );
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PageList;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class PageSize extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      size: this.props.size
    };
  }
  getList() {
    const { sizeList } = this.props;
    return sizeList.map((d, i) => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "li",
      { key: `${i}`, onClick: this.selectPageSize.bind(this, d) },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { href: "javascript:;" },
        d,
        "\u6761/\u9875"
      )
    ));
  }
  selectPageSize(size) {
    // 将当前展示的数据条数（每页）返回父组件
    const { current, start } = this.props;
    if (size != this.state.size) {
      this.setState({
        size,
        open: false
      }, this.props.sizeStatus(current, size, start));
    }
  }
  toggleSizeList() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const { open, size } = this.state;
    if (this.props.show) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: open ? "btn-group open" : "btn-group" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "button",
          {
            type: "button",
            className: "btn btn-primary dropdown-toggle",
            "data-toggle": "dropdown",
            onClick: this.toggleSizeList.bind(this)
          },
          size,
          "\u6761/\u9875",
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "caret" })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "ul",
          { className: "dropdown-menu" },
          this.getList()
        )
      );
    } else {
      return null;
    }
  }
}
/* harmony default export */ __webpack_exports__["a"] = (PageSize);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


class PageNum extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  constructor(props) {
    super(props);
    const { current } = this.props;
    this.state = {
      num: current
    };
  }
  handleChange(e) {
    this.setState({
      num: e.target.value
    });
  }
  handleKeyUp(e) {
    if (e.keyCode != 13) {
      return false;
    }
    const { total, current, start, group, size } = this.props;
    const page = parseInt(this.state.num, 10);
    let newStart = start;

    if (!page || page < 0 || page > total) {
      alert('输入不合法！！');
      this.setState({
        num: current
      });
      return false;
    } else if (page === current) {
      return false;
    }

    // 确定新的 start 和  current（page）
    if (page < group) {
      newStart = 1;
    }
    if (page > group && page < total) {
      newStart = page - 2;
    }
    this.props.numStatus(page, size, newStart); // current,size,start
  }
  render() {
    if (this.props.show) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
        type: 'text',
        className: 'form-control',
        value: this.state.num,
        onChange: this.handleChange.bind(this),
        onKeyUp: this.handleKeyUp.bind(this)
      });
    } else {
      return null;
    }
  }
}
/* harmony default export */ __webpack_exports__["a"] = (PageNum);

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map