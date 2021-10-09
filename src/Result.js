function Result ({result, setStart, setTime}) {
  const handleClick = () => {
    setTime(60);
    // setStart(false);
  }
  return (
    <section className="result">
      <h1>GAME OVER!!!</h1>
      {/* Need changing for different times!!! */}
      <p>Number of typed words per minute: {result.numWords}</p>
      <p>Accuracy: {Math.round(result.numCorWords) || 0}%</p>
      <button className="btn" onClick={() => handleClick()}>Start another game</button>
    </section>
  );
};

export default Result;
