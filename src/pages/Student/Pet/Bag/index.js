import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import pet_img from "~/components/asset/img/catgrey.gif";
import { IoMdAdd } from "react-icons/io";
import feed_img from "~/components/asset/img/feed_img.jpg";
import axios from "axios";
import anhNen from "~/components/asset/img/kitchen.jpg";
import { useParams } from "react-router-dom";

const Shop = () => {
  const canvasRef = useRef(null);
  const ulRef = useRef(null);

  const { id } = useParams();
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);
  const [bagField, setBagField] = useState([]);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );

  useEffect(() => {
    fetchData();
  }, [id]);
  const useBag = async (product) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api//bag/delete/${id}`);
      const bagField = bagField.filter((item) => item.id !== id);
      setBagField(bagField);
      alert("Đã xoá danh mục thành công.");
    } 
    catch (err) {
      console.log("something went wrong");
    }
  };
 
  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/shop/user");
      setBagField(result.data.data);
    } catch (err) {
      console.log("something went wrong");
    }
  };

  const buyProduct = async (product) => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/bag/buy`, {
        id_user: user.id,
        name: product.name,
        description: product.description,
        image: product.image,
        status: product.status,
        price: product.price,
        value: product.value,
      });

      const updatedCoin = user.coin - product.price;
      if (updatedCoin < 0) {
        alert("Không đủ tiền để mua sản phẩm này!");
        return;
      }

      await axios.put(`http://127.0.0.1:8000/api/bag/update/coin/${user.id}`, {
        newcoin: updatedCoin,
      });

      const updatedUser = { ...user, coin: updatedCoin };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));

      const productElement = document.getElementById(`product-${product.id}`);
      const shoppingCart = document.getElementById("shopping-cart");

      if (productElement && shoppingCart) {
        const productRect = productElement.getBoundingClientRect();
        const cartRect = shoppingCart.getBoundingClientRect();

        const deltaX =
          cartRect.left -
          productRect.left +
          cartRect.width / 2 -
          productRect.width / 2;
        const deltaY =
          cartRect.top -
          productRect.top +
          cartRect.height / 2 -
          productRect.height / 2;

        productElement.style.transitionDuration = "0.8s";
        productElement.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0)`;
        setTimeout(() => {
          productElement.style.transitionDuration = "0s";
          productElement.style.transform = "none";
        }, 800);
      }
    } catch (error) {
      console.error("Error while buying product:", error);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const cw = (canvas.width = window.innerWidth);
    const ch = (canvas.height = window.innerHeight);
    const points = [];
    let tick = 0;
    const opt = {
      count: 5,
      range: {
        x: 20,
        y: 80,
      },
      duration: {
        min: 20,
        max: 40,
      },
      thickness: 10,
      strokeColor: "#444",
      level: 0.35,
      curved: true,
    };

    const rand = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const ease = (t, b, c, d) => {
      if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
      return (-c / 2) * (--t * (t - 2) - 1) + b;
    };

    ctx.lineJoin = "round";
    ctx.lineWidth = opt.thickness;
    ctx.strokeStyle = opt.strokeColor;

    const Point = function (config) {
      this.anchorX = config.x;
      this.anchorY = config.y;
      this.x = config.x;
      this.y = config.y;
      this.setTarget();
    };

    Point.prototype.setTarget = function () {
      this.initialX = this.x;
      this.initialY = this.y;
      this.targetX = this.anchorX + rand(0, opt.range.x * 2) - opt.range.x;
      this.targetY = this.anchorY + rand(0, opt.range.y * 2) - opt.range.y;
      this.tick = 0;
      this.duration = rand(opt.duration.min, opt.duration.max);
    };

    Point.prototype.update = function () {
      const dx = this.targetX - this.x;
      const dy = this.targetY - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (Math.abs(dist) <= 0) {
        this.setTarget();
      } else {
        const t = this.tick;
        let b = this.initialY;
        let c = this.targetY - this.initialY;
        let d = this.duration;
        this.y = ease(t, b, c, d);

        b = this.initialX;
        c = this.targetX - this.initialX;
        d = this.duration;
        this.x = ease(t, b, c, d);

        this.tick++;
      }
    };

    const updatePoints = () => points.forEach((point) => point.update());

    const renderShape = () => {
      ctx.beginPath();
      const pointCount = points.length;
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 0; i < pointCount - 1; i++) {
        const c = (points[i].x + points[i + 1].x) / 2;
        const d = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, c, d);
      }
      ctx.lineTo(-opt.range.x - opt.thickness, ch + opt.thickness);
      ctx.lineTo(cw + opt.range.x + opt.thickness, ch + opt.thickness);
      ctx.closePath();
      ctx.fillStyle = "hsl(24, 100%, 50%)";
      ctx.fill();
      ctx.stroke();
    };

    const clear = () => {
      ctx.clearRect(0, 0, cw, ch);
    };

    const loop = () => {
      requestAnimationFrame(loop);
      tick++;
      clear();
      updatePoints();
      renderShape();
    };

    let i = opt.count + 2;
    const spacing = (cw + opt.range.x * 2) / (opt.count - 1);
    while (i--) {
      points.push(
        new Point({
          x: spacing * (i - 1) - opt.range.x,
          y: ch - ch * opt.level,
        })
      );
    }

    loop();

    return () => cancelAnimationFrame(loop);
  }, []);

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

  return (
    <div className="pet">
      <img className="pet_background" src={anhNen} alt="background" />
      <div className="pet_container_top">
        <div className="pet_container_top_box_wrapper">
          <div className="pet_container_top_box_wrapper_inner">
            <div className="pet_container_top_box_wrapper_inner_levelBar">
                        
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
                  className="pet_container_bottom_ul_li_product"
                  onClick={() => {
                    
                  }}
                  id={`product-${item.id}`}
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
                          <img src={feed_img} alt="catfoot" />
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
  