import CayDua from '~/components/asset/img/CayDua.jpg'
import background from '~/components/asset/img/background.jpg'
import './style.scss'
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Select from 'react-select'

const options = [
    { value: '15p', label: '15p' },
    { value: '30p', label: '30p' },
    { value: '45p', label: '45p' }
  ]

function CreateTestTeacher() {
    return ( 
        <div className="create_test">
            <h1>Tạo bộ đề </h1>
            <div className='create_container'>
                <div className='container_left'>
                    <div className='left_top'>
                        <div className='top_text'>
                            <span>Tên bài test (bắt buộc)</span>
                            <input></input>
                        </div>
                        <div className='top_text'>
                            <span>Số lượng câu hỏi</span>
                            <input type='number'></input>
                        </div>
                    </div>
                    <div className='left_bottom'>
                        <span>Tạo loại câu hỏi</span>
                        <div className='bottom_btn'>
                            <div>
                                <BsFillQuestionCircleFill className='left_icon'/>
                                <span>Trắc nghiệm</span>
                            </div>
                            <div>
                                <BsFillQuestionCircleFill className='left_icon'/>
                                <span>Trắc nghiệm</span>
                            </div>
                            <div>
                                <BsFillQuestionCircleFill className='left_icon'/>
                                <span>Trắc nghiệm</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container_right'>
                    <div className='right_time'>
                        <span>Thời gian</span>
                        <Select options={options} />
                    </div>
                    <div className='right_des'>
                        <span>Mô tả</span>
                        <textarea></textarea>
                    </div>
                </div>
            </div>
            <div className='btn'><button>Tạo</button></div>
        </div>

     );
}

export default CreateTestTeacher;