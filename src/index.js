import ReactDOM from "react-dom";
import React  from "react";
import { Stage, Layer, Rect, Circle } from "react-konva";

class App extends React.Component {
  
constructor(props){
  super(props);
  this.state={

  A: 0.8,
  B: -10,
  x: 20,
  y: 6,
  F: 0
  };
}
  
  componentDidMount() {
  
    setInterval(
  
  ()=> {
    if (this.state.x <= 0 || this.state.x >= 1000 || this.state.y >= 600 || this.state.y <= 0) {
      
      
      
      this.setState({A:-this.state.A});
      this.setState({B:this.state.y -this.state.A * this.state.x});
      
    
     
     
      if (this.state.x >= 1000) {
        this.setState({F:1});
      } else if (this.state.x <= 0) {
        this.setState({F:0});
      }
    }


    if (this.state.F === 1) {
      this.setState({x:this.state.x-1});
    } else {
     
      this.setState({x:this.state.x+1});
      
    }
    
    
    this.setState({y:this.state.A * this.state.x + this.state.B});
  
  }, 10);
}

  render(){
  return (
    <div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect x={0} y={0} width={1000} height={600} stroke shadowBlur={10} cornerRadius= {15}/>
          <Circle x={this.state.x} y={this.state.y} radius={15} fill="blue" />
        </Layer>
      </Stage>
    </div>
  );
};
}

ReactDOM.render(<App />, document.getElementById("root"));
