import React, {
  Children,
  createContext,
  useContext,
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
    // NOTE 
    /**
     * Đối với func thì nên có chữ handle ở đầu để phân biệt nữa func và variables 
     * Đối với biến yes no -> thêm Is để có thể hiểu đúng sai (boolean)
     * Tận dụng lại state tránh lãng phí memories
     * 
     * 
     */




  let [index, setIndex] = useState(0);
  //thieu 'S'
  const [question, setQuestion] = useState([]); //data
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);

  let [result, setResult] = useState(false);
  // isChoose to check user that choosing the answer
  let [action, setAction] = useState({
    isChoose: false,
    answer: "",
  });
  // không cần cái này vì question.lenght đáp ứng rồi 
  const [questionLength, setQuestionLength] = useState(0);

  // có thể dùng question[index] thay thế tương tự
  const [currentQuestion, setCurrentQuestion] = useState();

  const navigate = useNavigate();

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];
  // const questions = Array.from({ length: numberOfQuestions }, (_, index) => index + 1);
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/question-by-lession/" + id
      );
      setQuestion(res.data.data);
      if (res.data.data) {
        setQuestion(res.data.data);
        setCurrentQuestion(res.data.data[index]);
        setQuestionLength(res.data.data.length);
      }
    } catch (err) {
      console.log("Something Wrong");
    }
  };


  const handleNextQuestion = () => {
     
      setAction({
      isChoose: false,
    answer: "",
      });
      option_array.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    // if(lock) return

    // setIndex(prev => prev++)
    //lock
    setIndex(++index);
    setCurrentQuestion(question[index]);
    // index phải thuộc range từ 0 đến array.lenght -1 
    // nếu index = 0 thì phím back phải bị hide 
    // nếu index = array.lenght thì ẩn next 

    // chọn 1 trong 2 cách 
    // nếu nộp bài thì handle lock không cho người dùng chỉnh thì không nên hiện đúng sai khi chọn
     // còn require người dùng phải chọn 1 đáp án trước khi next được 
  };

  const handleBack = () => {
    navigate(-1);
  };

  // Check isWrong
  // index -> find question and answer
  // event -> answer

  const handleCheckAns = async (event, index) => {
    // if use choosing answer -> return
    if (action.isChoose) return;

    const answer = event.target.value;
    const isRight = answer === question[index].answer ? true : false;
    setAction({ isChoose: true, answer });

    if (isRight) {
      setScore((prev) => prev + 1);
      event.target.classList.add("correct");
    } else {
      event.target.classList.add("wrong");
    }
  };

  console.log(action);

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
                    {questionLength}
                  </span>
                  {/* dap an : {currentQuestion.answer} */}
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
                      {/* ______ going to have to work hard to achieve your goals. */}
                      {index + 1}. {currentQuestion?.question_text}
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
                      action.answer !== currentQuestion?.answer_a
                    }
                    ref={Option1}
                    value={currentQuestion?.answer_a}
                    onClick={(e) => {
                      handleCheckAns(e, index);
                    }}
                  >
                    A. {currentQuestion?.answer_a}
                  </button>
                </div>
                <div className="answerStudent__content--bottom__list--item">
                  <button
                    disabled={
                      action.isChoose &&
                      action.answer !== currentQuestion?.answer_b
                    }
                    ref={Option2}
                    value={currentQuestion?.answer_b}
                    onClick={(e) => {
                      handleCheckAns(e, index);
                    }}
                  >
                    B. {currentQuestion?.answer_b}
                  </button>
                </div>
                <div className="answerStudent__content--bottom__list--item">
                  <button
                    disabled={
                      action.isChoose &&
                      action.answer !== currentQuestion?.answer_c
                    }
                    ref={Option3}
                    value={currentQuestion?.answer_c}
                    onClick={(e) => {
                      handleCheckAns(e, index);
                    }}
                  >
                    C. {currentQuestion?.answer_c}
                  </button>
                </div>
                <div className="answerStudent__content--bottom__list--item">
                  <button
                    disabled={
                      action.isChoose &&
                      action.answer !== currentQuestion?.answer_d
                    }
                    ref={Option4}
                    value={currentQuestion?.answer_d}
                    onClick={(e) => {
                      handleCheckAns(e, index);
                    }}
                  >
                    D. {currentQuestion?.answer_d}
                  </button>
                </div>
                <div className="answerStudent__content--bottom__btnNext">
                  <button
                    className="answerStudent__content--bottom__btnNext--btn"
                    onClick={handleNextQuestion}
                    disabled={!action.isChoose}
                  >
                    Next
                  </button>
                </div>
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
                            {(score / question.length) * 100}%
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
