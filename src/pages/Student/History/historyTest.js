import { useEffect, useState } from "react";
import "./style.scss";
import background_image from "~/components/asset/img/CayDua.jpg";
import moment from "moment";
import Upload from "~/pages/Upload";
import axios from "axios";
import { useParams } from "react-router-dom";

function HistoryTestStudent() {

  const { id } = useParams();
  const [isVisibleLoading, setIsVisibleLoading] = useState(true);
  const [historyData, setHistoryData] = useState([]);
  const dataUser = JSON.parse(localStorage.getItem('user')); 
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
     
      const result = await axios.get(
        "http://127.0.0.1:8000/api/history/test-history-user/" + dataUser.id
      );
      setHistoryData(result.data.data);
      setIsVisibleLoading(false);
    } catch (err) {
      console.log("something went wrong");
    }
  };
  return (
    
    <div className="historyStudent">
      <div className="historyStudent__background">
        <img
          className="historyStudent__background_item"
          src={background_image}
        />
      </div>
      <div className="historyStudent__title">
        <h1>Lịch sử bài kiểm tra</h1>
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
                         question: {historyData.length}
                        </div>
                        <div className="historyStudent__content--list__item--body__row--col__left--time">
                          Time: {moment(history.create_at).format("DD/MM/YYYY")}
                          
                        </div>
                        <div className="historyStudent__content--list__item--body__row--col__left--score">
                          Score: {history.score}
                        </div>
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
       
            <h1 className="text-danger text-center">
                    Không tìm thấy lịch sử
              <span>Có lẽ bạn chưa làm bài thi nào</span>
            </h1>
         
          )}
        </div>
      </div>
    </div>
  );
}

export default HistoryTestStudent;
