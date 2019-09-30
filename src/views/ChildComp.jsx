import React, {Component} from 'react';
import PropTypes from 'prop-types'

class ChildComp extends Component {
  static contextTypes = {   // 子组件接收context传值(必须有), 否则值为undefined
    prop1: PropTypes.string,
    method1: PropTypes.func,
    store: PropTypes.object
  }

  render() {
    console.log(this.context);
    return (
      <div>
        {this.context.prop1}
      </div>
    );
  }
}

export default ChildComp;
