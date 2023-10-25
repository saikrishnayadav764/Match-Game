/* eslint-disable no-shadow */
import {Component} from 'react'

class Timer extends Component {
  // eslint-disable-next-line react/destructuring-assignment
  state = {timer: 10, iswrong: false}

  id = null

  componentDidMount() {
    const {setScore, setPresentTimer} = this.props
    this.id = setInterval(() => {
      const {isWrong} = this.props
      const {timer} = this.state
      if (timer === 0 || isWrong) {
        setScore(true)
        this.setState({iswrong: true})
        this.resetTime()
        setPresentTimer(timer)
        return clearInterval(this.id)
      }

      return this.setState(prevState => ({timer: prevState.timer - 1}))
    }, 1000)
  }

  resetTime = () => {
    this.setState({timer: 10})
  }

  render() {
    const {timer} = this.state
    return <p>{timer} sec</p>
  }
}

export default Timer
