import { useEffect, useState } from "react";
import "./style.scss";
import background_image from "~/components/asset/img/CayDua.jpg";
import moment from "moment";
import Upload from "~/pages/Upload";
import axios from "axios";
import { useParams } from "react-router-dom";

function HistoryStudent() {

  const { id } = useParams();
  const [isVisibleLoading, setIsVisibleLoading] = useState(true);
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const dataUser = JSON.parse(localStorage.getItem('user')); 
      const result = await axios.get(
        "http://127.0.0.1:8000/api/history/lesson-history-user/"+ dataUser.id // Sử dụng dataUser.id trong yêu cầu API
      );
      setHistoryData(result.data.data);
      setIsVisibleLoading(false);
    } catch (err) {
      console.log("something went wrong");
    }
  };
  const historyLength = historyData.length;
  return (
    
    <div className="historyStudent">
      <div className="historyStudent__background">
        <img
          className="historyStudent__background_item"
          src={background_image}
        />
      </div>
      <div className="historyStudent__title">
        <h1>Lịch sử</h1>
      </div>
      <div className="historyStudent__content">
        <div className="historyStudent__content--list">
          {/* course 1 */}
          {isVisibleLoading ? (
            <></>
          ) : historyData.length > 0 ? (
            historyData.map((history) => (
              <div className="historyStudent__content--list__item shadow">
                <div className="historyStudent__content--list__item--title">
                  {history.id_lesson_test}
                </div>
                <div className="historyStudent__content--list__item--body">
                  <div className="historyStudent__content--list__item--body__row">
                    <div className="historyStudent__content--list__item--body__row--col">
                      <div className="historyStudent__content--list__item--body__row--col__left">
                        <div className="historyStudent__content--list__item--body__row--col__left--ques">
                         question: {historyLength}
                        </div>
                        <div className="historyStudent__content--list__item--body__row--col__left--time">
                          Time:{" "}
                          {moment(history.update_at).format("DD/MM/YYYY")}
                        </div>
                        <div className="historyStudent__content--list__item--body__row--col__left--score">
                          Score
                        </div>
                        <div>{history.score}</div>
                        <div className="historyStudent__content--list__item--body__row--col__left--playdate">
                          Play date
                        </div>
                        <div className="historyStudent__content--list__item--body__row--col__left--time">
                          Time:{" "}
                          {moment(history.create_at).format("DD/MM/YYYY")}
                        </div>
                      </div>
                    </div>
                    <div className="historyStudent__content--list__item--body__row--col">
                      <div className="historyStudent__content--list__item--body__row--col__right">
                        <div className="historyStudent__content--list__item--body__row--col__right--time">
                          Type of test:
                        </div>
                        <div>{history.type}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="historyStudent__content--list__item--btn">
                  <button className="shadow">View</button>
                </div>
              </div>
            ))
          ) : (
       
            <p className="text-danger text-center">
              Không tìm thấy lịch sử
              <span>Có lẽ bạn chưa làm bài thi nào</span>
            </p>
         
          )}
        </div>
      </div>
    </div>
  );
}

export default HistoryStudent;
