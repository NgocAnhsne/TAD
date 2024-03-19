import React from 'react'
import './style.scss'
export default function Dashboard() {
  return (
    <div className='db_container'>
        <div className='db_content'>
            <h3>Số lượng người dùng</h3>
            <div>
                <span>Giáo viên: <b>2</b> </span>
                <span>Học sinh: <b>2</b> </span>
            </div>
        </div>
        <div className='db_content-type'>
            <h3>Số lượng trò chơi</h3>
            <div>
                <span className='end'>10</span>
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
            <h3>Số lượng chủ đề</h3>
            <div>
                <span className='end'>4</span>
            </div>
        </div>
    </div>
  )
}
