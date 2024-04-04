import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'


export default function EditGame() {

    const {id}=useParams()
    const navigate = useNavigate();
    const [loading,setLoading]=useState()
    
 
    const [gameField, setGameField] = useState({
        name: "",
        description: "",
    });
 
    useEffect(()=>{
        fetchUser();
    },[id])
    
    const fetchUser=async()=>{
        try{
            const result=await axios.get("http://127.0.0.1:8000/api/game/"+id);
            setGameField(result.data.data)
        }catch(err){
            console.log("Something Wrong");
        }
    }
    
    const changegameFieldHandler = (e) => {
        setGameField({
            ...gameField,
            [e.target.name]: e.target.value
        });
        //console.log(gameField);
 
    }
    
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://127.0.0.1:8000/api/game/update/"+id, gameField);
            navigate('/admin/game')
        } catch (err) {
            console.log("Something Wrong");
        }
    }


  return (
    <div className='admin'>
        <div className='header'>
                <div><h1>Thêm/cập nhật người dùng</h1></div>
                <div>
                <Link to='/admin/game' className='header_cancel'>
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
                  value={gameField.name}
                  onChange={e => changegameFieldHandler(e)}
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
                  value={gameField.description}
                  onChange={e => changegameFieldHandler(e)}
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>
          </Form>
    </div>
  )
}
