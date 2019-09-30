import React from 'react';
import ChildFuncComp from "./ChildFuncComp";
import PropTypes from 'prop-types'

function ContextDemoFuncChild(props) {
  console.log('ContextDemoFuncChild.props: ',props);
  return (
    <div>
      {
        props.prop2
      }
    </div>
  );
}

export default ContextDemoFuncChild;
