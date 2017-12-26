import React, { Component } from 'react';
import MatchStick from '../assets/images/matchStick.png';

const TotalSticks = ({totalSticks}) => {
  let sticks = [];
  for(let i = 0; i < totalSticks; i++) {
    sticks.push(<img key={i} style={{height: '7rem'}} src={MatchStick} />);
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
    if(this.state.totalSticks > 1) {
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
      }, 1000);
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
        <span style={{margin: '1rem'}}>You Picked: {this.state.userPicked}</span>
        <span style={{margin: '1rem'}}>Computer Picked: {this.state.computerPicked}</span>
      </div>
      <div className="game-area">
        <div className="total-sticks">Total Sticks
          <div>
          <TotalSticks totalSticks={this.state.totalSticks} />
          </div>
        </div>
          
        <div className="drawn-sticks">Drawn sticks
          <div>
          <TotalSticks totalSticks={this.state.drawnSticks} />
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
