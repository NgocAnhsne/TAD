import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import pet_img from "~/components/asset/img/catgrey.gif";
import feed_img from "~/components/asset/img/feed_img.jpg";
import axios from "axios";
import anhNen from "~/components/asset/img/kitchen.jpg";
import { useParams } from "react-router-dom";

const Shop = () => {
  const canvasRef = useRef(null);
  const ulRef = useRef(null);
  const [score, setScore] = useState();
  const { id } = useParams();
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);
  const [bagField, setBagField] = useState([]);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios(`http://127.0.0.1:8000/api/bag/${user.id}`);
      setBagField(result.data.data);
    } catch (err) {
      console.log("something went wrong");
    }
  };

  const handleAddScoreAndDelete = async (item) => {
    try {
      // Convert scores to numbers to avoid string concatenation
      const newScore = Number(user.score) + Number(item.value);

      // Add score to the user
      await axios.put(`http://127.0.0.1:8000/api/addscore/${user.id}`, {
        score: item.value,
      });

      // Update user score in state and localStorage
      const updatedUser = { ...user, score: newScore };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));

      // Delete the product
      await axios.delete(`http://127.0.0.1:8000/api/bag/delete/${item.id}`);
      const newGameData = bagField.filter((bagItem) => bagItem.id !== item.id);
      setBagField(newGameData);
    } catch (error) {
      alert("Đã có lỗi xảy ra khi thêm điểm hoặc xoá danh mục.");
    }
  };

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        ulRef.current.scrollLeft += event.deltaY;
      }
    };

    const ulElement = ulRef.current;
    ulElement.addEventListener("wheel", handleWheel);

    return () => {
      ulElement.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const level = Math.floor(user.score / 10);
  const expWidth = `${(user.score % 10) * 10}%`;

  return (
    <div className="pet">
      <img className="pet_background" src={anhNen} alt="background" />
      <div className="pet_container_top">
        <div className="pet_container_top_box_wrapper">
          <div className="pet_container_top_box_wrapper_inner">
            <div className="pet_container_top_box_wrapper_inner_box">
              <div className="pet_container_top_box_wrapper_inner_box_levelBar">
                <div
                  style={{ fontWeight: 800, alignItems: "center" }}
                  className="  "
                >
                  <div style={{ width: "100%" }}>
                    Cấp độ: {level}
                    <div
                      className="pet_container_top_box_wrapper_inner_box_levelBar_exp"
                      style={{ width: expWidth }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <img src={pet_img} alt="pet" />
          </div>
        </div>
        <canvas className="pet_canvas" ref={canvasRef} id="c"></canvas>
      </div>
      <div className="pet_container_bottom">
        <ul className="pet_container_bottom_ul" ref={ulRef}>
          {bagField.length > 0 ? (
            bagField.map((item, i) => (
              <li className="pet_container_bottom_ul_li" key={i}>
                <div
                  className="pet_container_bottom_ul_li_product fly-away"
                  onClick={() => handleAddScoreAndDelete(item)}
                >
                  <div className="pet_container_bottom_ul_li_product_img">
                    <img src={item.image} alt="product" />
                    <div className="pet_container_bottom_ul_li_product_content">
                      <div className="pet_container_bottom_ul_li_product_content_title">
                        <p>{item.name}</p>
                      </div>
                      <div className="pet_container_bottom_ul_li_product_content_desc">
                        <span>{item.description}:</span>
                        <span className="exp">{item.value} EXP</span>
                        <div className="pet_container_bottom_ul_li_product_img_action">
                          <img src={feed_img} alt="catfoot"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div>
              <h2 className="text-danger text-center">Không có sản phẩm nào</h2>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Shop;