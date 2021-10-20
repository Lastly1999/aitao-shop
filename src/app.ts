import { Component } from 'react'
import './theme/custom-variables.scss'

class App extends Component {
  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
 