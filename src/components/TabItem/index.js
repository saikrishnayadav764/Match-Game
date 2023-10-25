/* eslint-disable react/destructuring-assignment */
import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  tabHandler = () => {
    const {tabId} = this.props.tabItem
    const {setOnly} = this.props
    setOnly(tabId)
  }

  render() {
    const {tabItem, activeId} = this.props
    return (
      <li onClick={this.tabHandler} key={tabItem.tabId}>
        <button
          className={`btn ${activeId === tabItem.tabId ? 'active' : ''}`}
          type="button"
        >
          {tabItem.displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
