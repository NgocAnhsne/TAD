import '../style.scss'
import '../../../Teacher/style.scss'
import Select from 'react-select'
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';



function QuestionListen() {
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
        { value: 'A', label: 'A' },
        { value: 'B', label: 'B' },
        { value: 'C', label: 'C' },
        { value: 'C', label: 'D' }
      ]
    return (  
        <div className="teacher">
            <div className="question_header">
                <div><h1>Tạo câu hỏi nghe</h1></div>
                <div><span>Số lượng hiện tại</span> <b>2</b></div>
            </div>
            <div className="question_content">
                <div className="content">
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
                <div className="btn" onClick={showAlert}>
                    <button>Hoàn tất</button>
                </div>
        </div>
    );
}

export default QuestionListen;