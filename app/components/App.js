import React, { Component } from 'react';
import MatchStick from '../assets/images/matchStick.png';

const TotalSticks = ({ totalSticks }) => {
  let sticks = [];
  for (let i = 0; i < totalSticks; i++) {
    sticks.push(<img key={i} className="stick" style={{ height: '7rem' }} src={MatchStick} />);
  }
  return sticks;
}
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSticks: 21,
      drawnSticks: 0,
      userPicked: '...',
      computerPicked: '...'
    }
  }
  drawnSticks(numberOfSticks) {
    if (this.state.totalSticks > 1) {
      this.setState({
        userPicked: numberOfSticks,
        computerPicked: '...',
        totalSticks: this.state.totalSticks - numberOfSticks,
        drawnSticks: this.state.drawnSticks + numberOfSticks
      });
      setTimeout(() => {
        let sticks = 5 - numberOfSticks;
        this.setState({
          computerPicked: sticks,
          totalSticks: this.state.totalSticks - sticks,
          drawnSticks: this.state.drawnSticks + sticks
        });
      }, 2000);
    }
  }
  render() {
    return (
      <div>
        <h2 id="heading">You think you can win this ? Let's See !!!</h2>
        <div>
          <button className="button-draw" onClick={this.drawnSticks.bind(this, 1)}>1</button>
          <button className="button-draw" onClick={this.drawnSticks.bind(this, 2)}>2</button>
          <button className="button-draw" onClick={this.drawnSticks.bind(this, 3)}>3</button>
          <button className="button-draw" onClick={this.drawnSticks.bind(this, 4)}>4</button>
          <span style={{ margin: '1rem' }}>You Picked: {this.state.userPicked}</span>
          <span style={{ margin: '1rem' }}>Computer Picked: {this.state.computerPicked}</span>
        </div>
        <div className="game-area">
          <div className="total-sticks">
            <div className="sticks-count">
              Total Sticks Remaining
           <h1> {this.state.totalSticks} </h1>
            </div>
            <div>
              <TotalSticks totalSticks={this.state.totalSticks} />
            </div>
          </div>

          <div className="drawn-sticks">
            <div className="sticks-count">
              Drawn sticks
            <h1> {this.state.drawnSticks} </h1>
            </div>
            <div>
              <TotalSticks totalSticks={this.state.drawnSticks} />
            </div>
          </div>
        </div>
        <div>
          <h2>Rules</h2>
          <ol>
            <li>
              Use buttons 1, 2, 3, 4 to draw sticks 1, 2, 3, 4 respectively
          </li>
            <li>
              After every user's turn, computer will pick certain number of sticks
          </li>
            <li>
              The one to pick the last stick will loose
          </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
