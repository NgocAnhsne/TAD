import React, { useEffect, useState } from 'react'
import '../style.scss'
import './style.scss'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbAdjustmentsQuestion } from "react-icons/tb";
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';
import { TbEye } from "react-icons/tb";
export default function ListTest() {
    const { id } = useParams()
    const [isVisibleLoading, setIsVisibleLoading] = useState(false)
    const user = JSON.parse(localStorage.getItem('user'));
    const [testData, setTestData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [id])
    console.log(user.id)
    const fetchData = async (id) => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/test-by-user/"+ user.id);
            setTestData(result.data.data)
            console.log(result.data.data)
        } catch (err) {
            console.log("somthing Wrong");
        }
    }

    const handleDelete=async(id)=>{
        console.log(id);
        await axios.delete("http://127.0.0.1:8000/api/test/delete/"+user.id);
        const newListData=testData.filter((item)=>{
            alert("Đã xoá danh mục");
            return(
                item.id !==id
            )
        })
        setTestData(newListData);
    }
    var moment = require('moment')
    return (
        <div className='teacher_component'>
            <div className='list_container'>
            {testData.length > 0 ? (
                testData.map((test, i) => (

                <div className='list_content'>
                    <div className='list_header'>
                        <span>{test.name}</span>
                    </div>
                    <hr></hr>
                    <div className='list_body'>
                        <div className='body_top'>
                            {/* <div><span>45 questions</span></div>
                            <div><span>6 plays</span></div> */}
                            <span>Description: {test.description}</span>
                        </div>
                        <div><span>{test.time} minutes</span></div>
                        <div><span>Type :<span> {test.type}</span>
                        </span>
                        </div>
                        <div><span format='YYYY dddd MMMM' className='body_opacity opacity'>{moment(test.created_at).format('L')}</span></div>
                    </div>
                    <hr></hr>
                    <div className='list_footer'>
                        <Link to={`/teacher/test/edit/${test.id}`}>
                            <FaRegEdit className='icon' />
                        </Link>
                        <div onClick={()=>handleDelete(test.id)}>
                            <RiDeleteBinLine className='icon' />
                        </div>
                        <Link to={`/teacher/questiontext/view/${test.id}`}>
                            <TbEye className='icon' />
                        </Link>
                    </div>
                </div>
                        ))
            ) : (
                <div>
                    <h2 className="text-danger text-center">
                        Bạn chưa tạo bộ đề nào
                    </h2>
                </div>
            )}
            </div>
    
        </div>
    )
}
