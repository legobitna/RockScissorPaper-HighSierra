import React from "react";

function Box(props) {
  let result;
  if (props.title === "computer") {
    if (props.win === "TIE") {
      result = "TIE";
    } else if (props.win === "WIN") {
      result = "LOSE";
    } else if (props.win === "LOSE") {
      result = "WIN ";
    }
  }else {
    result = props.win
  }

  return (
    <div className={result}>
      <h1>{props.title}</h1>
      <div>{props.name}</div>
      <img src={props.img} />
      <div>{result}</div>
    </div>
  );
}

// export default Box;

// import React, { Component } from 'react'

// export default class Box extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

// import React, { Component } from'react'
// class Box extends Component {
//     render(){
//         return (
//             <div className={this.props.color}>
//                 <h1>{this.props.name}</h1>
//                 <div>{this.props.color}</div>
//                <div>{this.props.win?"Won":"Loss"}</div>

//             </div>
//         )
//     }
// }

export default Box;
