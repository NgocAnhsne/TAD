import React, { useState } from "react";
import Header from "~/components/Layout/DefaultLayout/Header";
import "./style.scss";
import teacher_image from "~/components/asset/img/teacher_role_img-.png";
import student_image from "~/components/asset/img/student_role.png";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const RoleChooser = () => {
    const [userField, setUserField] = useState({
        role: '' 
    });

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // Hàm xử lý sự kiện khi nhấn nút "Khám phá ngay" cho vai trò Giáo viên
    const handleRoleSelection = () => {
       
        setUserField({
            ...userField,
            role: 1
        });
        onSubmitChange();
       
    };
    const onSubmitChange = async () => {
        try {
            await axios.post("http://127.0.0.1:8000/api/register", userField);
            setLoading(true);
        } catch (err) {
            console.log("Something Wrong");
        }
    }
    return (
        <div>
            <Header />
            <div className="roleChooser">
                <div className="roleChooser_container">
                    <div className="roleChooser_container-wrapper">
                        <div className="roleChooser_container-wrapper_banner ">
                            <img src={teacher_image} alt="Teacher"></img>
                            <div className="roleChooser_container-wrapper_banner-box roleChooser_container-wrapper_banner-left">
                                <div className="roleChooser_container-wrapper_banner-box_title">
                                    Giáo viên
                                </div>
                                <div className="roleChooser_container-wrapper_banner-box_desc">
                                    Mở lớp học, quản lý các bài học đa dạng và các học sinh của mình
                                </div>
                                <span>
                                    <button className="roleChooser_container-wrapper_banner-box_button
                                        roleChooser_container-wrapper_banner-box_button-left"
                                        onClick={handleRoleSelection}>
                                        Khám phá ngay
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="roleChooser_container-wrapper_banner">
                            <div className="roleChooser_container-wrapper_banner-box roleChooser_container-wrapper_banner-right">
                                <div className="roleChooser_container-wrapper_banner-box_title">
                                    Học sinh
                                </div>
                                <div className="roleChooser_container-wrapper_banner-box_desc">
                                    Tham gia các trò chơi thú vị cùng bạn bè, khám phá bài học mới mẻ
                                </div>
                                <span>
                                    <button className="roleChooser_container-wrapper_banner-box_button
                                        roleChooser_container-wrapper_banner-box_button-right"
                                        onClick={() => navigate('/admin')}>
                                        Khám phá ngay
                                    </button>
                                </span>
                            </div>
                            <img className="right_img" src={student_image} alt="Student"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
 }
 export default RoleChooser;
