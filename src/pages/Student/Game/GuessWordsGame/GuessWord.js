import React, { useState, useEffect } from "react";
import "./GuessWord.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BsSuitHeartFill } from "react-icons/bs";
import animation from"~/components/asset/img/trueAnswer.gif";
import trueAns from"~/components/asset/img/last_true.png";
import falseAns from"~/components/asset/img/last_false.png";
import guessingAns from"~/components/asset/img/guessing.gif";
import backgroundMusic from "~/components/asset/sound/guessWord-soundtrack.mp3";


const GuessWord = () => {
  const [word, setWord] = useState("");
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(5);
  const [maxAttempts] = useState(5);

  const [rankPoint, setRankPoint] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const [supportCount, setSupportCount] = useState(4);
  const [isSupportDisabled, setIsSupportDisabled] = useState(false);
  const [showSupportSuggestion, setShowSupportSuggestion] = useState(false);


  const [showTrueAns, setShowTrueAns] = useState(false);
  const [showFalseAns, setShowFalseAns] = useState(false);

  const { id } = useParams();
  const [inputFocused, setInputFocused] = useState(false);


  useEffect(() => {
    fetchWord();
  }, [id]);


  useEffect(() => {
    if (supportCount <= 1) {
      setIsSupportDisabled(true);
    } else {
      setIsSupportDisabled(false);
    }
  }, [supportCount]);
  const fetchWord = () => {
    if (!victory ) {
      setIsSupportDisabled(false); // Đảm bảo rằng nút Support không bị vô hiệu hóa
      fetch("http://127.0.0.1:8000/api/wordl-by-wordle/" + id)
        .then((response) => response.json())
        .then((data) => {
          const randomIndex = Math.floor(Math.random() * data.data.length);
          const randomWord = data.data[randomIndex].english;
          const randomSuggestion = data.data[randomIndex].description;
          setWord(randomWord);
          setSuggestion(randomSuggestion);
          setShowSupportSuggestion(true);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      setIsSupportDisabled(true);
      setShowSupportSuggestion(false); 
    }
  };

  const updateRank = async () => {
    try {
      const newCoin = +user.coin + rankPoint;
      const updatedUser = { ...user, coin: newCoin };
      await axios.put(
        "http://127.0.0.1:8000/api/addcoin/" + user.id,
        updatedUser
      );
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (error) {
      console.log("Error updating score:", error);
    }
  };

  const handleGuess = () => {
    if (guess.toLowerCase() === word.toLowerCase()) {
      setFeedback("Đúng rồi!");
      setRankPoint(rankPoint + 2);
      setAttempts(5);
      setGuess("");
      setAnsweredCount((prevCount) => prevCount + 1);
      if (rankPoint + 2 === 10 || answeredCount >= 5) {
        setVictory(true);
        updateRank();
      } else {
        setShowTrueAns(true);
        setTimeout(() => {
          setShowTrueAns(false);
          setFeedback("");
          setShowSupportSuggestion(false);
          fetchWord();
        }, 2000);
   
      }
    } else {
      setFeedback("Sai mất rồi");
      setAttempts((prevAttempts) => prevAttempts - 1);
      if (attempts <= 1) {
        setGameOver(true);
        updateRank();
      } else {
        setShowFalseAns(true);
        setTimeout(() => {
          setShowFalseAns(false);
        }, 2000);
      }
    }
  };
 


  const handleRestart = () => {
    setGuess("");
    setFeedback("");
    setAttempts(5);
    setRankPoint(0);
    setGameOver(false);
    setVictory(false);
    setSupportCount(4);
    setIsSupportDisabled(false);
    fetchWord();
  };


  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleGuess();
    }
  };

  const handleSkip = () => {
    fetchWord();
    setFeedback("");
    setGuess("");
    setShowSupportSuggestion(false);
    
  };

  const handleSupport = () => {
    if (supportCount > 0) {
      setSupportCount((prevCount) => prevCount - 1);
      console.log(supportCount)
    }
  };

  const handleInputFocus = () => {
    setInputFocused(true);
    setFeedback("");
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <div className="miniGame_wrapper">
      <div className="miniGame_wrapper_container">
        <div className="miniGame_wrapper_container_box">
          <div className="miniGame_wrapper_container_box_content">
            <h1 className="miniGame_wrapper_container_box_content_header">
              Đoán từ
            </h1>
            <p className="miniGame_wrapper_container_box_content_item">
              {attempts}/{maxAttempts}
              <BsSuitHeartFill style={{ color: "#fa0000" }} />
            </p>
            <div className="miniGame_wrapper_container_box_content_item">
              <div className="miniGame_wrapper_container_box_content_item_header">
                Câu hỏi:
              </div>
              {suggestion}
            </div>
            <p className="miniGame_wrapper_container_box_content_item">
              Câu trả lời của bạn:
            </p>
            <p className="miniGame_wrapper_container_box_content_score">
              <span> Số điểm : {rankPoint}</span> <br />
              <span>Question: {answeredCount} / 5</span><br />
              <span>Trợ giúp: {supportCount - 1} </span>
            </p>
            <div className="miniGame_wrapper_container_box_content_answer">
              <input
                className="miniGame_wrapper_container_box_content_answer_item"
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <button
                className="miniGame_wrapper_container_box_content_answer_btn"
                onClick={handleGuess}
              >
                Kiểm tra
              </button>
            </div>

            <div className="miniGame_wrapper_container_box_content_btn">
              <button onClick={handleSkip}>Skip this</button>
              <button onClick={handleSupport} disabled={isSupportDisabled}>
                Support
              </button>
              <button onClick={handleRestart}>Restart</button>
            </div>
            <div>{feedback}</div>
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
                  <h2>
                    Congratulations, <br/> Bạn đã hoàn thành hết câu hỏi!
                  </h2>
                  <button onClick={handleRestart}>Restart</button>
                </div>
              </div>
            )}
          </div>

          <div className="miniGame_wrapper_container_box_suggest">
          <div className="miniGame_wrapper_container_box_suggest_wrapper">
            <div className="miniGame_wrapper_container_box_suggest_wrapper_top">

            {showTrueAns && (
        <img className="viewAns" src={trueAns} alt="True Answer" />
      )}
      {/* Hiển thị ảnh falseAns nếu showFalseAns là true */}
      {showFalseAns && (
        <img className="viewAns" src={falseAns} alt="False Answer" />
      )}
            <>
                {!feedback && (
                  <div>
                    <img className="viewAns" src={guessingAns} alt="Guessing Answer" />
                    <span>Guessing. . . </span>
                 </div>
               )}
             </>
        
            </div>
            ==========================
            <div className="miniGame_wrapper_container_box_suggest_wrapper_content">
         
              {attempts <= 3 && (
                <p className="suggestion-char sugesst_last">
                    <span>Gợi ý cho câu hỏi:</span>
                  [ The first character of the answer: {word.charAt(0)} ]
                </p>
              )}
              {attempts <= 2 && (
                <p className="suggestion-char sugesst_last">
                 [ The first character of the answer: {word.charAt(1)} ]
                </p>
              )}
              {attempts <= 1 && (
                <p className="suggestion-char sugesst_last">
                 [ The first character of the answer: {word.charAt(2)} ]
                </p>
              )}
              <br/>
            </div>
            <div>
              Support: 
              {supportCount == 1 &&  showSupportSuggestion  && ( 
                <p className="suggestion-char">
                
                  The last three characters of the answer:
                   [
                    {word.charAt(word.length - 3)}  {word.charAt(word.length - 2)} {word.charAt(word.length - 1)}]
                </p>
              )}
                {supportCount == 2 && showSupportSuggestion  &&(
                <p className="suggestion-char ">
                  The last two characters of the answer: [
                    {word.charAt(word.length - 2)} {word.charAt(word.length - 1)}
                  ]
                </p>
              )}
              {supportCount == 3  && showSupportSuggestion  && (
                <p className="suggestion-char">
                  The last character of the answer: [
                  {word.charAt(word.length - 1)}]
                </p>
              )}
            </div>
          </div>
          </div>
        </div>
      </div>
      <audio src={backgroundMusic} autoPlay loop volume={0.7} />
    </div>
  );
};

export default GuessWord;
