import "./style.scss";
import bgRank from "~/components/asset/img/bgRank.png";
import rankImg from "~/components/asset/img/quality_restoration_20240229152.jpg";
import medal from "~/components/asset/img/medal1.jpg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Upload from '~/pages/Upload';
function Rank() {
  const [isVisibleLoading, setIsVisibleLoading] = useState(true);
  const [lessionData, setLessionData] = useState([]);
  const questions = Array.from({ length: setLessionData }, (_, index) => index + 1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/rank");
      setLessionData(result.data.data);
      setIsVisibleLoading(false)
      console.log(result.data.data);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };


  const listRank = [ {
    name: '', 
  }];

  const arrayOrd = [1];
  return (
    <div className="rank">
      <div className="rank__title">
        <h1>Bảng xếp hàng</h1>
      </div>
      <div className="rank__content">
        <div className="rank__content--box">
          <div className="rank__content--box--list">
            {/* <div className=""> */}
            {isVisibleLoading ? (
            <div className='loading_screen'>
                <Upload/>
            </div> 
            ) : (
              lessionData.length > 0 ? (
                lessionData.map((item, index) =>
             (
                    <div className="rank__content--box--list__item">
                      <div className="rank__content--box--list__item--left">
                        <div className="rank__content--box--list__item--left__ord">
                          <div className="rank__content--box--list__item--left__ord--number">
                            {index+1}
                          </div>
                        </div>
                        <div className="rank__content--box--list__item--left__name">
                          <div className="rank__content--box--list__item--left__name--text">
                            {item.name}
                          </div>
                        </div>
                      </div>
                      <hr></hr>
                      <div className="rankServe__container--content__right">
                        <div className="rank__content--box--list__item--right__score">
                          {item.rank}
                        </div>
                        <div className="rank__content--box--list__item--right__medal">
                          {/* {arrayIcon} */}
                        </div>
                      </div>
                    </div>
                  ))
                
              ) : (
                <div className="rank__content--box--list__item--warn">
                  Bảng xếp hạng đang bảo trì... 
                  <br/>
                  Vui lòng thử lại sau
                </div>
              )
              )}
            {/* </div> */}
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
