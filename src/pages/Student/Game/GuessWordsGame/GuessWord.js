import React, { useState, useEffect } from "react";
import "./GuessWord.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

const GuessWord = () => {
  const [word, setWord] = useState("");
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [maxAttempts] = useState(6);
  const [feedback, setFeedback] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [rankPoint, setRankPoint] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false); 
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  useEffect(() => {
  fetchWord();
}, [id]);



  const fetchWord = () => {
    if (!victory) {
      fetch("http://127.0.0.1:8000/api/wordl/all")
        .then((response) => response.json())
        .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.data.length);
        const randomWord = data.data[randomIndex].english;
        const randomSuggestion = data.data[randomIndex].description;
        setWord(randomWord);
        setSuggestion(randomSuggestion);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  };

  const updateRank = async () => {
    try {
      const updatedUser = { ...user, rank: rankPoint };
      await axios.put("http://127.0.0.1:8000/api/addrank/" + user.id, updatedUser); 
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (error) {
      console.log("Error updating score:", error);
    }
  };

  const handleGuess = () => {
    if (guess.toLowerCase() === word.toLowerCase()) {
      setFeedback("Correct!");
      setRankPoint(rankPoint + 2);
      setAttempts(0);
      setGuess("");
      fetchWord();
      if (rankPoint + 2 >= 10) {
        setVictory(true);
        updateRank();
      }
    } else {
      setFeedback("Incorrect");
      setAttempts((prevAttempts) => prevAttempts + 1);
      if (attempts >= maxAttempts) {
        setGameOver(true);
        updateRank();
      }
    }
  };

  const handleRestart = () => {
    setGuess("");
    setAttempts(0);
    setFeedback("");
    setRankPoint(0);
    setGameOver(false);
    setVictory(false); 
    fetchWord();
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleGuess();
    }
  };

  return (
    <div className="miniGame_wrapper">
      <div className="miniGame_wrapper_container">
        <div className="miniGame_wrapper_container_box">
          <h1 className="miniGame_wrapper_container_box_header">
            Guessing Game
          </h1>
          <p className="miniGame_wrapper_container_box_item">
            Attempts times: {attempts}/{maxAttempts}
          </p>
          <p className="miniGame_wrapper_container_box_item">
            Your answer is : {feedback}
          </p>
          <p className="miniGame_wrapper_container_box_score">
            Rank Point : {rankPoint}
          </p>
          <input
            className="miniGame_wrapper_container_box_item"
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="miniGame_wrapper_container_box_item">
            Suggestion : {suggestion}
          </div>
          <div className="miniGame_wrapper_container_box_btn">
            <button onClick={handleGuess}>Guess</button>
            <button onClick={handleRestart}>Restart</button>
          </div>
          <button className="miniGame_wrapper_container_box_quitbtn">
            Exit
          </button>
          {gameOver && (
            <div className="game-over-overlay">
              <div className="game-over-modal">
                <h2>Game Over</h2>
                <p>Your score: {rankPoint}</p>
                <button onClick={handleRestart}>New Game</button>
              </div>
            </div>
          )}
          {victory && (
            <div className="victory-overlay">
              <div className="victory-modal">
                <h2>Congratulations, bạn đã giành chiến thắng!</h2>
                <button onClick={handleRestart}>Restart</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuessWord;
