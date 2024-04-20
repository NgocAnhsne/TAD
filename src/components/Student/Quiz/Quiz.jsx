import React, { Children, createContext, useContext, useEffect, useRef, useState } from "react";
import './style.scss';
import { IoIosArrowBack } from "react-icons/io";
import AnswerStudentImg from "~/components/asset/img/AnswerStudent.png";
import successImg from '~/components/asset/img/image 27.png'
import { useParams } from "react-router-dom";
import axios from "axios";

const Quiz = () => {
    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState([]);//data
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    // const questions = Array.from({ length: numberOfQuestions }, (_, index) => index + 1);

    const checkAns = (e, answer) => {
        if (lock === false) {
            if (question.answer == answer) {
                e.target.classList.add("correct");
                setLock(true);
                console.log(answer)
            //     setScore(prev => prev + 1);
            // } else {
            //     e.target.classList.add("wrong");
            //     setLock(true);
            //     option_array[question.answer - 1].current.classList.add("correct");
            }

        }
    }

    const next = () => {
        if (lock === true) {
            if (index === question.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion();
            setLock(false);
            option_array.map((option) => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    }

    //data
    const { id } = useParams();
    useEffect(() => {
        fetchData();
    }, [id])

    const fetchData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:8000/api/question-by-lession/" + id);
            setQuestion(res.data.data)
           
      
        } catch (err) {
            console.log("Something Wrong");
        }
    }

    var moment = require('moment')


    const questionLength = question.length;
    return (
        <><div className="answerStudent">
            <div className="answerStudent__header">
                <div className="answerStudent__header--wrap row-max-width">
                    <div className="backBtn">
                        <IoIosArrowBack />
                    </div>
                    <div className="answerStudent__header--number">
                        <span className="answerStudent__header--number__item">{index + 1}</span>/
                        <span className="answerStudent__header--number__total">{questionLength}</span>
                    </div>
                    <div className="answerStudent__header--score">
                        <span className="answerStudent__header--score__text">Score: </span>
                        <span className="answerStudent__header--score__number">{score}</span>
                    </div>
                </div>
            </div>
            {question.map((question) =>
            (
                <div className="answerStudent__content">
                    <div className="answerStudent__content--top">
                        <div className="answerStudent__content--top__img">
                            <img src={AnswerStudentImg} />
                        </div>
                        <div className="answerStudent__content--top__question">
                            <div className="answerStudent__content--top__question--box">

                                <div className="answerStudent__content--qtop__question--box__text">
                                    {/* ______ going to have to work hard to achieve your goals. */}
                                    {index + 1}. {question.question_text}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="answerStudent__content--bottom">
                        <div className="answerStudent__content--bottom__list">
                            <div className="answerStudent__content--bottom__list--item">
                                <button ref={Option1} onClick={(e) => { checkAns(e, 1); }}>A. {question.answer_a}</button>
                            </div>
                            <div className="answerStudent__content--bottom__list--item">
                                <button ref={Option2} onClick={(e) => { checkAns(e, 2); }}>B. {question.answer_b}</button>
                            </div>
                            <div className="answerStudent__content--bottom__list--item">
                                <button ref={Option3} onClick={(e) => { checkAns(e, 3); }}>C. {question.answer_c}</button>
                            </div>
                            <div className="answerStudent__content--bottom__list--item">
                                <button ref={Option4} onClick={(e) => { checkAns(e, 4); }}>D. {question.answer_d}</button>
                            </div>
                        </div>
                        <div className="answerStudent__content--bottom__btnNext">
                            <button onClick={next}>
                                Next
                            </button>
                        </div>
                    </div>

                </div>

            ))}


        </div><div>

            </div></>

    )
}
export default Quiz;