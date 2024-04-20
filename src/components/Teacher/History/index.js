import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import Upload from '~/pages/Upload'
import { TbEye } from "react-icons/tb";
import '../style.scss'
import './style.scss'

export default function Adminhistory() {
    const [isVisibleLoading, setIsVisibleLoading] = useState(true)
    const { id } = useParams()
    const [historyData, setHistoryData] = useState([]);
    var moment = require('moment')
    useEffect(() => {
        fetchData();
    }, [id])

    const fetchData = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/history/test-history-teacher/" + id);
            setHistoryData(result.data.data)
            setIsVisibleLoading(false)
        } catch (err) {
            console.log("somthing Wrong");
        }

    }

    return (
        <div className='teacher_component'>
            <div className="question_header">
                <div><h1>Lịch sử học sinh làm bài</h1></div>
                <div className='header_right'>
                    <div>
                        <span>Số lượng học sinh đã làm bài: {historyData.length}</span>
                    </div>
                    <div>
                        <Link to='/teacher/test'><span className='question_back'>Quay Lại</span></Link>
                    </div>
                </div>
            </div>
            <div className='history_body'>
                {isVisibleLoading ? (
                    <Upload />
                ) : (
                    <table className="custom-table">
                        <thead>
                            <tr>
                                <th scope="col">Tên học sinh</th>
                                <th scope="col">Số điểm</th>
                                <th scope="col">Thời gian làm bài</th>
                                <th scope="col">Ngày làm bài</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historyData.length > 0 ? (
                                historyData.map((history, i) => (
                                    <tr key={i}>
                                        <td>{history.id_user}</td>
                                        <td>{history.score}</td>
                                        <td><p format='hh:mm A'>{moment(history.created_at).format('hh:mm A')}</p></td>
                                        <td><p format='YYYY dddd MMMM'>{moment(history.created_at).format('L')}</p></td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4}>
                                        <h4 className="text-danger text-center">
                                            Không tìm thấy học sinh nào làm
                                        </h4>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                )}
            </div>
        </div>

    )
}
