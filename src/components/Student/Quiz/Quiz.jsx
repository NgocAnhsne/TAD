import React, { Children, createContext, useContext, useEffect, useRef, useState } from "react";
import './style.scss';
import { IoIosArrowBack } from "react-icons/io";
import AnswerStudentImg from "~/components/asset/img/AnswerStudent.png";
import successImg from '~/components/asset/img/image 27.png'
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Quiz = () => {
    let [index, setIndex] = useState(0);
    const [question, setQuestion] = useState([]);//data
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);
    const [ans, setAns] = useState([]);
    const [questionLength, setQuestionLength] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState();

    const navigate = useNavigate();

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];
    // const questions = Array.from({ length: numberOfQuestions }, (_, index) => index + 1);
    //data
    const { id } = useParams();
    useEffect(() => {
        fetchData();
    }, [id])

    const fetchData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/question-by-lession/" + id);
            setQuestion(res.data.data)
            if (res.data.data) {
                setQuestion(res.data.data);
                setCurrentQuestion(res.data.data[index])
                setQuestionLength(res.data.data.length);
            }

        } catch (err) {
            console.log("Something Wrong");
        }
    }

    const checkAns = async (event, answer) => {
        // if (lock === false && question.length > 0) {
        const newAnsData = await question.find((item) => item.answer == answer);
        if (!!newAnsData) {
            event.target.classList.add("correct");
            setLock(true);
            setScore(prev => prev + 1);
            return;
        } else {
            event.target.classList.add("wrong");
            setLock(true)
            // option_array[newAnsData - 1].current.classList.add("correct"); // Đánh dấu câu trả lời đúng
            return;

        }
        //      // console.log(newAnsData);
        //      // if (question.answer == newAnsData) {
        //      //     e.target.classList.add("correct");
        //      //     setLock(true);
        //      //     setScore(prev => prev + 1);
        //      //     console.log(currentQuestion.answer);
        //      // } else {
        //      //     e.target.classList.add("wrong");
        //      //     setLock(true);
        //      //     option_array[currentQuestion.answer - 1].current.classList.add("correct"); // Đánh dấu câu trả lời đúng
        //      // }
        // }
    }

    const next = () => {
        // console.log({question});
        if (lock === true) {
            if (index === question.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setCurrentQuestion(question[index]);
            setLock(false);
            option_array.map((option) => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    }

    const handleBack = () => {
        navigate(-1);

    }



    // var moment = require('moment');
    return (
        <><div className="answerStudent">
            {result ? <></> : <>
                <div className="answerStudent__header">
                    <div className="answerStudent__header--wrap row-max-width">
                        <Link onClick={handleBack} className="backBtn">
                            <IoIosArrowBack />
                        </Link>
                        <div className="answerStudent__header--number">
                            <span className="answerStudent__header--number__item">{index + 1}</span>/
                            <span className="answerStudent__header--number__total">{questionLength}</span>
                            {/* dap an : {currentQuestion.answer} */}
                        </div>
                        <div className="answerStudent__header--score">
                            <span className="answerStudent__header--score__text">Score: </span>
                            <span className="answerStudent__header--score__number">{score}</span>
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
                            <button ref={Option1} onClick={(e) => { checkAns(e, currentQuestion?.answer_a);}}>A. {currentQuestion?.answer_a}</button>
                        </div>
                        <div className="answerStudent__content--bottom__list--item">
                            <button ref={Option2} onClick={(e) => { checkAns(e, currentQuestion?.answer_b); }}>B. {currentQuestion?.answer_b}</button>
                        </div>
                        <div className="answerStudent__content--bottom__list--item">
                            <button ref={Option3} onClick={(e) => { checkAns(e, currentQuestion?.answer_c); }}>C. {currentQuestion?.answer_c}</button>
                        </div>
                        <div className="answerStudent__content--bottom__list--item">
                            <button ref={Option4} onClick={(e) => { checkAns(e, currentQuestion?.answer_d); }}>D. {currentQuestion?.answer_d}</button>
                        </div>
                        <div className="answerStudent__content--bottom__btnNext">
                            <button className="answerStudent__content--bottom__btnNext--btn" onClick={next}>
                                Next
                            </button>
                            {/* {
                            index !== question.length - 1
                            ?
                            :
                            
                            <Link className="answerStudent__content--bottom__btnNext--btn" onClick={handleSendResult} to={'/student/success'}>
                                Xem kết quả
                            </Link>
                            } */}
                        </div>
                    </div>
                </div>
            </>}
            {result ? <>
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
                                            <h2>
                                                Tổng điểm
                                            </h2>
                                            <div className="successStudent__content--info__box--score__content">
                                                {score}
                                            </div>
                                        </div>
                                        <div className="successStudent__content--info__box--accuracy">
                                            <h2>
                                                Chính xác
                                            </h2>
                                            <div className="successStudent__content--info__box--accuracy__content">
                                                {(score / question.length) * 100}%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="successStudent__content--btn">
                                        <button onClick={handleBack}>
                                            Quay về
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </> : <></>}
        </div><div>
            </div></>
    )
}
export default Quiz;