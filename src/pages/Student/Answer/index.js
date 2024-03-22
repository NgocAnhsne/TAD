import "./style.scss";
import { IoIosArrowBack } from "react-icons/io";
import AnswerStudentImg from "~/components/asset/img/AnswerStudent.png";
function AnswerStudent() {
  return (
    <div className="answerStudent">
      <div className="answerStudent__header">
        <div className="answerStudent__header--wrap row-max-width">
          <div className="backBtn">
            <IoIosArrowBack />
          </div>
          <div className="answerStudent__header--number">
            <span className="answerStudent__header--number__item">1</span>/
            <span className="answerStudent__header--number__total">20</span>
          </div>
          <div className="answerStudent__header--score">
            <span className="answerStudent__header--score__text">Score: </span>
            <span className="answerStudent__header--score__number">1</span>
          </div>
        </div>
      </div>
      <div className="answerStudent__content">
        <div className="answerStudent__content--img">
          <img src={AnswerStudentImg} />
        </div>
        <div className="answerStudent__content--question">
          <div className="answerStudent__content--question__box">
            {/* <div className="answerStudent__content--question__box--fill">
            </div> */}
            <div className="answerStudent__content--question__box--text">
            ______ going to have to work hard to achieve your goals.
            </div>
          </div>
        </div>
      </div>
      <div className="answerStudent__answer">
            <div className="answerStudent__answer--list">
              <div className="answerStudent__answer--list__item">
                <button>Youre</button>
              </div>
              <div className="answerStudent__answer--list__item">
                <button>Yours</button>
              </div>
              <div className="answerStudent__answer--list__item">
                <button>Your</button>
              </div>
              <div className="answerStudent__answer--list__item">
                <button>You're</button>
              </div>
            
            </div>
      </div>
    </div>
  );
}

export default AnswerStudent;
