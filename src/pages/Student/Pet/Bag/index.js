import React, { useEffect, useState } from "react";
import "./style.scss";
import pet_img from "~/components/asset/img/catgrey.gif";
export default function Shop() {
  return (
    <div className="pet">
      <div className="pet_container">
        <div className="pet_container_box shadow">
          <img src={pet_img} />
        </div>
        <div className="pet_container_bag">
          <div className="pet_container_bag_wrapper">
            <div className="pet_container_bag_wrapper_items">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
