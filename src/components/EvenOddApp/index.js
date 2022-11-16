import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
    countIs: 'Even',
    countIs: 'Odd',
  }

  onIncrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 100}))
  }

  onDecrementCount = () => {
    this.setState(prevState => ({count: prevState.count}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Count {count}</h1>
        <p className="count-value">Count is {countIs}</p>
        <button type="button" className="btn" onClick={this.onIncrementCount}>
          Increment
        </button>
        <p className="para">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
