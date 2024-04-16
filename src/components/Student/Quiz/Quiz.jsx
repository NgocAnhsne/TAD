import { useRef, useState } from "react";
import axios from 'axios';

import "./style.scss";
import { IoIosArrowBack } from "react-icons/io";
import AnswerStudentImg from "~/components/asset/img/AnswerStudent.png";
import { data } from "./data"
import SuccessStudent from "~/pages/Student/Success";

const Quiz = () => {
    let [index, setIndex] = useState(0);

    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(prev => prev + 1);
            }
            else {
                e.target.classList.add("wrong");
                setLock(true);
                option_array[question.ans - 1].current.classList.add("correct")
            }
        }
    }

    const next = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            option_array.map((option) => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            })
        }
    }
    return (
        <div className="answerStudent">
            {result ? <></> : <>
                <div className="answerStudent__header">
                    <div className="answerStudent__header--wrap row-max-width">
                        <div className="backBtn">
                            <IoIosArrowBack />
                        </div>
                        <div className="answerStudent__header--number">
                            <span className="answerStudent__header--number__item">{index + 1}</span>/
                            <span className="answerStudent__header--number__total">{data.length}</span>
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
                                    {index + 1}. {question.question}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="answerStudent__content--bottom">
                        <div className="answerStudent__content--bottom__list">
                            <div className="answerStudent__content--bottom__list--item">
                                <button ref={Option1} onClick={(e) => { checkAns(e, 1) }}>{question.option1}</button>
                            </div>
                            <div className="answerStudent__content--bottom__list--item">
                                <button ref={Option2} onClick={(e) => { checkAns(e, 2) }}>{question.option2}</button>
                            </div>
                            <div className="answerStudent__content--bottom__list--item">
                                <button ref={Option3} onClick={(e) => { checkAns(e, 3) }}>{question.option3}</button>
                            </div>
                            <div className="answerStudent__content--bottom__list--item">
                                <button ref={Option4} onClick={(e) => { checkAns(e, 4) }}>{question.option4}</button>
                            </div>
                        </div>
                        <div className="answerStudent__content--bottom__btnNext">
                            <button onClick={next}>
                                Next
                            </button>
                        </div>
                    </div>

                </div>
            </>}
            {result?<>
            <div>
                <SuccessStudent/>
            </div>
            </>:<></>}
        </div>
    );
}
export default Quiz