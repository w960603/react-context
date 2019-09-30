import React, {Component} from 'react';
import {ContextDemo} from '@/containers/ContextDemo'
import ContextDemoChild from '@/views/ContextDemoChild'
import ContextDemoFuncChild from '@/views/ContextDemoFuncChild'

class ContextDemoParent extends Component {

  render() {
    console.log(React.Children);
    return (
      /*在Consumer组建中显式地通过一个函数传递context给子组件
      * 也就是说父组件需要通过props将Provider提供的context传给子组件
      * */
      <ContextDemo.Consumer >
        {
          context=> (
            <div>
              <ContextDemoChild {...context}/>
              <ContextDemoFuncChild {...context}/>

              {/*直接返回子组件, 不传参*/}
              {/*{this.props.children}*/}

              {
                // 返回子组件, 并传入context
                React.Children.map(this.props.children,(child,i)=>{
                  return React.cloneElement(child,{
                    ...context
                  })
                })
              }
            </div>
          )
        }
    </ContextDemo.Consumer>
    );
  }
}


export default ContextDemoParent;
