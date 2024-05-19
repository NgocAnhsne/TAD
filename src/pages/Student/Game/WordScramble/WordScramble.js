import React, { useState, useEffect } from "react";
import "./WordScramblestyle.scss";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

// const WORDS = [
// 	"React",
// 	"Next",
// 	"Website",
// 	"Engineer",
// 	"TypeScript",
// 	"Developer",
// 	"Dream Job",
// 	"Time to code",
// ];

const WordScramble = () => {
  const navigate = useNavigate();

  const [word, setWord] = useState("");

  const [rankPoint, setRankPoint] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    fetchWord();
  }, [id]);
  const [score, setScore] = useState(0);

  const [index, setIndex] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [attempts, setAttempts] = useState(5);
  const [maxAttempts] = useState(5);
  const [suggestion, setSuggestion] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const [isPlayOn, setIsPlayOn] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [correctWord, setCorrectWord] = useState("");
  const [scrambledWord, setScrambledWord] = useState("");

  const [message, setMessage] = useState("");

  const [victory, setVictory] = useState(false);
  const [showTrueAns, setShowTrueAns] = useState(false);
  const [showFalseAns, setShowFalseAns] = useState(false);

  let [action, setAction] = useState({
    isChoose: false,
    answer: "",
  });

  const user = JSON.parse(localStorage.getItem("user"));

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
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const updateRank = async () => {
    try {
      const updatedUser = { ...user, rank: rankPoint };
      await axios.put(
        "http://127.0.0.1:8000/api/addrank/" + user.id,
        updatedUser
      );
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (error) {
      console.log("Error updating score:", error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value.toUpperCase());
  };

  const handleSendRedirect = () => {
    setVictory(true);
  };

  const handleButtonClick = () => {
    if (inputValue !== "") {
      if (correctWord === inputValue) {
        setRankPoint(rankPoint + 2);
        setScore((prev) => prev + 1);
        setMessage("Đúng rồi !!!");
        setRankPoint(rankPoint + 2);
        setAttempts(5);
        setAnsweredCount((prevCount) => prevCount + 1);

        updateRank();
      }
      if (rankPoint + 2 === 10 || answeredCount >= 5) {
        setVictory(true);
        updateRank();
      } else {
        setShowTrueAns(true);
        setTimeout(() => {
          setShowTrueAns(false);
          fetchWord();
        }, 2000);
      }
    } else {
      setMessage("Oh sai mất rồi :<");
      setScore((prev) => prev - 1);
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

  const handleStartGame = () => {
    setIsPlayOn(true);
    setInputValue("");
    setMessage("");

    const wordUpper = word.toUpperCase();
    setCorrectWord(wordUpper);
    setScrambledWord(constructScrambledWord(wordUpper));
    //setScrambledWord(constructScrambledWordModernJS(wordUpper));
  };

  const constructScrambledWord = (word) => {
    const shuffledArray = word.split("");
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray.join("");
  };

  const constructScrambledWordModernJS = (word) => {
    const shuffledArray = word.split("").reduce(
      (newArr, _, i) => {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        return newArr;
      },
      [...word]
    );

    return shuffledArray.join("");
  };
  const handleBack = () => {
    navigate(-1);
  };
  const handleRestart = () => {
    setAttempts(5);
    setRankPoint(0);
    setGameOver(false);
    setVictory(false);
    fetchWord();
  };
  // useEffect(() => {
  // 	let clearMessage;
  // 	if (message === "Wrong Answer") {
  // 		clearMessage = setTimeout(() => setMessage(""), 800);
  // 	}

  // 	return () => {
  // 		if (clearMessage) {
  // 			clearTimeout(clearMessage);
  // 		}
  // 	};
  // }, [message]);

  return (
    <>
      <div className="word_scramble">
        
        <div className="answerStudent__header--wrap word_scramble--header">
          <Link onClick={handleBack} className="backBtn">
            <IoIosArrowBack />
          </Link>
          <h1>Từ vựng bí ẩn</h1>
          <div className="answerStudent__header--score">
            <span className="answerStudent__header--score__text">Điểm: </span>
            <span className="answerStudent__header--score__number">
              {score}
            </span>
          </div>
        </div>
        <div className="content">
          {isPlayOn ? (
            <>
              <p className="scrambled_word">{scrambledWord}</p>
              <div className="board">
                {correctWord.split("").map((el, i) => (
                  <span key={`${el}_${i}`} className="square_bg">
                    {inputValue[i]}
                  </span>
                ))}
              </div>
			  <div className="scramble_suggestion">
				<h3>Gợi ý: </h3>
				<p>{suggestion}</p>
			  </div>
              <div className="field">
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={inputValue}
                />

                <button
                  className="btnStart"
                  type="button"
                  onClick={handleButtonClick}
                >
                  Kiểm tra
                </button>
              </div>
			  {!!message && (
          <div className="message">
            <p> {message}</p>

          </div>
        )}
            </>
          ) : (
            <div className="scramble_button">
            <button
              className="start_game"
              type="button"
              onClick={handleStartGame}
            >
              Bắt đầu!
            </button>

</div>
          )}

          {isPlayOn && (
            <div className="scramble_button">
              <div
                className={`scramble_button${
                  index == word.length - 1 ? "hide" : ""
                }`}
              >
                <button
                  className={`start_game`}
                  type="button"
                  onClick={handleStartGame}
                >
                  Làm lại
                </button>
                <button
                  className="start_game"
                  onClick={handleButtonClick}
                  type="button"
                >
                  Tiếp
                </button>
              </div>
              <div
                className={`answerStudent__content--bottom__btnNext ${
                  index !== word.length - 1 ? "hide" : ""
                }`}
              >
                <button
                  className="answerStudent__content--bottom__btnNext--btn"
                  disabled={!action.isChoose}
                  onClick={handleSendRedirect}
                >
                  Kết thúc 
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WordScramble;
