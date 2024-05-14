import React, { useEffect, useRef } from "react";
import "./style.scss";
import pet_img from "~/components/asset/img/catgrey.gif";
import { IoMdAdd } from "react-icons/io";
import feed_img from "~/components/asset/img/feed_img.jpg";
const Shop = () => {
  const canvasRef = useRef(null);

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

  return (
    <div className="pet">
      <div className="pet_container_top">
        <div className="pet_container_top_box_wrapper">
          <div className="pet_container_top_box_wrapper_inner shadow">
            <img src={pet_img} alt="pet" />
          </div>
        </div>
        <canvas className="pet_canvas" ref={canvasRef} id="c"></canvas>
      </div>
      <div className="pet_container_bottom">
        <ul className="pet_container_bottom_ul">
          <li className="pet_container_bottom_ul_li">
            <div className="pet_container_bottom_ul_li_product">
              <div className="pet_container_bottom_ul_li_product_img">
                <img src={pet_img} />
                <div className="pet_container_bottom_ul_li_product_img_action">
                  <a href="">
                    <img src={feed_img} />
                  </a>
                </div>
              </div>
              <div className="pet_container_bottom_ul_li_product_content">
                <div className="pet_container_bottom_ul_li_product_content_title">
                  Thuc an dinh duong
                </div>
                <div className="pet_container_bottom_ul_li_product_content_desc">
                  4 exps
                  </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Shop;
