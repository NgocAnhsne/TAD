import "./style.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";

import lessonImg from "~/components/asset/img/quality_restoration_20240229152.jpg";
import { Link } from "react-router-dom";

export default function LessonStudent() {
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);

  const [lessionData, setLessionData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/lession/all");
      setLessionData(result.data.data);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    await axios.delete("http://127.0.0.1:8000/api/lession/delete/" + id);
    const newListData = lessionData.filter((item) => {
      alert("Đã xoá danh mục");
      return item.id !== id;
    });
    setLessionData(newListData);
  };
  var moment = require("moment");
  return (
    <div className="lessonStudent">
      <div className="lessonStudent__title">
        <h1>Các bài học</h1>
      </div>
      <div className="lessonStudent__content">
        <div className="lessonStudent__content--list">
          {lessionData.length > 0 ? (
            lessionData.map((lession, i) => (
              <div className="lessonStudent__content--list__item">
                <div className="lessonStudent__content--list__item--top">
                  <div className="lessonStudent__content--list__item--top__left">
                    <div className="lessonStudent__content--list__item--top__left--title">
                      {lession.name}
                    </div>
                    <div className="lessonStudent__content--list__item--top__left--body">
                      <span>Description: {lession.description}</span>
                      <span>{lession.time} minutes</span>
                      <span>
                        Type :<span> {lession.type}</span>
                      </span>
                    </div>
                  </div>
                  <div className="lessonStudent__content--list__item--top__right">
                    <img src={lessonImg} />
                  </div>
                </div>
                  <div className="lessonStudent__content--list__item--bottom">
                  <Link className="lessonStudent__content--list__item--bottom__btnPlay lessonBtn" to={`/student/answer`}>
                    Xem thêm
                    </Link>
                    <div className="lessonStudent__content--list__item--bottom__btnDel lessonBtn" onClick={() => handleDelete(lession.id)}>
                    Xóa
                    </div>
                    
                  </div>
              </div>
            ))
          ) : (
            <div>
              <h1 className="text-danger text-center">
                Không tìm thấy bộ đề nào
              </h1>
            </div>
          )}
        </div>
      </div>
      {/* <div className="lessonStudent__content">
        <div className="lessonStudent__content--list">
          <div className="lessonStudent__content--list__item">
            <div className="lessonStudent__content--list__item--left">
              <div className="lessonStudent__content--list__item--left__title">
                Bài học cơ bản cho người mất gốc
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
      </div> */}
    </div>
  );
}