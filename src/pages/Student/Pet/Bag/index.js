import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import pet_img from "~/components/asset/img/catgrey.gif";
import feed_img from "~/components/asset/img/feed_img.jpg";
import axios from "axios";
import anhNen from "~/components/asset/img/kitchen.jpg";
import { useParams } from "react-router-dom";
import levelBar from "~/components/asset/img/level_bar-.png";

const Shop = () => {
  const canvasRef = useRef(null);
  const ulRef = useRef(null);
  const { id } = useParams();
  const [bagField, setBagField] = useState([]);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  // Các hằng số cơ bản cho công thức hàm mũ
  const baseExp = 100; // EXP cơ bản để lên cấp
  const expFactor = 1.5; // Hằng số cho công thức hàm mũ

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

  // Hàm tính cấp độ hiện tại dựa trên điểm số (score) của người dùng
  const getLevel = (score) => {
    let level = user.score;
    let expNeeded = baseExp;

    while (score >= expNeeded) {
      score -= expNeeded;
      level++;
      expNeeded = baseExp * Math.pow(expFactor, level);
    }

    return level;
  };

  // Hàm tính EXP cần thiết để lên cấp tiếp theo
  const getNextLevelExp = (level) => {
    return baseExp * Math.pow(expFactor, level);
  };

  const currentLevel = Math.floor(getLevel(user.score) / 10);

  const nextLevelExp = getNextLevelExp(currentLevel);
  const currentExp = user.score - (nextLevelExp / expFactor); // EXP hiện tại trong cấp độ

  // Tính toán độ rộng thanh exp

  const scoreDiv = Math.floor(user.score / 100); // chia lấy phần nguyên
  const scoreMod = user.score % 100; // lấy phần dư
  const expWidth = `${scoreDiv + scoreMod}%`;

  return (
    <div className="pet">
      <img className="pet_background" src={anhNen} alt="background" />
      <div className="pet_container_top">
        <div className="pet_container_top_box_wrapper">
          <div className="pet_container_top_box_wrapper_inner">
            <div className="pet_container_top_box_wrapper_inner_box">
              <div className="pet_container_top_box_wrapper_inner_box_right">
                <div className="pet_container_top_box_wrapper_inner_box_right_wrapper">
                  <img src={levelBar} alt="level bar" />
                </div>
              </div>
              <div className="pet_container_top_box_wrapper_inner_box_levelBar shadow">
                <div
                  style={{ fontWeight: 800, alignItems: "center" }}
                  className="pet_container_top_box_wrapper_inner_box_levelBar_desc"
                >
                  <div className="pet_container_top_box_wrapper_inner_box_levelBar_desc_text">
                    Cấp độ: {currentLevel}
                    <div
                      className="pet_container_top_box_wrapper_inner_box_levelBar_desc_exp"
                      style={{
                        width: expWidth,
                        transition: "width 2s",
                      }}
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
                    <img className="moving_to_Y " src={item.image} alt="product" />
                    <div className="pet_container_bottom_ul_li_product_content">
                      <div className="pet_container_bottom_ul_li_product_content_title">
                        <p>{item.name}</p>
                      </div>
                      <div className="pet_container_bottom_ul_li_product_content_desc">
                        <span>{item.description}:</span>
                        <span className="exp">{item.value} EXP</span>
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
