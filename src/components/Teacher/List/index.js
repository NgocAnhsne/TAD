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
    const [lessionData, setLessionData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [id])
    console.log(user.id)
    const fetchData = async (id) => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/test-by-user"+ user.id);
            setLessionData(result.data)
            console.log(result.data)
        } catch (err) {
            console.log("somthing Wrong");
        }
    }

    const handleDelete=async(id)=>{
        console.log(id);
        await axios.delete("http://127.0.0.1:8000/api/test/delete/"+user.id);
        const newListData=lessionData.filter((item)=>{
            alert("Đã xoá danh mục");
            return(
                item.id !==id
            )
        })
        setLessionData(newListData);
    }
    var moment = require('moment')
    return (
        <div className='teacher_component'>
            <div className='list_container'>
            {lessionData.length > 0 ? (
                lessionData.map((lession, i) => (

                <div className='list_content'>
                    <div className='list_header'>
                        <span>{lession.name}</span>
                    </div>
                    <hr></hr>
                    <div className='list_body'>
                        <div className='body_top'>
                            {/* <div><span>45 questions</span></div>
                            <div><span>6 plays</span></div> */}
                            <span>Description: {lession.description}</span>
                        </div>
                        <div><span>{lession.time} minutes</span></div>
                        <div><span>Type :<span> {lession.type}</span>
                        </span>
                        </div>
                        <div><span format='YYYY dddd MMMM' className='body_opacity opacity'>{moment(lession.created_at).format('L')}</span></div>
                    </div>
                    <hr></hr>
                    <div className='list_footer'>
                        <Link to={`/teacher/lession/edit/${lession.id}`}>
                            <FaRegEdit className='icon' />
                        </Link>
                        <div onClick={()=>handleDelete(lession.id)}>
                            <RiDeleteBinLine className='icon' />
                        </div>
                        <Link to={`/teacher/questiontext/view/${lession.id}`}>
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
