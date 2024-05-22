import React, { useEffect, useState } from 'react'
import '../style.scss'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';
import Upload from '~/pages/Upload';


export default function AdminShop() {

    const [isVisibleLoading, setIsVisibleLoading] = useState(true)

    const [itemData, setItemData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/shop/admin");
            
            setItemData(result.data.data)
            setIsVisibleLoading(false);
        } catch (err) {
            console.log("somthing Wrong");
        }
        
    }


    return (
        <div className='admin'>
            <div className='header'>
                <div><h1>Cửa hàng</h1></div>
                <Link to='/admin/shop/add'>
                <div className='header_add'>
                    <span>Thêm sản phẩm</span>
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
                        <th scope="col">Mô tả</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Exp</th>
                        <th scope="col">Sửa</th>
                        {/* <th scope="col">Xoá</th> */}
                    </tr>
                </thead>
                <tbody>
                    {itemData.length > 0 ? (
                        itemData.map((item, i) => (
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td><img src={item.image}></img></td>
                                <td>{(item.status == "hidden") ? 'Ẩn' : 'Hoạt động'}</td>
                                <td>{item.price}</td>
                                <td>{item.value}</td>
                                <td className='icon'>
                                    <Link to={`/admin/shop/edit/${item.id}`}>
                                        <FaRegEdit color='blue' />
                                    </Link>
                                </td>
                                {/* <td className='icon'>
                                    <div onClick={()=>handleDelete(item.id)}>
                                        <AiOutlineDelete color='red' />
                                    </div>
                                </td> */}
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
