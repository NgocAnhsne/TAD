import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'


export default function EditLession() {
    const {id}=useParams()
    const navigate = useNavigate();
    const [loading,setLoading]=useState()
    
 
    const [lessionData, setLessionData] = useState({
        name: "",
        description: "",
        time: "",
        type: "",
    });
 
    useEffect(()=>{
        fetchUser();
    },[id])
    
    const fetchUser=async()=>{
        try{
            const result=await axios.get("http://127.0.0.1:8000/api/lession/" + id);
            setLessionData(result.data.data)
        }catch(err){
            console.log("Something Wrong");
        }
    }
    
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
            await axios.put("http://127.0.0.1:8000/api/lession/update/"+id, lessionData);
            navigate('/admin/lession')
        } catch (err) {
            console.log("Something Wrong");
        }
    }
    const onSubmitSave = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://127.0.0.1:8000/api/lession/creat/"+id, lessionData);
            navigate('/admin/lession')
        } catch (err) {
            console.log("Something Wrong");
        }
    }


  return (
    <div className='admin'>
        <div className='header'>
                <div><h1>Thêm/cập nhật bài học</h1></div>
                <div>
                <Link to='/admin/lession' className='header_cancel'>
                    <span>Hủy và quay lại</span>
                </Link>
                <Link className='header_save' onClick={e => onSubmitChange(e)} onSubmitSave={e => onSubmitSave(e)}>
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
              <Form.Label className="col-sm-2 col-form-label">Tên bài học</Form.Label>
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

                  {/* {userField.role.length > 0 &&
                    userField.role.map((item, index) => (
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

                  {/* {userField.role.length > 0 &&
                    userField.role.map((item, index) => (
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
