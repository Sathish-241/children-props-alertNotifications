// Write your code here
import {GrFormClose} from 'react-icons/gr'

import {Component} from 'react'
import './index.css'

class Notification extends Component {
  render() {
    const {children} = this.props
    return (
      <li className="item">
        {children} <GrFormClose className="close-icon" />
      </li>
    )
  }
}
export default Notification
