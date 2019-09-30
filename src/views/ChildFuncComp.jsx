import React from 'react';
import PropTypes from 'prop-types'

const ChildFuncComp = (props, context) => {
  console.log(context, props);
  return (
    <div>
      {context.prop1}
      123
    </div>
  );
};
ChildFuncComp.contextTypes = {   // 函数组件也需要声明contextTypes属性才能获取到context的值
  prop1: PropTypes.string,
  store: PropTypes.object
}

export default ChildFuncComp;
