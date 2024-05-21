import React, { useEffect, useState } from "react";
import "./style.scss";
import SingleCard from "~/components/Student/Game/SingleCard";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import background from "~/components/asset/img/AnswerStudent.png";
import cogai26 from "~/components/asset/img/image 26.png";

function Game() {
  const { id } = useParams();
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [numPairsToShow, setNumPairsToShow] = useState(8);
  
  const [popupData, setPopupData] = useState({
    english: "",
    vietnamese: "",
    description: "",
    pronounce: "",
    type: "",
  });

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/api/wordl-by-wordle/" + id);
      const limitedCardData = result.data.data.slice(0, numPairsToShow);
      setCardData(limitedCardData);
    } catch (err) {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    if (cardData.length > 0) {
      shuffleCards();
    }
  }, [cardData]);

  useEffect(() => {
    if (matchedPairs === cardData.length * 2) {
      setGameComplete(true);
      updateRank();
    }
  }, [matchedPairs, cardData.length]);

  const shuffleCards = () => {
    const shuffledCards = [...cardData, ...cardData]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: card.id + "_1", matched: false }))
      .map((card) => ({ ...card, id: card.id + "_2", matched: false }));

    setCards(shuffledCards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
    setMatchedPairs(0);
    setGameComplete(false);
  };

  const handleChoice = (card) => {
    if (!disabled && !card.matched) {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
      if (choiceOne && choiceTwo) {
        setDisabled(true);
        if (choiceOne.id === choiceTwo.id) {
          setCards((prevCards) => {
            return prevCards.map((prevCard) => {
              if (prevCard.id === choiceOne.id || prevCard.id === choiceTwo.id) {
                return { ...prevCard, matched: true };
              }
              return prevCard;
            });
          });
          setMatchedPairs((prevPairs) => prevPairs + 2);
          if (matchedPairs + 2 === cardData.length) {
            updateRank();
          }
        } else {
          setTimeout(resetTurn, 1000);
        }
      }
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.id === choiceTwo.id) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.id === choiceOne.id) {
              return {
                ...card,
                matched: true,
                english: card.english,
                vietnamese: card.vietnamese,
                description: card.description,
                pronounce: card.pronounce,
                type: card.type,
              };
            } else {
              return card;
            }
          });
        });
        setMatchedPairs((prevPairs) => prevPairs + 2);
        resetTurn();
        setTimeout(() => {
          setShowPopup(true);
          setPopupData({
            english: choiceOne.english,
            vietnamese: choiceOne.vietnamese,
            description: choiceOne.description,
            pronounce: choiceOne.pronounce,
            type: choiceOne.type,
          });
        }, 700);
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo, disabled]);
  

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const goBack = () => {
    navigate(-1);
  };

  const updateRank = async () => {
    try {
      const newCoin = user.coin + matchedPairs;
      const updatedUser = { ...user, coin: newCoin };
      await axios.put("http://127.0.0.1:8000/api/addcoin/" + user.id, updatedUser); 
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (error) {
      console.log("Error updating score:", error);
    }
  };

  return (
    <div className="game">
      <img className="background" src={background} alt="background"></img>
      <img className="background2" src={cogai26} alt="cogai26"></img>
      <div className="game_header">
        <div className="game_icon" onClick={goBack}>
          <IoIosArrowBack />
        </div>
        <div className="game_score">
          Turn: <b>{turns}</b>
        </div>
        <div className="game_score">
          Score: <b>{matchedPairs}</b>
        </div>
        {gameComplete && (
          <Link to="/student/game">
            <div className="game_message">Chơi tiếp</div>
          </Link>
        )}
      </div>
      <div className="App">
        <div className="game_reset">
          <button onClick={shuffleCards}>Reset Game</button>
        </div>

        <div className="card_grid">
          {cards.map((card, index) => (
            <SingleCard
              key={index}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
      </div>
      {showPopup && (
        <div>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <div className="popup_inner">
              <h4>Thông tin đáp án</h4>
              <p>English: {popupData.english}</p>
              <p>VietNamese: {popupData.vietnamese}</p>
              <p>Description: {popupData.description}</p>
              <p>Type: {popupData.type}</p>
              <p>Pronunciation: {popupData.pronounce}</p>
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
