import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import "./style.scss";
import { IoIosArrowBack } from "react-icons/io";
import AnswerStudentImg from "~/components/asset/img/AnswerStudent.png";
import successImg from "~/components/asset/img/image 27.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]); //data
  let [isLock, setIsLock] = useState(false);
  let [score, setScore] = useState(0);
  let [coin, setCoin] = useState(0);

  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();

  

  let [result, setResult] = useState(false);
  let [action, setAction] = useState({
    isChoose: false,
    answer: "",
  });


  const navigate = useNavigate();

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/question-by-lession/" + id
      );
      setQuestions(res.data.data);
      if (res.data.data) {
        setQuestions(res.data.data);
      }
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  

  const updateScore = async () => {
    try {
      const newCoin = user.coin + score;
      const updatedUser = { ...user, coin: newCoin };
      await axios.put(
        "http://127.0.0.1:8000/api/addcoin/" + user.id, updatedUser
      );
      localStorage.setItem("user", JSON.stringify(updatedUser));
      console.log(coin)
    } catch (error) {
      console.log("Error updating score:", error);
      
    }
    navigate(-1);
  };

  

  const historyLesson = async () => {
    try{
      let history =({
        id_user: user.id,
        id_create:"0",
        type:"lesson_type",
        id_lesson_test: id,
        score: score
      })
      console.log(score);
     await axios.post("http://127.0.0.1:8000/api/history/create",history);

    }catch(error){
      console.log("Something Wrong");
    }
  }

  const handleNextQuestion = () => {
    setIndex((prevIndex) => prevIndex + 1); 
    setAction({
      isChoose: false,
      answer: "",
    });
    option_array.forEach((option) => {
      option.current.classList.remove("wrong");
      option.current.classList.remove("correct");
    });
  };

  const handleSendRedirect = () => {
    setResult(true);
  };

  const handleBack = () => {
    updateScore();
    historyLesson();
  };

  const handleCheckAns = async (event, index) => {
    if (action.isChoose) return;

    const answer = event.target.value;
    const isRight = answer === questions[index].answer ? true : false;
    setAction({ isChoose: true, answer });

    if (isRight) {
      setScore((prev) => prev + 1);
      event.target.classList.add("correct");
    } else {
      event.target.classList.add("wrong");
    }
  };



  return (
    <>
      <div className="answerStudent">
        {result ? (
          <></>
        ) : (
          <>
            <div className="answerStudent__header">
              <div className="answerStudent__header--wrap row-max-width">
                <Link onClick={handleBack} className="backBtn">
                  <IoIosArrowBack />
                </Link>
                <div className="answerStudent__header--number">
                  <span className="answerStudent__header--number__item">
                    {index + 1}
                  </span>
                  /
                  <span className="answerStudent__header--number__total">
                    {questions.length}
                  </span>
                </div>
                <div className="answerStudent__header--score">
                  <span className="answerStudent__header--score__text">
                    Score:{" "}
                  </span>
                  <span className="answerStudent__header--score__number">
                    {score}
                  </span>
                </div>
              </div>
            </div>
            <div className="answerStudent__content">
              <div className="answerStudent__content--top">
                <div className="answerStudent__content--top__img">
                  <img src={AnswerStudentImg} />
                </div>
                <div className="answerStudent__content--top__question">
                  <div className="answerStudent__content--top__question--box">
                    <div className="answerStudent__content--qtop__question--box__text">
                      {index + 1}. {questions[index]?.question_text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="answerStudent__content--bottom">
              <div className="answerStudent__content--bottom__list">
                <div className="answerStudent__content--bottom__list--item">
                  <button
                    disabled={
                      action.isChoose &&
                      action.answer !== questions[index]?.answer_a
                    }
                    ref={Option1}
                    value={questions[index]?.answer_a}
                    onClick={(e) => {
                      handleCheckAns(e, index);
                    }}
                  >
                    A. {questions[index]?.answer_a}
                  </button>
                </div>
                <div className="answerStudent__content--bottom__list--item">
                  <button
                    disabled={
                      action.isChoose &&
                      action.answer !== questions[index]?.answer_b
                    }
                    ref={Option2}
                    value={questions[index]?.answer_b}
                    onClick={(e) => {
                      handleCheckAns(e, index);
                    }}
                  >
                    B. {questions[index]?.answer_b}
                  </button>
                </div>
                <div className="answerStudent__content--bottom__list--item">
                  <button
                    disabled={
                      action.isChoose &&
                      action.answer !== questions[index]?.answer_c
                    }
                    ref={Option3}
                    value={questions[index]?.answer_c}
                    onClick={(e) => {
                      handleCheckAns(e, index);
                    }}
                  >
                    C. {questions[index]?.answer_c}
                  </button>
                </div>
                <div className="answerStudent__content--bottom__list--item">
                  <button
                    disabled={
                      action.isChoose &&
                      action.answer !== questions[index]?.answer_d
                    }
                    ref={Option4}
                    value={questions[index]?.answer_d}
                    onClick={(e) => {
                      handleCheckAns(e, index);
                    }}
                  >
                    D. {questions[index]?.answer_d}
                  </button>
                </div>
              </div>
              <div
                className={`answerStudent__content--bottom__btnNext ${
                  index == questions.length - 1 ? "hide" : ""
                }`}
              >
                <button
                  className="answerStudent__content--bottom__btnNext--btn"
                  onClick={handleNextQuestion}
                  disabled={!action.isChoose}
                >
                  Next
                </button>
              </div>
              <div
                className={`answerStudent__content--bottom__btnNext ${
                  index !== questions.length - 1 ? "hide" : ""
                }`}
              >
                <button
                  className="answerStudent__content--bottom__btnNext--btn"
                  disabled={!action.isChoose}
                  onClick={handleSendRedirect}
                >
                  Finish
                </button>
              </div>
            </div>
          </>
        )}
        {result ? (
          <>
            <div>
              <div className="successStudent">
                <div className="successStudent__content">
                  <div className="successStudent__content--wrap">
                    <div className="successStudent__content--img">
                      <img src={successImg} />
                    </div>
                    <div className="successStudent__content--info">
                      <div className="successStudent__content--info__title">
                        Hoàn thành bài học!
                      </div>
                      <div className="successStudent__content--info__box">
                        <div className="successStudent__content--info__box--score">
                          <h2>Tổng điểm</h2>
                          <div className="successStudent__content--info__box--score__content">
                            {score}
                          </div>
                        </div>
                        <div className="successStudent__content--info__box--accuracy">
                          <h2>Chính xác</h2>
                          <div className="successStudent__content--info__box--accuracy__content">
                            {(score / questions.length) * 100}%
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
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div></div>
    </>
  );
};
export default Quiz;
