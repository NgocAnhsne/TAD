import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'


export default function AddLessionAdmin() {
    const {id}=useParams()
    const navigate = useNavigate();
    const [loading,setLoading]=useState()
 
    const [lessionData, setLessionData] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
    });
 
    const changelessionDataHandler = (e) => {
        setLessionData({
            ...lessionData,
            [e.target.name]: e.target.value
        });
        //console.log(lessionData);
 
    }
    
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
           await axios.post("http://127.0.0.1:8000/api/lession/create", lessionData);
            setLoading(true);
        } catch (err) {
            console.log("Something Wrong");
        }
    }
    if(loading){
        return (
            navigate('/admin/lession')
        )
    }

  return (
    <div className='admin'>
        <div className='header'>
                <div><h1>Thêm/cập nhật bài học</h1></div>
                <div>
                <Link to='/admin/lession' className='header_cancel'>
                    <span>Hủy và quay lại</span>
                </Link>
                <Link className='header_save' onClick={e => onSubmitChange(e)}>
                    <span>Lưu các thay đổi</span>
                </Link>
                </div>
            </div>
            <Form
            method="post"
            encType=""
            noValidate
          >
            <Form.Control type="hidden" name="id" value={id} />
            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">Tên trò chơi</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="name"
                  title="name"
                  required
                  value={lessionData.name}
                  onChange={e => changelessionDataHandler(e)}
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống.
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">
                Mô tả
              </Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="description"
                  required
                  value={lessionData.description}
                  onChange={e => changelessionDataHandler(e)}
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>
            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">
                Thời gian
              </Form.Label>
              <div className="col-sm-10">
                <Form.Select
                  name="time"
                  title="role"
                  value={lessionData.time}
                  required
                  onChange={e => changelessionDataHandler(e)}
                >
                  <option value="">--Chọn thời gian--</option>
                  <option value="15">--15p--</option>
                  <option value="30">--30p--</option>
                  <option value="45">--45p--</option>

                  {/* {lessionData.role.length > 0 &&
                    lessionData.role.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.text}
                      </option>
                    ))} */}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống.
                </Form.Control.Feedback>
              </div>
            </div>
            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">
                Loại câu hỏi
              </Form.Label>
              <div className="col-sm-10">
                <Form.Select
                  name="type"
                  title="role"
                  value={lessionData.type}
                  required
                  onChange={e => changelessionDataHandler(e)}
                >
                  <option value="">--Loại câu hỏi--</option>
                  <option value="tẽt">--Chữ--</option>
                  <option value="listen">--Âm thanh--</option>
                  <option value="image">--Hình ảnh--</option>

                  {/* {lessionData.role.length > 0 &&
                    lessionData.role.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.text}
                      </option>
                    ))} */}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống.
                </Form.Control.Feedback>
              </div>
            </div>
          </Form>
    </div>
  )
}
