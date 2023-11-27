import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [player,setPlayer] = useState(1);
  const [winner,setWinner] = useState(null);
  const [board,setBoard] = useState({
    1 : "",
    2 : "",
    3 : "",
    4 : "",
    5 : "",
    6 : "",
    7 : "",
    8 : "",
    9 : "",
  });
   
  const checkWinner = () => {
    const symbol = player === 1 ? "🙋‍♀️" : "🙋‍♂️";
    if(board[1] === symbol && board[2] === symbol && board[3] === symbol)
    {
      setWinner(player)
    } 
    else if(board[4] === symbol && board[5] === symbol && board[6] === symbol)
    {
      setWinner(player)
    }
    else if(board[7] === symbol && board[8] === symbol && board[9] === symbol)
    {
      setWinner(player)
    }
    else if(board[1] === symbol && board[4] === symbol && board[7] === symbol)
    {
      setWinner(player)
    }
    else if(board[2] === symbol && board[5] === symbol && board[8] === symbol)
    {
      setWinner(player)
    }
    else if(board[3] === symbol && board[6] === symbol && board[9] === symbol)
    {
      setWinner(player)
    }
    else if(board[1] === symbol && board[5] === symbol && board[9] === symbol)
    {
      setWinner(player)
    }
    else if(board[3] === symbol && board[5] === symbol && board[7] === symbol)
    {
      setWinner(player)
    }
    setPlayer(player === 1 ? 2 : 1)
  }

  const play = (boxNo) => 
  {
    if(board[boxNo] !== "" || winner != null)
    {
      return;
    }

    if(player === 1)
    {
      setBoard({...board,[boxNo]:"🙋‍♀️"})
    }
    else
    {
      setBoard({...board,[boxNo]:"🙋‍♂️"})
    }

    // checkWinner(player)
    // setPlayer(player === 1 ? 2 : 1)
  }

  useEffect(() => {
    checkWinner()
  },[board])

  const reset = () => {
    setPlayer(1);
    setBoard({
    1 : "",
    2 : "",
    3 : "",
    4 : "",
    5 : "",
    6 : "",
    7 : "",
    8 : "",
    9 : "",
    })
    setWinner(null)
  }

  return (
    <div>
      <h1 className='text-center first-head'><span className='heading'>T</span>ic <span className='heading'>T</span>ac <span className='heading'> T</span>oe</h1>
      
      <div>
        <p className='text-center current-player'>Current Player : {player === 1?"🙋‍♀️":"🙋‍♂️"}</p>
      </div>
      {winner ? <h1 className='text-center'>Winner is : {winner === 1?"🙋‍♀️":"🙋‍♂️"}</h1>: null }
      <div className='player-container'>
        <span className='player'> Player 1 🙋‍♀️</span>
        
      
      <div className='board'>
        <div className='row'>
          <div className='box box1' onClick={() => {play(1)}}>
            {board[1]}
          </div>
          <div className='box box2' onClick={() => {play(2)}}>
          {board[2]}
          </div>
          <div className='box box3' onClick={() => {play(3)}}>
          {board[3]}
          </div>
        </div>

        <div className='row'>
          <div className='box box4' onClick={() => {play(4)}}>
          {board[4]}
          </div>
          <div className='box box5' onClick={() => {play(5)}}>
          {board[5]}
          </div>
          <div className='box box6' onClick={() => {play(6)}}>
          {board[6]}
          </div>
        </div>

        <div className='row'>
          <div className='box box7' onClick={() => {play(7)}}>
          {board[7]}
          </div>
          <div className='box box8'onClick={() => {play(8)}}>
          {board[8]}
          </div>
          <div className='box box9' onClick={() => {play(9)}}>
          {board[9]}
          </div>
        </div>
      </div>
      <span> Player 2 🙋‍♂️</span>
      </div>
      
      <button type='button' onClick={() =>{
        reset()
      }}
      className='reset-btn'>Reset</button>
    </div>
  )
}

export default App
