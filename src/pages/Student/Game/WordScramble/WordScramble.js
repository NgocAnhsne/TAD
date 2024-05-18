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
	let [score, setScore] = useState(0);

  const [index, setIndex] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);

	const [isPlayOn, setIsPlayOn] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [correctWord, setCorrectWord] = useState("");
	const [scrambledWord, setScrambledWord] = useState("");

	const [message, setMessage] = useState("");

	const user = JSON.parse(localStorage.getItem("user"));

	const fetchWord = () => {
		fetch("http://127.0.0.1:8000/api/wordl-by-wordle/" + id)
		.then((response) => response.json())
		.then((data) => {
			const selectWord = () =>{
				const randomIndex = Math.floor(Math.random() * data.data.length);
				const randomWord = data.data[randomIndex].english;
				const randomSuggestion = data.data[randomIndex].description;
				setWord(randomWord);

			}
		})
		.catch((error) => {
			console.error("Error fetching data:", error);
		  });
	}

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

	

	const handleButtonClick = () => {
		if (inputValue !== "") {
			if (correctWord === inputValue) {
				setRankPoint(rankPoint + 2);
				setScore((prev) => prev + 1);
				setMessage("Đúng rồi !!!");
				updateRank();
			} else {
				setScore((prev) => prev - 1);
				setMessage("Oh sai mất rồi :<");
			}
		}
	};

	const handleStartGame = () => {
		setIsPlayOn(true);
		setInputValue("");
		setMessage("");

		const word = fetchWord().toUpperCase();
		setCorrectWord(word);
		setScrambledWord(constructScrambledWord(word));
		//setScrambledWord(constructScrambledWordModernJS(word));
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
		<div className='word_scramble'>
			{!!message && (
				<div className='message'>
					<p> {message}</p>
				</div>
			)}

			<div className="answerStudent__header--wrap word_scramble--header">
                <Link onClick={handleBack} className="backBtn">
                  <IoIosArrowBack />
                </Link>
			<h1>Từ vựng bí ẩn</h1>
                <div className="answerStudent__header--score">
                  <span className="answerStudent__header--score__text">
                    Score:{" "}
                  </span>
                  <span className="answerStudent__header--score__number">
                    {score}
                  </span>
                </div>
              </div>
			<div className='content'>
				{isPlayOn ? (
					<>
						<p className='scrambled_word'>{scrambledWord}</p>
						<div className='board'>
							{correctWord.split("").map((el, i) => (
								<span key={`${el}_${i}`} className='square_bg'>
									{inputValue[i]}
								</span>
							))}
						</div>
						<div className='field'>
							<input
							
								type='text'
								onChange={handleInputChange}
								value={inputValue}
							/>

							<button className="btnStart" type='button' onClick={handleButtonClick}>
								Nhập
							</button>
						</div>
					</>
				) : (
					<button
						className='start_game'
						type='button'
						onClick={handleStartGame}
					>
						Bắt đầu!
					</button>
				)}

				{isPlayOn && (
					<button
						className='start_game new'
						type='button'
						onClick={handleStartGame}
					>
						Làm lại
					</button>
				)}
			</div>
		</div>
	);
};

export default WordScramble;
