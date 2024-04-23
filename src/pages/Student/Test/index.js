import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Upload from "~/pages/Upload";

import lessonImg from "~/components/asset/img/quality_restoration_20240229152.jpg";

function Test() {
  const [isVisibleLoading, setIsVisibleLoading] = useState(true);

  const {id_test} = useParams();

  const [testData, setTestData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/test/all");
      setTestData(result.data.data);
      setIsVisibleLoading(false);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };



  var moment = require("moment");

  return (
    <div className="lessonStudent">
      <div className="lessonStudent__title">
        <h1>Các bài kiểm tra</h1>
      </div>
      <div className="lessonStudent__content">
        <div className="lessonStudent__content--list">
          {isVisibleLoading ? (
            <div className="loading_screen">
              <Upload />
            </div>
          ) : testData.length > 0 ? (
            testData.map((test, i) => (
              <div className="lessonStudent__content--list__item">
                <div className="lessonStudent__content--list__item--top">
                  <div className="lessonStudent__content--list__item--top__left">
                    <div className="lessonStudent__content--list__item--top__left--title">
                      {test.name}
                    </div>
                    <div className="lessonStudent__content--list__item--top__left--body">
                      <span>Description: {test.description}</span>
                      <span>{test.time} minutes</span>
                    </div>
                  </div>
                  <div className="lessonStudent__content--list__item--top__right">
                    <img src={lessonImg} />
                  </div>
                </div>
                <div className="lessonStudent__content--list__item--bottom">
                  <Link
                    className="lessonStudent__content--list__item--bottom__btnPlay lessonBtn"  to={`/student/test/${test.id}`}>
                    Bắt đầu!
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-danger text-center">
              Không tìm thấy bộ đề nào
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Test;
