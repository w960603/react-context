import React, {Component} from 'react';
import Provider from '@/containers/Provider'
import ChildComp from '@/views/ChildComp'
import ChildFuncComp from '@/views/ChildFuncComp'

// 注: 引入通过context api创建的Context会使所有函数式组件获取不到函数式组件传递的context值
import {ContextDemo} from '@/containers/ContextDemo'

import ContextDemoParent from '@/views/ContextDemoParent'
import ContextDemoChild from '@/views/ContextDemoChild'

class App extends Component {

  render() {
    return (
      <div>
        <Provider store={{prop1: '123', method1: () => ({})}}>  {/* 如果在Provider中写死, 这里传值是没用的*/}
          {/*class组件*/}
          <ChildComp/>
          {/*函数式组件*/}
          <ChildFuncComp/>
        </Provider>

        <ContextDemo.Provider
          value={{prop2: 'outerProp2', prop1: 'prop123', method2: () => 'outerMethod2'}}
          prop1={123}
        >
          <ContextDemoParent>
            <ChildFuncComp/>
            <ChildFuncComp/>
          </ContextDemoParent>
        </ContextDemo.Provider>
      </div>
    )
  }
}

export default App;

