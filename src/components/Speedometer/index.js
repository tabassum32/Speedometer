// Write your code here
import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  accelarate = () => {
    this.setState(previousState =>
      previousState.count < 200
        ? {count: previousState.count + 10}
        : {count: 200},
    )
  }

  applyBreak = () => {
    this.setState(previousState =>
      previousState.count < 0 ? {count: previousState.count - 10} : {count: 0},
    )
  }

  render() {
    const {count} = this.state

    return (
      <div>
        <h1>SPEEDOMETER</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="asd"
          />
          <h2>Speed is {count} mph </h2>
          <p>Min limit is 0mph, max limit is 200mph</p>
          <div>
            <button onClick={this.accelarate}>Accelerate</button>
            <button onClick={this.applyBreak}>Apply Break</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
