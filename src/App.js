import React, { useState } from "react";
import "./style.css";
import Box from "./components/Box";

const items = {
  Rock: {
    name: "Rock",
    img:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
  },
  Scissors: {
    name: "Scissors",
    img: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
  },
  Paper: {
    name: "Paper",
    img: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
  }
};
function App() {
  //1. you need to define the state.
  let [selectedItem,setSelectedItem]= useState(null) ; // 2. use useState function to initialize the selectedItem value
  let [computer,setComputer] =useState(null); // 4. make computer state
  let [result ,setResult]=useState('');


  let onPlay = (item) =>{
    console.log(item);

    //3. set the user's choices
    setSelectedItem(items[item]);

    //5. choose the random item 
    let computerChoice = randomChoice()

    //6. set the value into computer state
    setComputer(computerChoice)

    //7. make the game result with userChoice and computerChoice 
    let finalResult = judgement(items[item].name,computerChoice.name );
    console.log("final result", finalResult);
    
    //8. change my result state value
     setResult(finalResult)


    /*
    variable 
    let a = ''
    a = 'saysome'
    render will be not work if you use variable

    state
    let [a,setA] = useState('')
    setA('saysome')
    render will listen the change of state


    */

    

  }

  // choose the random item from the items
  let randomChoice = ()=>{
    const keys = Object.keys(items);// its gona bring all the keys inside of items object and make it to array
    const randomNum = Math.floor(Math.random()*keys.length); // get random number from 0~2
    const randomName = keys[randomNum];
  

    return items[randomName];
    

  }

  // show me the game result 
  let judgement = (userChoice,computerChoice) =>{
    if(userChoice === computerChoice){
      return 'TIE'
    }else if(userChoice === 'Rock') {
      return computerChoice === 'Scissors'?'WIN':'LOSE'
    }else if (userChoice === 'Scissors'){
      return computerChoice === 'Paper'? 'WIN':'LOSE'
    }else if (userChoice === 'Paper'){
      return computerChoice === 'Rock'?"WIN":'LOSE'
    }

  }
  return (
   <div>
     first class of react today
    <Box title="you" img={selectedItem && selectedItem.img} name={selectedItem && selectedItem.name} win={result} />
    <button onClick={()=>onPlay('Rock')}>Rock</button>
    <button onClick={()=>onPlay('Scissors')}>scissors</button>
    <button onClick={()=>onPlay('Paper')}>paper</button>
    <Box title="computer" img={computer && computer.img} name={computer && computer.name} win={result}/>

   </div>
  );
}

export default App;


