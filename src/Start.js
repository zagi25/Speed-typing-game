function Start({setStart}){

  const handleClick = () =>{
    setStart(false);
  }

  return (
    <>
      <div className="title">
        <h1>Welcome to typing game!</h1>
        <h3>Press START to start playing</h3>
      </div>
      <div className="start">
        {/* <h1>Welcome to typing game!</hg1> */}
        <button className="btn" onClick={() => handleClick()}>Start</button>
      </div>
    </>
  )

}

export default Start;
