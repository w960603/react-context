import React,{createContext} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ChildFuncComp from "../views/ChildFuncComp";

export const ContextDemo = createContext({
  prop1:'defaultProp1',
  prop2: 'defaultProp2',
  method2: ()=>{
    console.log('method2');
  },
})
ChildFuncComp.contextTypes = {
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  method2: PropTypes.func
}
