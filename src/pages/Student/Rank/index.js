import "./style.scss";
import bgRank from "~/components/asset/img/bgRank.png";
import rankImg from "~/components/asset/img/quality_restoration_20240229152.jpg";
import medal from "~/components/asset/img/medal1.jpg";

function Rank() {
  return (
    <div className="rank">

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
                    <img src={medal} />
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
                    120
                  </div>
                  <div className="rank__content--box--list__item--right__medal">
                    <img src={medal} />
                  </div>
                </div>
              </div>
              <div className="rank__content--box--list__item">
                <div className="rank__content--box--list__item--left">
                  <div className="rank__content--box--list__item--left__ord">
                    <div className="rank__content--box--list__item--left__ord--number">
                      3
                    </div>
                  </div>
                  <div className="rank__content--box--list__item--left__name">
                    <div className="rank__content--box--list__item--left__name--text">
                      Giselle
                    </div>
                  </div>
                </div>
                <div className="rank__content--box--list__item--right">
                  <div className="rank__content--box--list__item--right__score">
                    90
                  </div>
                  <div className="rank__content--box--list__item--right__medal">
                    <img src={medal} />
                  </div>
                </div>
              </div>
              <div className="rank__content--box--list__item">
                <div className="rank__content--box--list__item--left">
                  <div className="rank__content--box--list__item--left__ord">
                    <div className="rank__content--box--list__item--left__ord--number">
                      4
                    </div>
                  </div>
                  <div className="rank__content--box--list__item--left__name">
                    <div className="rank__content--box--list__item--left__name--text">
                      MinCheon
                    </div>
                  </div>
                </div>
                <div className="rank__content--box--list__item--right">
                  <div className="rank__content--box--list__item--right__score">
                    88
                  </div>
                  {/* <div className="rank__content--box--list__item--right__medal">
                  <img src={medal}/>
                </div> */}
                </div>
              </div>
              <div className="rank__content--box--list__item">
                <div className="rank__content--box--list__item--left">
                  <div className="rank__content--box--list__item--left__ord">
                    <div className="rank__content--box--list__item--left__ord--number">
                      5
                    </div>
                  </div>
                  <div className="rank__content--box--list__item--left__name">
                    <div className="rank__content--box--list__item--left__name--text">
                      Baekhyun
                    </div>
                  </div>
                </div>
                <div className="rank__content--box--list__item--right">
                  <div className="rank__content--box--list__item--right__score">
                    80
                  </div>
                  {/* <div className="rank__content--box--list__item--right__medal">
                  <img src={medal}/>
                </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="rank__content--level">
            <div className="rank__content--level__announce">
              <div className="rank__content--level__announce--title">
                Học tập. Kiếm KN. Thi đua.
              </div>
              <div className="rank__content--level__announce--text">
                Kiếm thật nhiều KN từ các bài học để thi đua với những người học
                khác trên bảng xếp hạng hằng tuần.
              </div>
              <div className="rank__content--level__announce--img">
                <img src={rankImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Rank;
