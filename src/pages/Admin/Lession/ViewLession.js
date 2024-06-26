import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../style.scss'

import { FaPlus } from "react-icons/fa";
import axios from 'axios';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function ViewQuestionText() {



    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState()
    const [questionData, setQuestionData] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    const closePopup = () => {
        setShowPopup(false);
    };

    const [questionField, setquestionField] = useState({
        id_lesstion: id,
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
            console.log(result.data.data)
        } catch (err) {
            console.log("Something Wrong");
        }
    }

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xoá danh mục này?");
        if (confirmDelete) {
          try {
            await axios.delete("http://127.0.0.1:8000/api/question/delete/"+id);
            const newQuestionData = questionData.filter((item) => item.id !== id);
            setQuestionData(newQuestionData);
          } catch (error) {
            console.error('Error deleting item:', error);
            alert("Đã có lỗi xảy ra khi xoá danh mục.");
          }
        }
      };
    const changequestionFieldHandler = (e) => {
        setquestionField({
            ...questionField,
            [e.target.name]: e.target.value
        });
    }
    const numberOfQuestions = 40;
    const questions = Array.from({ length: numberOfQuestions }, (_, index) => index + 1);

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/question/create", questionField);
            setLoading(true);
            setShowPopup(false);
            navigate(`/admin/lession/view/${id}`);
            window.location.reload();
        } catch (err) {
            console.log("Something Wrong");
        }
    }
    
    const options = [
        { value: '', label: '---Chọn đáp án---' },
        { value: questionField.answer_a, label: 'A' },
        { value: questionField.answer_b, label: 'B' },
        { value: questionField.answer_c, label: 'C' },
        { value: questionField.answer_d, label: 'D' }
    ]
    return (
       <div className='admin'>
             <div className='teacher_component'>
            <div className="question_header">
                <div><h1>Tạo câu hỏi chữ</h1></div>
                <div className='header_right'>
                    <div>
                        <span>Số lượng hiện tại</span> <b>{questionData.length}</b>
                    </div>
                    <div>
                        <Link to='/admin/lession'><span className='question_back'>Quay Lại</span></Link>
                    </div>
                    <div>
                        <span className='question_add' onClick={() => setShowPopup(true)}>Thêm câu hỏi</span>
                    </div>
                </div>
            </div>
            <div className="question_content">
                {questionData.map((question, index) => (
                    <div className="content_section" key={question.id}>
                        <div className="content_header">
                            <span>Question {index + 1}</span>
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
                                    <option value={question.answer_a}>A</option>
                                    <option value={question.answer_b}>B</option>
                                    <option value={question.answer_c}>C</option>
                                    <option value={question.answer_d}>D</option>
                                </select>
                            </div>
                            <div className='delete_footer' onClick={() => handleDelete(question.id)}>
                                <MdOutlineDeleteOutline />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showPopup && (
                <div>
                    <div className="overlay" onClick={closePopup}></div>
                    <div className='popup'>
                    <h4>Tạo câu hỏi</h4>
                    <div className="question_content">
                        <div className="content_section" name="id" value={questionField.id}>
                            <div className="content_header">
                                <span>Question :</span>
                                <input placeholder='Question?'
                                    name='question_text'
                                    value={questionField.question_text}
                                    onChange={e => changequestionFieldHandler(e)}
                                ></input>
                            </div>
                            <div className="content_body">
                                <div className="body_a" style={{ backgroundColor: '#B0D8E6' }}>
                                    <span>A.</span>
                                    <input placeholder='Answer'
                                        value={questionField.answer_a}
                                        onChange={e => changequestionFieldHandler(e)}
                                        name='answer_a'
                                    ></input>
                                </div>
                                <div className="body_b" style={{ backgroundColor: '#EADDB5' }}>
                                    <span>B.</span>
                                    <input placeholder='Answer'
                                        value={questionField.answer_b}
                                        onChange={e => changequestionFieldHandler(e)}
                                        name='answer_b'
                                    ></input>
                                </div>
                                <div className="body_c" style={{ backgroundColor: '#81ABDF' }}>
                                    <span>C.</span>
                                    <input placeholder='Answer'
                                        value={questionField.answer_c}
                                        onChange={e => changequestionFieldHandler(e)}
                                        name='answer_c'
                                    ></input>
                                </div>
                                <div className="body_d" style={{ backgroundColor: '#FE8760' }}>
                                    <span>D.</span>
                                    <input placeholder='Answer'
                                        value={questionField.answer_d}
                                        name='answer_d'
                                        onChange={e => changequestionFieldHandler(e)}
                                    ></input>
                                </div>
                            </div>
                            <div className='content_footer'>
                                <div>
                                    <span>True Answer</span>
                                    <select value={questionField.answer} onChange={e => changequestionFieldHandler(e)} name="answer">
                                        {options.map(options => (
                                            <option value={options.value} >{options.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='popup_save' onClick={e => onSubmitChange(e)}>
                                    Lưu các thay đổi
                                </div>
                            </div>
                        </div>

                    </div>
                    <button onClick={closePopup}>
                        <IoClose />
                        </button>
                   
                    </div>
         
                </div>
            )}
        </div>
       </div>
    )
}

