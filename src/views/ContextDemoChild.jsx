import React, {Component} from 'react';
import PropTypes from 'prop-types'

class ContextDemoChild extends Component {

  render() {
    console.log('ContextDemoChild.props: ',this.props);
    return (
      <div>
        {this.props.prop2}
      </div>
    );
  }
}


export default ContextDemoChild;
