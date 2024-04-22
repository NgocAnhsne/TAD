import "./style.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Upload from "~/pages/Upload";
import lessonImg from "~/components/asset/img/quality_restoration_20240229152.jpg";
import { Link, useParams } from "react-router-dom";

export default function LessonStudent() {
  const [isVisibleLoading, setIsVisibleLoading] = useState(true);
  const {id} = useParams();
  const [lessionData, setLessionData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
     
      const result = await axios.get(
        "http://127.0.0.1:8000/api/lession/all"
      );
      setLessionData(result.data.data);
      setIsVisibleLoading(false);
    } catch (err) {
      console.log("something went wrong");
    }
  };
  var moment = require("moment");

  return (
    <div className="lessonStudent">
      <div className="lessonStudent__title">
        <h1>Các bài học</h1>
      </div>
      <div className="lessonStudent__content">
        <div className="lessonStudent__content--list">
          {isVisibleLoading ? (
            <div className="loading_screen">
              <Upload />
            </div>
          ) : lessionData.length > 0 ? (
            lessionData.map((lession, i) => (
              <div className="lessonStudent__content--list__item">
                <div className="lessonStudent__content--list__item--top">
                  <div className="lessonStudent__content--list__item--top__left">
                    <div className="lessonStudent__content--list__item--top__left--title text__overflow">
                      {lession.name} 
                    </div>
                    <div className="lessonStudent__content--list__item--top__left--body">
                      <span className="lessonStudent__content--list__item--top__left--body__desc text__overflow">Description: {lession.description}</span>
                      <span>{lession.time} minutes</span>
                    </div>
                  </div>
                  <div className="lessonStudent__content--list__item--top__right">
                    <img src={lessonImg} />
                  </div>
                </div>
                <div className="lessonStudent__content--list__item--bottom">
                <Link className="lessonStudent__content--list__item--bottom__btnPlay lessonBtn" to={`/student/lesson/${lession.id}`}>
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
