import "./style.scss";
import bgRank from "~/components/asset/img/bgRank.png";
import rankImg from "~/components/asset/img/quality_restoration_20240229152.jpg";
import medal from "~/components/asset/img/medal1.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Upload from "~/pages/Upload";
import firstRank from "~/components/asset/img/gold.png";
import secondRank from "~/components/asset/img/silver_rank.png";
import thirdRank from "~/components/asset/img/bronze.png";
import star from "~/components/asset/img/star-rank-upd.gif"

function Rank() {
  const [isVisibleLoading, setIsVisibleLoading] = useState(true);
  const [lessionData, setLessionData] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const width = `${(user.score / 10) * 10}%`;
  console.log(user.name)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/score");
      setLessionData(result.data.data);
      setIsVisibleLoading(false);
      console.log(result.data.data);
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  return (
    <div className="rank">
      <div className="rank__title">
        <h1>Bảng xếp hạng</h1>
      </div>
      <div className="rank__content">
        <div className="rank__content--box">
          <div className="rank__content--box--list">
            {isVisibleLoading ? (
              <div className="loading_screen">
                <Upload />
              </div>
            ) : lessionData.length > 0 ? (
              lessionData.map((item, index) => (
                <div className={`rank__content--box--list__item ${index === 0 ? 'toprank-bg' : ''}`}>
                  <div className="rank__content--box--list__item--left">
                    <div className="rank__content--box--list__item--left__ord">
                      <div className="rank__content--box--list__item--left__ord--number">
                        {index + 1}
                      </div>
                    </div>
                    <div className="rank__content--box--list__item--left__name">
                    <div className={`rank__content--box--list__item--left__name--text ${index === 0 ? 'toprank-bg' : ''}`}>
                        {item.name}
                      </div>
                    </div>
                    <div className="rank__content--box--list__item--left__name">
                      <div className={`rank__content--box--list__item--left__name--text ${index === 0 ? 'toprank-bg' : ''}`}>
                      {user.name === item.name && <div className="rank__content--box--list__item--left__user"></div>}
                      </div>
                    </div>
                    
                  </div>
                  <hr />
                  {index === 0 && (
                    <div className="rank__content--box--list__item--left__medal">
                      <img src={star} alt="Second Rank" />
                      <img src={firstRank} alt="First Rank" />
                    </div>
                  )}
                  {index === 1 && (
                    <div className="rank__content--box--list__item--left__medal">
                      <img src={secondRank} alt="Second Rank" />
                    </div>
                  )}
                  {index === 2 && (
                    <div className="rank__content--box--list__item--left__medal">
                      <img src={thirdRank} alt="Third Rank" />
                    </div>
                  )}
                  <div className="rankServe__container--content__right">
                    <div className={`rank__content--box--list__item--right__score ${index === 0 ? 'toprank-bg' : ''}`}>
                      LV:{item.score}
                    </div>
                    <div className="rank__content--box--list__item--right__medal"></div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rank__content--box--list__item--warn">
                Bảng xếp hạng đang bảo trì...
                <br />
                Vui lòng thử lại sau
              </div>
            )}
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
              <img src={rankImg} alt="Rank Img" />
            </div>
          </div>
          <div className="rank__content--level__announce">
            <div className="rank__content--level__announce--title">
              <div style={{width:"100%"}}>Cấp độ: {Math.floor(user.score / 10)}</div>
            </div>
            <div className="rank__content--level__announce--text">
            <div style={{fontWeight:800,display:"flex", alignItems:"center"}} className="profileStudent__left--personal__info--role">
               
              <div className="profileStudent__left--personal__info--level">
              <div className="profileStudent__left--personal__info--level__content" style={{ width }}>
              </div>
            </div>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rank;
