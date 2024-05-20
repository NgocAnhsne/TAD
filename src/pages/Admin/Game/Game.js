import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Upload from '~/pages/Upload'
import { TbEye } from "react-icons/tb";

export default function AdminGame() {
    const [isVisibleLoading, setIsVisibleLoading] = useState(true)

    const [gameData, setGameData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/allgame");
            setGameData(result.data.data)
            setIsVisibleLoading(false)
        } catch (err) {
            console.log("somthing Wrong");
        }
        
    }

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xoá danh mục này?");
        if (confirmDelete) {
          try {
            await axios.delete(`http://127.0.0.1:8000/api/game/delete/${id}`);
            const newGameData = gameData.filter((item) => item.id !== id);
            setGameData(newGameData);
            alert("Đã xoá danh mục thành công.");
          } catch (error) {
            console.error('Error deleting item:', error);
            alert("Đã có lỗi xảy ra khi xoá danh mục.");
          }
        }
      };
  return (
    <div className='admin'>
        <div className='header'>
                <div><h1>Quản lý trò chơi</h1></div>
                <Link to='/admin/game/add'>
                <div className='header_add'>
                    <span>Thêm trò chơi</span>
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
                        <th scope="col-20">Xem các chủ đề của trò chơi</th>
                        <th scope="col">Sửa</th>
                        <th scope="col">Xoá</th>
                    </tr>
                </thead>
                <tbody>
                    {gameData.length > 0 ? (
                        gameData.map((game, i) => (
                            <tr key={i}>
                                <td>{game.id}</td>
                                <td>{game.name}</td>
                                <td>{game.description}</td>

                                <td className='icon'>
                                    <Link to={`/admin/topic/${game.id}`}>
                                        <TbEye  color='blue' />
                                    </Link>
                                </td>
                                <td className='icon'>
                                    <Link to={`/admin/game/edit/${game.id}`}>
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
                                    Không tìm thấy trò chơi nào
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
