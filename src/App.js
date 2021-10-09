import {useState} from "react"
import Game1 from "./Game1"
import text from "./text"
import Start from "./Start"
import Result from "./Result"

function App() {
  const [text1, setText1] = useState(text);//text for typing
  const [start, setStart] = useState(true);//value of start button
  const t = text1.split("");
  const [result, setResult] = useState({
    numWords: 0,
    numChar: 0,
    numCorWords: 0,

  });//result
  const [time, setTime] = useState(60);//time for the test
  
  let s = [];
  //making an array of pairs of letter and -1(value that represents
  //not typed)
  t.map((char) => s.push([char, -1]));


  return (
    <>
      {start ? (
        <Start setStart = {setStart} />
      ) : time >= 0 ? (
        <Game1  stext={s} setStart = {setStart} setResult = {setResult}
        time = {time} setTime = {setTime} />
      ) :
      (
        <Result result = {result} setStart = {setStart} setTime = {setTime}/>
      )
      }
    </>
  );
}

export default App;
