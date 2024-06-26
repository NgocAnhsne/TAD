import React from 'react'
import Select from 'react-select'
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';



export default function CreatQuestionImg() {
    const navigate = useNavigate();

    function showAlert() {
        Swal.fire({
            title: "Are you save?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Save"
          }).then((result) => {
            if (result.isConfirmed) {
            navigate(`/teacher/list`)
        }
    });
}

const options = [
    { value: '', label: '---Chọn đáp án---' },
    { value: 'answer_a', label: 'A' },
    { value: 'answer_b', label: 'B' },
    { value: 'answer_c', label: 'C' },
    { value: 'answer_d', label: 'D' }
]
  return (
    <div className='teacher_component'>
                    <div className="question_header">
                <div><h1>Tạo câu hỏi ảnh</h1></div>
                <div><span>Số lượng hiện tại</span> <b>2</b></div>
            </div>
            <div className="question_content">
                <div className="content_section">
                    <div className="content_header">
                        <span>Question 1</span>
                        <input placeholder='Question?'></input>
                    </div>
                    <div className="content_body">
                        <div className="body_a" style={{ backgroundColor: '#B0D8E6'}}>
                            <span>A.</span>
                            <input placeholder='Answer'></input>
                        </div>
                        <div className="body_b" style={{ backgroundColor: '#EADDB5'}}>
                            <span>B.</span>
                            <input placeholder='Answer'></input>
                        </div>
                        <div className="body_c" style={{ backgroundColor: '#81ABDF'}}>
                            <span>C.</span>
                            <input placeholder='Answer'></input>
                        </div>
                        <div className="body_d" style={{ backgroundColor: '#FE8760'}}>
                            <span>D.</span>
                            <input placeholder='Answer'></input>
                        </div>
                    </div>
                    <div className='content_footer'>
                        <span>True Answer</span>
                        <Select options={options} />
                    </div>
                </div>
            </div>
                <div className="btn_end" >
                    <button onClick={showAlert}>Hoàn tất</button>
                </div>
    </div>
  )
}
