import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Upload from '~/pages/Upload'
import { TbEye } from "react-icons/tb";


export default function AdminLession() {
    const [isVisibleLoading, setIsVisibleLoading] = useState(true)

    const [lesionData, setLesionData] = useState([]);
    const [questionData, setQuestionData] = useState([]);
    useEffect(() => {
        fetchData();

    }, [])

    const fetchData = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/lession/all");
            
            setLesionData(result.data.data)
            setIsVisibleLoading(false)
            
        } catch (err) {
            console.log("somthing Wrong");
        }
        
        
    }

    
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xoá danh mục này?");
        if (confirmDelete) {
          try {
            await axios.delete("http://127.0.0.1:8000/api/lession/delete/"+id);
            const newLesionData = lesionData.filter((item) => item.id !== id);
            setLesionData(newLesionData);
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
                <div><h1>Quản lý bài học</h1></div>
                <Link to='/admin/lession/add'>
                <div className='header_add'>
                    <span>Thêm bài học</span>
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
                        <th scope="col-20">Tên bài học</th>
                        <th scope="col-20">Mô tả</th>
                        <th scope="col-20">Thời gian</th>
                        <th scope="col-20">Loại câu hỏi</th>
                        <th scope="col">Xem câu hỏi</th>
                        <th scope="col">Sửa</th>
                        <th scope="col">Xoá</th>
                    </tr>
                </thead>
                <tbody>
                    {lesionData.length > 0 ? (
                        lesionData.map((lession, i) => (
                            <tr key={i}>
                                <td>{lession.id}</td>
                                <td>{lession.name}</td>
                                <td>{lession.description}</td>
                                <td>{lession.time}</td>
                                <td>{lession.type}</td>
                      

                                
                                <td className='icon'>
                                    <Link to={`/admin/lession/view/${lession.id}`}>
                                        <TbEye  color='blue' />
                                    </Link>
                                </td>
                                <td className='icon'>
                                    <Link to={`/admin/lession/edit/${lession.id}`}>
                                        <FaRegEdit color='blue' />
                                    </Link>
                                </td>
                                <td className='icon'>
                                    <div onClick={()=>handleDelete(lession.id)}>
                                        <AiOutlineDelete color='red' />
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={9}>
                                <h4 className="text-danger text-center">
                                    Không tìm thấy bài học nào
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
