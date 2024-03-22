import "./style.scss";
import bgRank from "~/components/asset/img/bgRank.png";
import { FaMedal } from "react-icons/fa";

function Rank() {
  return (
    <div className="rank">
      <div className="rank__background">
        <img src={bgRank} />
      </div>
      <div className="rank__title">
        <h1>Bảng xếp hàng</h1>
      </div>
      <div className="rank__content">
        <div className="rank__content--box">
          <div className="rank__content--box--list">
            <div className="rank__content--box--list__item">
              <div className="rank__content--box--list__item--left">
                <div className="rank__content--box--list__item--left__ord">
                  <div className="rank__content--box--list__item--left__ord--number">
                    1
                  </div>
                </div>
                <div className="rank__content--box--list__item--left__name">
                  <div className="rank__content--box--list__item--left__name--text">
                    Karina
                  </div>
                </div>
              </div>
              <div className="rank__content--box--list__item--right">
                <div className="rank__content--box--list__item--right__score">
                  129
                </div>
                <div className="rank__content--box--list__item--right__medal">
                  <FaMedal />
                </div>
              </div>
            </div>
            <div className="rank__content--box--list__item">
              <div className="rank__content--box--list__item--left">
                <div className="rank__content--box--list__item--left__ord">
                  <div className="rank__content--box--list__item--left__ord--number">
                    2
                  </div>
                </div>
                <div className="rank__content--box--list__item--left__name">
                  <div className="rank__content--box--list__item--left__name--text">
                    Winter
                  </div>
                </div>
              </div>
              <div className="rank__content--box--list__item--right">
                <div className="rank__content--box--list__item--right__score">
                  129
                </div>
                <div className="rank__content--box--list__item--right__medal">
                  <FaMedal />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rank__content--level">shasbcjj</div>
      </div>
    </div>
  );
}

export default Rank;
