import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../style.scss'

import { FaPlus } from "react-icons/fa";
import axios from 'axios';
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function CreatQuestionText() {



    const options = [
        { value: '', label: '---Chọn đáp án---' },
        { value: 'a', label: 'A' },
        { value: 'b', label: 'B' },
        { value: 'c', label: 'C' },
        { value: 'd', label: 'D' }
    ]


    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState()
    const [questionData, setQuestionData] = useState([]);

    const [questionField, setQuestionField] = useState({
        question_text: "",
        answer_a: "",
        answer_b: "",
        answer_c: "",
        answer_d: "",
        answer: "",
    });

    useEffect(() => {
        fetchUser();
    }, [id])

    const fetchUser = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/api/question-by-lession/" + id);
            setQuestionData(result.data.data)
        } catch (err) {
            console.log("Something Wrong");
        }
    }

    const handleDelete=async(id)=>{
        console.log(id);
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
        <div className='teacher_component'>
            <div className="question_header">
                <div><h1>Tạo câu hỏi chữ</h1></div>
                <div className='header_right'>
                    <div>
                        <span>Số lượng hiện tại</span> <b>{questionData.length}</b>
                    </div>
                    <div>
                        <Link to='/teacher/lession'><span className='question_back'>Quay Lại</span></Link>
                    </div>
                </div>
            </div>
            <div className="question_content">
                {questionData.map((question) => (
                    <div className="content_section" name="id" value={question.id}>
                        <div className="content_header">
                            <span>Question 1</span>
                            <input placeholder='Question?'

                                name='question_text'
                                value={question.question_text || ""}
                            ></input>
                        </div>
                        <div className="content_body">
                            <div className="body_a" style={{ backgroundColor: '#B0D8E6' }}>
                                <span>A.</span>
                                <input placeholder='Answer'
                                    value={question.answer_a}
                                    name='answer_a'
                                ></input>
                            </div>
                            <div className="body_b" style={{ backgroundColor: '#EADDB5' }}>
                                <span>B.</span>
                                <input placeholder='Answer'
                                    value={question.answer_b}
                                    name='answer_b'
                                ></input>
                            </div>
                            <div className="body_c" style={{ backgroundColor: '#81ABDF' }}>
                                <span>C.</span>
                                <input placeholder='Answer'
                                    value={question.answer_c}
                                    name='answer_c'
                                ></input>
                            </div>
                            <div className="body_d" style={{ backgroundColor: '#FE8760' }}>
                                <span>D.</span>
                                <input placeholder='Answer'
                                    value={question.answer_d}
                                ></input>
                            </div>
                        </div>
                        <div className='content_footer'>
                            <div>
                                <span>True Answer</span>
                                <select value={question.answer}>
                                    {options.map(options => (
                                        <option value={options.value} >{options.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='delete_footer' onClick={()=>handleDelete(question.id)}>
                                <MdOutlineDeleteOutline />
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
