import React, {Component} from 'react';
import './style.css';


function KeepGoing(props) {
    return (
      <div>
        <button className="Button" onClick={props.keepgoingStopHandler}>Stop</button>
        <button className="Button" onClick={props.keepgoingResetHandler}>Reset</button>
        <button className = "Button" onClick = {props.change}>change</button>
      </div>
    );
}

function Pause(props) {
    return (
      <div>
        <button className="Button" onClick={props.pauseStartHandler}>Start</button>
        <button className="Button" onClick={props.pauseResetHandler}>Reset</button>
        <button className = "Button" onClick = {props.change}>change</button>
      </div>
    );
}

class App extends Component{
  constructor(props){
    super(props);
    this.state = {timmer: 1000, going: false, changed:false};
  }

  start = () => {
    this.setState({
      going: true
    });
  } 

  stop = () => {
    this.setState({
      going: false
    });
  } 

  MinusOne = () => {
    this.setState({
      timmer: this.state.timmer - 1
    });
  };

  toZero = () => {
    this.setState({
      timmer: 1000,
      going: false
    });
  };

  change = () => {
    this.setState({changed:!this.state.changed});
  }

  render(){
      const {going, changed} = this.state;
      going && setTimeout(this.MinusOne, 1000);
      return(
          <div className = "Timmer">
              
              <p className = "Timmer--Timmer">{changed?
                (this.state.timmer + "s"): (this.state.timmer/60 + "min")}
              </p>
              {console.log(changed)}
              <div/>
              <div className = "Buttons">
                  {going ? 
                      (<KeepGoing keepgoingStopHandler = {this.stop} keepgoingResetHandler = {this.toZero} change = {this.change}/>)
                      :
                      (<Pause pauseStartHandler = {this.start} pauseResetHandler = {this.toZero} change = {this.change}/>)}
              </div>
              
          </div>
      );


  };
};

export default App;