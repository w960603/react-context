import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Provider extends Component {
  static childContextTypes = {  // 必须要有这个属性才能用getChildContext方法
    prop1: PropTypes.string,
    method1: PropTypes.func,
    store: PropTypes.object
  }
  getChildContext () {  // 创建context的必要方法
    return {
      prop1: 'prop1',
      method1: ()=>{
        console.log('method1');
        },    // 返回指定值
      store:this.props.store   //返回父组件传入的值
    }
  }
  render() {
    return (
      this.props.children  // 返回子组件
    );
  }
}

export default Provider;
