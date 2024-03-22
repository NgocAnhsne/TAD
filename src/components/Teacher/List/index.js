import React from 'react'
import '../style.scss'
import './style.scss'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiPlay } from "react-icons/fi";
import { Link } from 'react-router-dom';
import caydua from '~/components/asset/img/CayDua.jpg'
export default function ListTest() {
    return (
        <div className='teacher_component'>
            <div className='list_container'>
                <div className='list_content'>
                    <div className='list_header'>
                        <span>Test 1</span>
                    </div>
                    <hr></hr>
                    <div className='list_body'>
                        <div className='body_top'>
                            <div><span>45 questions</span></div>
                            <div><span>6 plays</span></div>
                        </div>
                        <div><span>15 minutes</span></div>
                        <div><span>Type :<span>Text</span>
                        </span>
                        </div>
                        <div><span className='body_opacity opacity'>Edited 2 days ago</span></div>
                    </div>
                    <hr></hr>
                    <div className='list_footer'>
                        <Link to='/teacher/questiontext'>
                            <FaRegEdit className='icon' />
                        </Link>
                        <Link>
                            <RiDeleteBinLine className='icon' />
                        </Link>
                        <Link to='/'>
                            <FiPlay className='icon' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
