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

    const [isVisibleLoading, setIsVisibleLoading] = useState(false)

    const [userData, setUSerData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/alluser");
            
            setUSerData(result.data.data)
        } catch (err) {
            console.log("somthing Wrong");
        }
    }

    const handleDelete = async (id) => {
        console.log(id);
        await axios.delete("http://127.0.0.1:8000/api/alluser/delete" + id);
        const newUserData = userData.filter((item) => {
            return (
                item.id !== id
            )
        })
        setUSerData(newUserData);
    }

    return (
        <div className='Admin'>
            <div className='header'>
                <div><h1>Người dùng</h1></div>
                <Link to='/admin/edit'>
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
                        <th scope="col">Role</th>
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
                                <td>{user.role}1</td>
                                <td className='icon'>
                                    <Link to={`/user/edit/${user.id}`}>
                                        <FaRegEdit color='blue' />
                                    </Link>
                                </td>
                                <td className='icon'>
                                    <div >
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
