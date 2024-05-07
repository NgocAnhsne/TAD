import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'


export default function EditShop() {

    const {id}=useParams()
    const navigate = useNavigate();
    const [loading,setLoading]=useState()
    const [validated, setValidated] = useState(false);
 
    const [shopField, setShopField] = useState({
        name: "",
        description: "",
        image: "",
        status: "",
        price: "",
        value: "",
    });
 
    useEffect(()=>{
        fetchUser();
    },[id])
    
    const fetchUser=async()=>{
        try{
            const result=await axios.get("http://127.0.0.1:8000/api/bag/item/"+id);
            setShopField(result.data.data)
            console.log(result.data.data)
        }catch(err){
            console.log("Something Wrong");
        }
    }
    
    const changeshopFieldHandler = (e) => {
        setShopField({
            ...shopField,
            [e.target.name]: e.target.value
        });
    }
    
    const onSubmitChange = async (e) => {
        e.preventDefault();
        setValidated(true);
        try {
            await axios.put("http://127.0.0.1:8000/api/bag/update-item/"+id, shopField);
            navigate('/admin/shop')
        } catch (err) {
            console.log("Something Wrong");
        }
    }


    return (
        <div className='admin'>
            <div className='header'>
                    <div><h1>Thêm sản phẩm</h1></div>
                    <div>
                    <Link to='/admin/shop' className='header_cancel'>
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
                validated={validated}
              >
                <Form.Control type="hidden" name="id" value={id} />
                <div className="row mb-3">
                  <Form.Label className="col-sm-2 col-form-label">Tên sản phẩm</Form.Label>
                  <div className="col-sm-10">
                    <Form.Control
                      type="text"
                      name="name"
                      title="name"
                      required
                      value={shopField.name}
                      onChange={e => changeshopFieldHandler(e)}
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
                      value={shopField.description}
                      onChange={e => changeshopFieldHandler(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Không được bỏ trống
                    </Form.Control.Feedback>
                  </div>
                </div>
                <div className="row mb-3">
                  <Form.Label className="col-sm-2 col-form-label">
                    Hình ảnh
                  </Form.Label>
                  <div className="col-sm-10">
                    <Form.Control
                      type="text"
                      name="image"
                      required
                      value={shopField.image}
                      onChange={e => changeshopFieldHandler(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Không được bỏ trống
                    </Form.Control.Feedback>
                  </div>
                </div>
                <div className="row mb-3">
                  <Form.Label className="col-sm-2 col-form-label">
                        Trạng thái
                  </Form.Label>
                <div className="col-sm-10">
                
                    <Form.Select
                      name="status"
                      value={shopField.status}
                      required
                      onChange={e => changeshopFieldHandler(e)}
                    >
                      <option value="">-- Trạng thái --</option>
                      <option value="hidden">-- Ẩn--</option>
                      <option value="visibility">-- Hiện--</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Không được bỏ trống.
                    </Form.Control.Feedback>
                  </div>
                  </div>
                <div className="row mb-3">
                  <Form.Label className="col-sm-2 col-form-label">
                    Giá
                  </Form.Label>
                  <div className="col-sm-10">
                    <Form.Control
                      type="number"
                      name="price"
                      required
                      value={shopField.price}
                      onChange={e => changeshopFieldHandler(e)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Không được bỏ trống
                    </Form.Control.Feedback>
                  </div>
                </div>
                <div className="row mb-3">
                  <Form.Label className="col-sm-2 col-form-label">
                    Exp
                  </Form.Label>
                  <div className="col-sm-10">
                    <Form.Control
                      type="number"
                      name="value"
                      required
                      value={shopField.value}
                      onChange={e => changeshopFieldHandler(e)}
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
