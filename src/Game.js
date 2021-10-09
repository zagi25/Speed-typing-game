import {useState, useEffect} from 'react';


function Game({text1}) {
  const [text, setText] = useState("");
  const [txt, setTxt] = useState("okej");
  const [txt3, setTxt3] = useState("okej");
  const [cor, setCor] = useState(true);


  const getText = (e) =>{
    e.preventDefault();
    setText(e.target.value);
    setCor(true);
    setTxt(txt3);
  }
  
  let txt1 = text.split("");
  const txt2 = txt3.split("");
  let i = txt1.length - 1;


  useEffect(()=>{
    if( i  >= 0){
      if(cor ===  true){
        if(txt1[i] === txt2[i]){
          if(i === 0){
            setTxt("<span class='green'>" + txt.substring(0,1) + "</span>" + txt.substring(1));
          }else if(i > 0 && i < txt2.length - 1 ){
            setTxt(txt.substring(0,i) + "<span class='green'>" + txt.substring(i, i + 1) + "</span>" + txt.substring(i + 1));
          }else{
            setTxt(txt.substring(0,i) + "<span class='green'>" + txt.substring(i) + "</span>")
          }
        }else{
          if(txt1.length - 1 === 0){
            setTxt("<span class='red'>" + txt.substring(0,1) + "</span>" + txt.substring(1));
          }else if(i > 0 && i < txt2.length - 1){
            setTxt(txt.substring(0,i) + "<span class='red'>" + txt.substring(i, i + 1) + "</span>" + txt.substring(i + 1));
          }else{
            setTxt(txt.substring(0,i) + "<span class='red'>" + txt.substring(i) + "</span>")
          }
        }
      }
    }
    setCor(false);
  },[txt1, txt2, cor, txt,i]);

  return (
    <section>
      <p dangerouslySetInnerHTML={{__html: txt}}></p>
      <input 
        type="text"
        value={text}
        onChange={getText}
        autoFocus
      />
    </section>
  );
}

export default Game;
