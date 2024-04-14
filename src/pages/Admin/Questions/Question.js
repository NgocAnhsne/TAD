import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Upload from '~/pages/Upload'

export default function AdminQuestions() {
    const [isVisibleLoading, setIsVisibleLoading] = useState(true)

    const [questionData, setQuestionData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/question/all");
            
            setQuestionData(result.data.data)
            setIsVisibleLoading(false)
        } catch (err) {
            console.log("somthing Wrong");
        }
        
    }

    const handleDelete=async(id)=>{
        await axios.delete("http://127.0.0.1:8000/api/question/delete/"+id);
        const newQuestionData=questionData.filter((item)=>{
            alert("Đã xoá danh mục");
            return(
                item.id !==id
            )
        })
        setQuestionData(newQuestionData);
    }
  return (
    <div className='admin'>
        <div className='header'>
                <div><h1>Quản lý câu hỏi</h1></div>
                <Link to='/admin/question/add'>
                <div className='header_add'>
                    <span>Thêm câu hỏi</span>
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
                        <th scope="col">Bài học</th>
                        <th scope="col-20">Tên câu hỏi</th>
                        <th scope="col-20">Đáp án</th>
                        <th scope="col">Sửa</th>
                        <th scope="col">Xoá</th>
                    </tr>
                </thead>
                <tbody>
                    {questionData.length > 0 ? (
                        questionData.map((question, i) => (
                            <tr key={i}>
                                <td>{question.id}</td>
                                <td>{question.id_lesstion}</td>
                                <td>{question.question_text}</td>
                                <td>{question.answer}</td>

                                <td className='icon'>
                                    <Link to={`/admin/question/edit/${question.id}`}>
                                        <FaRegEdit color='blue' />
                                    </Link>
                                </td>
                                <td className='icon'>
                                    <div onClick={()=>handleDelete(question.id)}>
                                        <AiOutlineDelete color='red' />
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>
                                <h4 className="text-danger text-center">
                                    Không tìm thấy câu hỏi nào
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
