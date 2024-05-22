import React, { useState, useEffect } from "react";
import "./WordScramblestyle.scss";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsSuitHeartFill } from "react-icons/bs";
import successImg from "~/components/asset/img/image 27.png";

const WordScramble = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [word, setWord] = useState("");
  const [rankPoint, setRankPoint] = useState(0);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [attempts, setAttempts] = useState(5);
  const [suggestion, setSuggestion] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState(false);
  const [isPlayOn, setIsPlayOn] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [correctWord, setCorrectWord] = useState("");
  const [scrambledWord, setScrambledWord] = useState("");
  const [message, setMessage] = useState("");
  const [victory, setVictory] = useState(false);
  const [showCorrectAns, setShowCorrectAns] = useState(false);
  const [showFalseAns, setShowFalseAns] = useState(false);
  const [transitions, setTransitions] = useState(5);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchWord();
  }, [id]);

  useEffect(() => {
    if (victory || gameOver) {
      updateRank();
    }
  }, [victory, gameOver]);

  const fetchWord = () => {
    fetch("http://127.0.0.1:8000/api/wordl-by-wordle/" + id)
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          const randomIndex = Math.floor(Math.random() * data.data.length);
          const randomWord = data.data[randomIndex].english;
          const randomSuggestion = data.data[randomIndex].description;
          setWord(randomWord);
          setSuggestion(randomSuggestion);
          setQuestions(data.data);

          // Set up the new word and scrambled word
          const wordUpper = randomWord.toUpperCase();
          setCorrectWord(wordUpper);
          setScrambledWord(constructScrambledWord(wordUpper));
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const updateRank = async () => {
    try {
      const newCoin = +user.coin + rankPoint;
      const updatedUser = { ...user, coin: newCoin };
      await axios.put("http://127.0.0.1:8000/api/addcoin/" + user.id, updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (error) {
      console.log("Error updating score:", error);
    }
  };
  

  const handleInputChange = (event) => {
    setInputValue(event.target.value.toUpperCase());
  };

  const handleButtonClick = () => {
    if (inputValue !== "") {
      if (correctWord === inputValue) {
        setScore((prev) => prev + 1);
        setMessage("Đúng rồi !!!");
        setRankPoint((prev) => prev + 2);
        setAnsweredCount((prevCount) => prevCount + 1);
        setShowCorrectAns(true); 
        setTimeout(() => {
          setShowCorrectAns(false); 
          if (answeredCount + 1 >= 5) {
            setVictory(true);
          } else {
            fetchNextWord(); 
          }
        }, 1000);
      } else {
        setMessage("Oh sai mất rồi :<");
        setAttempts((prevAttempts) => prevAttempts - 1);
        setTimeout(() => {
          setShowCorrectAns(false); 
          if (answeredCount + 1 >= 5) {
            setVictory(true);
          } else {
            fetchNextWord(); 
          }
        }, 1000);
        if (attempts <= 1) {
          setGameOver(true);
        }
      }
    }
  };

  const fetchNextWord = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomWord = questions[randomIndex].english;
    const randomSuggestion = questions[randomIndex].description;
    setWord(randomWord);
    setSuggestion(randomSuggestion);

    const wordUpper = randomWord.toUpperCase();
    setCorrectWord(wordUpper);
    setScrambledWord(constructScrambledWord(wordUpper));
    setInputValue("");
    setMessage("");
  };

  const handleStartGame = () => {
    setIsPlayOn(true);
    setMessage("");
    setGameOver(false);
    setVictory(false);
    setAttempts(5);
    setTransitions(5);
    fetchNextWord();
  };

  const constructScrambledWord = (word) => {
    const shuffledArray = word.split("");
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray.join("");
  };

  const handleBack = () => {
    navigate(-2);
  };

  const handleRestart = () => {
    setAttempts(5);
    setRankPoint(0);
    setScore(0);
    setIndex(0);
    setAnsweredCount(0);
    setSuggestion("");
    setGameOver(false);
    setVictory(false);
    setQuestions([]);
    setResult(false);
    setInputValue("");
    setCorrectWord("");
    setScrambledWord("");
    setMessage("");
    setShowCorrectAns(false);
    setShowFalseAns(false);
    fetchWord(); 
    setTransitions(5);
  };
  

  const handleNextQuestion = () => {
    if (transitions > 0 && index < questions.length + 1) {
      setIndex((prevIndex) => prevIndex + 1);
      fetchWord();
      setTransitions((prevTransitions) => prevTransitions - 1);
    }
  };

  return (
    <div className="word_scramble">
      {result ? (
        <div className="successStudent">
          <div className="successStudent__content">
            <div className="successStudent__content--wrap">
              <div className="successStudent__content--img">
                <img src={successImg} alt="Success" />
              </div>
              <div className="successStudent__content--info">
                <div className="successStudent__content--info__title">
                  Hoàn thành bài học!
                </div>
                <div className="successStudent__content--info__box">
                  <div className="successStudent__content--info__box--score">
                    <h2>Tổng điểm</h2>
                    <div className="successStudent__content--info__box--score__content">
                      {rankPoint}
                    </div>
                  </div>
                  <div className="successStudent__content--info__box--accuracy">
                    <h2>Chính xác</h2>
                    <div className="successStudent__content--info__box--accuracy__content">
                      {(rankPoint / questions.length) * 100}%
                    </div>
                  </div>
                </div>
                <div className="successStudent__content--btn">
                  <button onClick={handleBack}>Quay về</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="answerStudent__header--wrap word_scramble--header">
            <Link onClick={handleBack} className="backBtn">
              <IoIosArrowBack />
            </Link>
            <h1>Từ vựng bí ẩn</h1>
            <div className="answerStudent__header--score">
              <span className="answerStudent__header--score__text">Điểm: </span>
              <span className="answerStudent__header--score__number">{rankPoint}</span>
            </div>
          </div>
          {gameOver && (
            <>
            <div className="game-over-blur"></div>
            <div className="game-over-overlay">
              <div className="game-over-modal">
                <h2>Hoàn thành trò chơi!</h2>
                <p>Điểm: {rankPoint}</p>
                <button className="start_game" onClick={handleRestart}>Chơi lại</button>
                <button className="start_game" onClick={handleBack}>Quay về</button>
              </div>
            </div>
            </>
          )}
          {victory && (
               <>
               <div className="game-over-blur"></div>
            <div className="game-over-overlay">
              <div className="game-over-modal">
                <h2>
                  Chúc mừng, <br /> Bạn đã hoàn thành hết câu hỏi!
                </h2>
                <button className="start_game" onClick={handleRestart}>Chơi lại</button>
                <button className="start_game" onClick={handleBack}>Quay về</button>
              </div>
            </div>
            </>
          )}
          <div className="content">
            {isPlayOn ? (
              <>
                <div className="answerStudent__header--number">
                  <span className="answerStudent__header--number__item">{attempts}</span>
                  /<span className="answerStudent__header--number__total">5</span>
                  <BsSuitHeartFill style={{ color: "#fa0000" }} />
                </div>
                <div className="answerStudent__header--number">
                  Chiến thắng: <span className="answerStudent__header--number__item">{answeredCount}</span>
                  /<span className="answerStudent__header--number__total">5</span>
                </div>
                <div className="answerStudent__header--number">
                  Lượt đổi: <span className="answerStudent__header--number__item">{transitions}</span>
                  /<span className="answerStudent__header--number__total">5</span>
                </div>
                <p className="scrambled_word">{scrambledWord}</p>
                <div className="board">
                  {correctWord.split("").map((el, i) => (
                    <span key={`${el}_${i}`} className="square_bg">{inputValue[i]}</span>
                  ))}
                </div>
                <div className="scramble_suggestion">
                  <h3>Gợi ý: </h3>
                  <p>{suggestion}</p>
                </div>
                <div className="field">
                  <input type="text" onChange={handleInputChange} value={inputValue} />
                  <button className="btnStart" type="button" onClick={handleButtonClick}>
                    Kiểm tra
                  </button>
                </div>
                {!!message && <div className="message"><p>{message}</p></div>}
              </>
            ) : (
              <div className="scramble_button">
                <div className="scramble_button-be">
                  <button className="start_game" type="button" onClick={handleStartGame}>
                    Bắt đầu!
                  </button>
                </div>
              </div>
            )}
            {isPlayOn && (
              <div className="scramble_button">
                <div className={`scramble_button-be ${index === questions.length - 1 ? "hide" : ""}`}>
                  <button className="start_game" type="button" onClick={handleRestart}>
                    Làm lại
                  </button>
                  <button className="start_game" onClick={handleNextQuestion} type="button"disabled={handleNextQuestion >= 5}>
                    Tiếp
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default WordScramble;
