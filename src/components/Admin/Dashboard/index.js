import React, { useEffect, useState } from 'react'
import './style.scss'
import axios from 'axios';
export default function Dashboard() {
    const [userData, setUserData] = useState([]);
    const [gameData, setGameData] = useState([]);
    const [lessionData, setLessionData] = useState([]);
    useEffect(() => {
        fetchData();
        fetchData1();
        fetchData2();
    }, [])

    const fetchData = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/alluser");
            setUserData(result.data.data)
        } catch (err) {
            console.log("somthing Wrong");
        }
    }
    const fetchData1 = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/allgame");
            setGameData(result.data.data)
        } catch (err) {
            console.log("somthing Wrong");
        }
    }
    const fetchData2 = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/lession/all");
            setLessionData(result.data.data)
        } catch (err) {
            console.log("somthing Wrong");
        }
    }
  return (
    <div className='db_container'>
        <div className='db_content'>
            <h3>Số lượng người dùng</h3>
            <div>
            <span className='end'>{userData.length}</span>
            </div>
        </div>
        <div className='db_content-type'>
            <h3>Số lượng trò chơi</h3>
            <div>
                <span className='end'>{gameData.length}</span>
            </div>
        </div>
        <div className='db_content'>
            <h3>Xếp hạng</h3>
            <div>
                <span>Giáo viên: <b>2</b> </span>
                <span>Học sinh: <b>2</b> </span>
                <span>Học sinh: <b>2</b> </span>
            </div>
        </div>
        <div className='db_content-type'>
            <h3>Số lượng bài học</h3>
            <div>
                <span className='end'>{lessionData.length}</span>
            </div>
        </div>
    </div>
  )
}
