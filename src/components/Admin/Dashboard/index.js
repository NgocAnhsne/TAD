import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";
import { FaUsers } from "react-icons/fa";
import { GrLineChart } from "react-icons/gr";
import { IoGameController } from "react-icons/io5";
import { GrBook } from "react-icons/gr";
import { SlBadge } from "react-icons/sl";
import Upload from '~/pages/Upload';

export default function Dashboard() {
  const [isVisibleLoading, setIsVisibleLoading] = useState(true)
  const [userData, setUserData] = useState([]);
  const [gameData, setGameData] = useState([]);
  const [lessionData, setLessionData] = useState([]);
  const [rankData, setRanknData] = useState([]);
  const [focusedItem, setFocusedItem] = useState(0); 

  useEffect(() => {
    fetchData();
    fetchData1();
    fetchData2();
    fetchDataRank();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/alluser");
      setUserData(result.data.data);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };

  const fetchData1 = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/allgame");
      setGameData(result.data.data);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };

  const fetchData2 = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/lession/all");
      setLessionData(result.data.data);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };

  const fetchDataRank = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/rank");
      const topThreeUsers = result.data.data.slice(0, 3);
      setRanknData(topThreeUsers);
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  const handleClick = (index) => {
    setFocusedItem(index); 
  };

  useEffect(() => {
      fetchData();
      fetchGameData();
      fetchUserData();
  }, [])

  const fetchGameData = async () => {
      try {
          const result = await axios("http://127.0.0.1:8000/api/allgame");
          setGameData(result.data.data)
          setIsVisibleLoading(false)
      } catch (err) {
          console.log("somthing Wrong");
      }
  }
  const fetchUserData = async () => {
    try {
        const result = await axios("http://127.0.0.1:8000/api/alluser");
        
        setUserData(result.data.data)
        setIsVisibleLoading(false);
    } catch (err) {
        console.log("somthing Wrong");
    }
    
}
 

  return (
    <div className="db_container">
      <div className="db_container_counting">
        {/* banner 1 */}
        <div
          className={`db_container_counting_items ${
            focusedItem === 0 ? "db_container_counting_focus_items" : ""
          }`}
          onClick={() => handleClick(0)}
        >
          {/* header baner */}
          <div className="db_container_counting_items_top">
            <div className="db_container_counting_items_top_left"  style={{backgroundColor: "#edf4ff"}}>
              <FaUsers   style={{ color: "#428eff" }} />
            </div>
            <div className="db_container_counting_items_top_right">
              <GrLineChart />
            </div>
          </div>

          <div className="db_container_counting_items_body">
            <div className="db_container_counting_items_body_note">
              Người dùng
            </div>
            <div className="db_container_counting_items_body_numberCount">
              {userData.length}
            </div>
          </div>
          <hr />
          {/* update date time */}
          <div className="db_container_counting_items_bottom">
            <div className="db_container_counting_items_bottom_note">
              
            </div>
          </div>
        </div>

        {/* banner 2 */}
        <div
          className={`db_container_counting_items ${
            focusedItem === 1 ? "db_container_counting_focus_items" : ""
          }`}
          onClick={() => handleClick(1)}
        >
          {/* header baner */}
          <div className="db_container_counting_items_top">
          <div className="db_container_counting_items_top_left"  style={{backgroundColor: "##f5faf5"}}>
            
              <IoGameController  style={{ color: "#8bc28a" }}/>
            </div>
            <div className="db_container_counting_items_top_right">
              <GrLineChart />
            </div>
          </div>

          <div className="db_container_counting_items_body">
            <div className="db_container_counting_items_body_note">
              Trò chơi
            </div>
            <div className="db_container_counting_items_body_numberCount">
              {gameData.length}
            </div>
          </div>
          <hr />
          {/* update date time */}
          <div className="db_container_counting_items_bottom">
            <div className="db_container_counting_items_bottom_note">
              
            </div>
          </div>
        </div>
        {/* banner 3 */}
        <div
          className={`db_container_counting_items ${
            focusedItem === 2 ? "db_container_counting_focus_items" : ""
          }`}
          onClick={() => handleClick(2)}
        >
          {/* header baner */}
          <div className="db_container_counting_items_top">
          <div className="db_container_counting_items_top_left"  style={{backgroundColor: "#ff764d24"}}>
              <GrBook  style={{ color: "ffa122" }} />
            </div>
            <div className="db_container_counting_items_top_right">
              <GrLineChart />
            </div>
          </div>

          <div className="db_container_counting_items_body">
            <div className="db_container_counting_items_body_note">
              Tổng số bài học
            </div>
            <div className="db_container_counting_items_body_numberCount">
              {lessionData.length}
            </div>
          </div>
          <hr />
          {/* update date time */}
          <div className="db_container_counting_items_bottom">
            <div className="db_container_counting_items_bottom_note">
              
            </div>
          </div>
        </div>
        {/* banner 4 */}
        <div
          className={`db_container_counting_items ${
            focusedItem === 3 ? "db_container_counting_focus_items" : ""
          }`}
          onClick={() => handleClick(3)}
        >
          {/* header baner */}
          <div className="db_container_counting_items_top">
          <div className="db_container_counting_items_top_left"  style={{backgroundColor: "#ffb24714"}}>
       
            <SlBadge style={{ color: "#ff000a" }}/>
            </div>
            <div className="db_container_counting_items_top_right">
              <GrLineChart />
            </div>
          </div>

          <div className="db_container_counting_items_body">
            <div className="db_container_counting_items_body_note">
              Bảng xếp hạng
            </div>
            <div className="db_container_counting_items_body_numberCount">
              {rankData.map((item, i) => (
                <div className="db_container_counting_items_body_numberCount_rank" key={i}>
                  <span>{item.name} </span> <b>{item.rank}</b>
                </div>
              ))}
            </div>
          </div>
          <hr />
          {/* update date time */}
          <div className="db_container_counting_items_bottom">
            <div className="db_container_counting_items_bottom_note">
            </div>
          </div>
        </div>
      </div>
      <div className="db_container_bott">
         <div className="db_container_bott_desc_1">
         {isVisibleLoading ? (
            <Upload />
            ) : (
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Vai trò</th>
                        <th scope="col">Cấp độ</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.length > 0 ? (
                        userData.map((user, i) => (
                            <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{(user.role == 0) ? 'Học Sinh' : ((user.role == 1) ? 'Giáo Viên' : 'Admin')}</td>
                                <td>{Math.floor(user.score / 10)}</td>
                                <td>{user.coin}</td>
                                <td>{user.rank}</td>
                               
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>
                                <h4 className="text-danger text-center">
                                    Không tìm thấy người dùng nào
                                </h4>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
            )}
          </div> 
          
          <div className="db_container_bott_desc_2">
          {isVisibleLoading ? (
            <Upload />
            ) : (
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col-20">Tên trò chơi</th>
                        <th scope="col-20">Mô tả</th>
                    </tr>
                </thead>
                <tbody>
                    {gameData.length > 0 ? (
                        gameData.map((game, i) => (
                            <tr key={i}>
                                <td>{game.id}</td>
                                <td>{game.name}</td>
                                <td>{game.description}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6}>
                                <h4 className="text-danger text-center">
                                    Không tìm thấy trò chơi nào
                                </h4>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
            )}
          </div>
          <div className="db_container_bott_desc_3">
          </div>
          <div className="db_container_bott_desc_4">
          </div>
      </div>
    </div>
  );
}
