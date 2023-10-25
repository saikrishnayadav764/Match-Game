import {Component} from 'react'
import TabItem from '../TabItem'
import './index.css'

class TabBar extends Component {
  state = {activeId: 'FRUIT'}

  setOnly = tabId => {
    this.setState({activeId: tabId})
  }

  handleScore = id => {
    const {setScore, displayImageId} = this.props
    if (id === displayImageId) {
      setScore(false)
    } else {
      setScore(true)
    }
  }

  render() {
    const {activeId} = this.state
    const {tabsList} = this.props
    const {imagesList} = this.props
    const filteredItems = imagesList.filter(
      imageItem => imageItem.category === activeId,
    )
    return (
      <>
        <ul className="wrapper2">
          {tabsList.map(tabItem => (
            <TabItem
              key={tabItem.tabId}
              activeId={activeId}
              tabItem={tabItem}
              setOnly={this.setOnly}
            />
          ))}
        </ul>
        <ul className="allImagesDisplay">
          {filteredItems.map(eachItem => (
            <li className="smallBtnWrap" key={eachItem.id}>
              <button
                onClick={() => this.handleScore(eachItem.id)}
                className="smallBtns"
                type="button"
              >
                <img
                  className="smallImage"
                  src={eachItem.thumbnailUrl}
                  alt="thumbnail"
                />
              </button>
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default TabBar
