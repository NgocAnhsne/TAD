import React from 'react'
import Select from 'react-select'
import './style.scss'
import { Link } from 'react-router-dom'

export default function EditQuestionAdmin() {
    const options = [
        { value: 'A', label: 'A' },
        { value: 'B', label: 'B' },
        { value: 'C', label: 'C' },
        { value: 'D', label: 'D' }
      ]
  return (
    
    <div className='admin'>
        <div className='header'>
                <div><h1>Thêm câu hỏi</h1></div>
                <div>
                <Link to='/admin/question' className='header_cancel'>
                    <span>Hủy và quay lại</span>
                </Link>
                <Link className='header_save'>
                    <span>Lưu các thay đổi</span>
                </Link>
                </div>
            </div>
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
  )
}
