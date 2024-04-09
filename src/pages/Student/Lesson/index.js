import "./style.scss";
import lessonImg from "~/components/asset/img/quality_restoration_20240229152.jpg";

function LessonStudent() {
  
  return (
    <div className="lessonStudent">
      <div className="lessonStudent__title">
        <h1>Các bài học</h1>
      </div>
      <div className="lessonStudent__content">
        <div className="lessonStudent__content--list">
          <div className="lessonStudent__content--list__item">
            <div className="lessonStudent__content--list__item--left">
              <div className="lessonStudent__content--list__item--left__title">
                Bài học cơ bản cho người mất gốc
              </div>
              <div className="lessonStudent__content--list__item--left__btn">
                Xem thêm
              </div>
            </div>
            <div className="lessonStudent__content--list__item--right">
              <img src={lessonImg}/>
            </div>
          </div>
          <div className="lessonStudent__content--list__item lesson2">
            <div className="lessonStudent__content--list__item--left">
              <div className="lessonStudent__content--list__item--left__title">
                Bài học cơ bản cho người mất gốc
              </div>
              <div className="lessonStudent__content--list__item--left__btn">
                Xem thêm
              </div>
            </div>
            <div className="lessonStudent__content--list__item--right">
              <img src={lessonImg}/>
            </div>
          </div>
          <div className="lessonStudent__content--list__item lesson3">
            <div className="lessonStudent__content--list__item--left">
              <div className="lessonStudent__content--list__item--left__title">
                Bài học cơ bản cho người mất gốc
              </div>
              <div className="lessonStudent__content--list__item--left__btn">
                Xem thêm
              </div>
            </div>
            <div className="lessonStudent__content--list__item--right">
              <img src={lessonImg}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LessonStudent;
