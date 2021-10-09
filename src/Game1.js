import {useState, useEffect} from "react";
import moment from 'moment';

function Game1 ({stext, setStart, setResult, setTime, time}) {
  const [text, setText] = useState("");//input
  const [sptext, setSptext] = useState(stext);//array of chars of text for typing
  const [prepTime, setPrepTime] = useState(5);//time for preperation

  const handleChange = (e) =>{
    e.preventDefault();
    setText(e.target.value);
  }

  //Comparing of the letters. 
  //Every element of array is pair of letter of the text and value of letter(-1 = not typed, 0 = wrong letter, 1 = correct letter)
  useEffect(() => {
    const txt = text.split("");
    const i = txt.length - 1;

    if(i >= 0){
      if(txt[i] === sptext[i][0]){
        setSptext(sptext.map((char, index) => index === i ?
          char = [char[0], 1] :
          index > i ? 
          char = [char[0], -1] :
          char
        ));
      }else{
        setSptext(sptext.map((char, index) => index === i ?
          char = [char[0], 0] :
          index > i ?
          char = [char[0], -1] :
          char
        ));
      } 
    }else{
      setSptext(sptext.map((char) => char = [char[0], -1]));
    } 
    
  },[text]);
  
  //Timer for preparation
  useEffect(() => {
    let interval = null;
    if(prepTime > 0) {
      interval = setInterval(() => {
        setPrepTime((prev) => prev - 1);
      },1000)
    }else{
      clearInterval(interval);
    }


    return () =>  clearInterval(interval);
  },[prepTime]);

  
  //Timer
  useEffect(() => {
    let interval1 = null;
    if(prepTime === 0) {
      if(time  >= 0){
        interval1 = setInterval(() => {
          setTime((prev) => prev - 1);
        }, 1000)
      }else {
        clearInterval(interval1);
      }
    }

    //Results
    if(time === 0){
      let rtxt = text.split(" ").filter((word) => word !== "");//all typed words
      console.log(rtxt);
      let a = [];//words and num of correct letters without space
      let b = [];
      let c = 0;//number of correct letters with space
      let d = [];//correct words
      let n = 0;
      console.log(sptext);

      for(let i = 0;  i < text.length + 1; i++){
        if(sptext[i][0] !== " "){
          b.push(sptext[i][0]);
          n += sptext[i][1];
        }else if(sptext[i + 1][0] === " "){
          a.push([b.join(""),n]);
          b = [];
          n = 0;
        }else {
          a.push([b.join(""), n]);
          b = [];
          n = 0;
        }
        if(sptext[i][1] > 0){
          c++
        }
      }
      d = a.filter((word) => word[0].length === word[1])
      setResult({
        numWords: rtxt.length,
        numChars: (c/text.length) * 100,
        numCorWords: (d.length/rtxt.length) * 100
      });
    }
    
    return () => clearInterval(interval1);

  },[time,prepTime]);


  return (
    <>
        {time > 60 ? 
          <div className="time"></div>
           :
          <div className="time">
          <h4>{moment(time * 1000).format("mm:ss")}</h4>
          </div>
        }
        <section className="game-container">
          <p className="text-p">
            {sptext.map((char, index) => {
              if(char[1] === 0){
                return (
                  <span key={index} className="red">{char[0]}</span>
                )
              }else if(char[1] === 1){
                return (
                  <span key={index} className="green">{char[0]}</span>
                )
              }else {
                return (
                  <span key={index} className="low">{char[0]}</span>
                )
              }
            })}
          </p>
          {prepTime > 0 ? 
            <div className="prep-time">
              <p>Test game in:</p>
              <p>{prepTime}</p>
              <p>seconds!</p>
            </div>
            :
            <div className="text-input">
              <input 
                type= "text"
                value= {text}
                onChange = {handleChange}
                autoFocus
              />
            </div>
          }
        </section>
      </>
  );
}

export default Game1;
