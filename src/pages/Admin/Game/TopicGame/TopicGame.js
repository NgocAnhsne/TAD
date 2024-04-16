import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Upload from '~/pages/Upload'
import { TbEye } from "react-icons/tb";

export default function TopicGameAdmin() {
    const [isVisibleLoading, setIsVisibleLoading] = useState(true)

    const [topicData, setTopicData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/wordle/all");
            setTopicData(result.data.data)

            setIsVisibleLoading(false)
        } catch (err) {
            console.log("somthing Wrong");
        }
        
    }

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xoá danh mục này?");
        if (confirmDelete) {
          try {
            await axios.delete(`http://127.0.0.1:8000/api/wordle/delete/${id}`);
            const newtopicData = topicData.filter((item) => item.id !== id);
            setTopicData(newtopicData);
          } catch (error) {
            console.error('Error deleting item:', error);
            alert("Đã có lỗi xảy ra khi xoá danh mục.");
          }
        }
      };
  return (
    <div className='admin'>
        <div className='header'>
                <div><h1>Quản lý chủ đề của trò chơi</h1></div>
                <Link to='/admin/topic/add'>
                <div className='header_add'>
                    <span>Thêm chủ đề của trò chơi</span>
                </div>
                </Link>
            </div>
        {isVisibleLoading ? (
            <Upload />
            ) : (
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col-20">Tên trò chơi</th>
                        <th scope="col-20">Mô tả</th>
                        <th scope="col-20">Xem các từ của trò chơi</th>
                        <th scope="col">Sửa</th>
                        <th scope="col">Xoá</th>
                    </tr>
                </thead>
                <tbody>
                    {topicData.length > 0 ? (
                        topicData.map((game, i) => (
                            <tr key={i}>
                                <td>{game.id}</td>
                                <td>{game.name}</td>
                                <td>{game.description}</td>
                                <td className='icon'>
                                    <Link to={`/admin/topic/wordl/${game.id}`}>
                                        <TbEye  color='blue' />
                                    </Link>
                                </td>
                                <td className='icon'>
                                    <Link to={`/admin/topic/edit/${game.id}`}>
                                        <FaRegEdit color='blue' />
                                    </Link>
                                </td>
                                <td className='icon'>
                                    <div onClick={()=>handleDelete(game.id)}>
                                        <AiOutlineDelete color='red' />
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6}>
                                <h4 className="text-danger text-center">
                                    Không tìm thấy chủ đề nào
                                </h4>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
            )}
    </div>
  )
}
