import {Component} from 'react'
import TabBar from '../TabBar'
import './index.css'

class MatchGame extends Component {
  state = {
    score: 0,
    isWrong: false,
    timer: 60,
    randomImage: '',
  }

  componentDidMount() {
    const {imagesList} = this.props
    const {id, imageUrl, category} = imagesList[0]
    const randomImage = {id, imageUrl, category}
    this.setState({randomImage})
    this.id = setInterval(() => {
      const {isWrong} = this.state
      const {timer} = this.state
      if (timer === 0 || isWrong) {
        this.setScore(true)
        return clearInterval(this.id)
      }

      return this.setState(prevState => ({timer: prevState.timer - 1}))
    }, 1000)
  }

  playAgain = () => {
    const randomImage = this.generateRandomImage()
    this.setState({
      score: 0,
      isWrong: false,
      timer: 60,
      randomImage,
    })
    this.id = setInterval(() => {
      const {isWrong} = this.state
      const {timer} = this.state
      if (timer === 0 || isWrong) {
        this.setScore(true)
        return clearInterval(this.id)
      }

      return this.setState(prevState => ({timer: prevState.timer - 1}))
    }, 1000)
  }

  setScore = isWrong => {
    const randomImage = this.generateRandomImage()
    if (!isWrong) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        randomImage,
      }))
    } else {
      this.setState({isWrong})
    }
  }

  generateRandomImage = () => {
    const {imagesList} = this.props
    const {id, imageUrl, category} = imagesList[
      Math.floor(Math.random() * imagesList.length)
    ]
    return {id, imageUrl, category}
  }

  render() {
    const {randomImage, timer, score, isWrong} = this.state
    const {tabsList, imagesList} = this.props
    return (
      <div className="container">
        <div className="topSec">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
          <ul className="scoreWrap">
            <li>
              <p className="scoreDisplay">
                Score: {score !== null ? score : 0}
              </p>
            </li>
            <li className="timerWrap">
              <img
                className="timerImg"
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
              <p>{timer} sec</p>
            </li>
          </ul>
        </div>
        {!isWrong ? (
          <>
            <div className="wrapper1">
              <img
                className="thumbNail"
                alt="match"
                src={randomImage.imageUrl}
              />
            </div>
            <TabBar
              setScore={this.setScore}
              displayImageId={randomImage.id}
              imagesList={imagesList}
              tabsList={tabsList}
            />
          </>
        ) : (
          <div className="gameOver">
            <img
              className="trophy"
              alt="trophy"
              src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            />
            <p className="yourScore">YOUR SCORE</p>
            <p className="winScore">{score}</p>
            <button onClick={this.playAgain} className="resetBtn" type="button">
              <div className="playAgain">
                <img
                  alt="reset"
                  src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                />
                <p>PLAY AGAIN</p>
              </div>
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default MatchGame
