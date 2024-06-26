import React, { useEffect, useState } from 'react'
import '../style.scss'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import axios from 'axios';
import Upload from '~/pages/Upload';

export default function AdminUser() {

    const [isVisibleLoading, setIsVisibleLoading] = useState(true)

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/alluser");
            
            setUserData(result.data.data)
            setIsVisibleLoading(false);
        } catch (err) {
            console.log("somthing Wrong");
        }
        
    }


    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xoá danh mục này?");
        if (confirmDelete) {
          try {
            await axios.delete("http://127.0.0.1:8000/api/user/delete/"+id);
            const newUserData = userData.filter((item) => item.id !== id);
            setUserData(newUserData);
          } catch (error) {
            console.error('Error deleting item:', error);
            alert("Đã có lỗi xảy ra khi xoá danh mục.");
          }
        }
      };

    return (
        <div className='admin'>
            <div className='header'>
                <div><h1>Người dùng</h1></div>
                <Link to='/admin/users/add'>
                <div className='header_add'>
                    <span>Thêm người dùng</span>
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
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Vai trò</th>
                        <th scope="col">Cấp độ</th>
                        <th scope="col">Tiền</th>
                        <th scope="col">Xếp hạng</th>
                        <th scope="col">Sửa</th>
                        <th scope="col">Xoá</th>
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
                                <td className='icon'>
                                    <Link to={`/admin/users/edit/${user.id}`}>
                                        <FaRegEdit color='blue' />
                                    </Link>
                                </td>
                                <td className='icon'>
                                    <div onClick={()=>handleDelete(user.id)}>
                                        <AiOutlineDelete color='red' />
                                    </div>
                                </td>
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
    )
}
