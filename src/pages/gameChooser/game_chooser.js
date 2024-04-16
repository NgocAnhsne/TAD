import React, { useEffect, useState } from 'react';
import "./style.scss";
import axios from 'axios';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Upload from '~/pages/Upload';
import anhconbo from '~/components/asset/img/CayDua.jpg';

export default function GameChooser() {
    const [isVisibleLoading, setIsVisibleLoading] = useState(true);
    const [gameData, setGameData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/allgame");
            setGameData(result.data.data);
            setIsVisibleLoading(false);
        } catch (err) {
            console.log("something went wrong");
        }
    };

    return (
        <div className='gameChooser'>
            <div className='gameChooser_header'>
                <h2>Chọn game ngay! </h2>
            </div>
            <div className='gameChooser_body'>
                {/* items */}
                
                {gameData.length > 0 ? (
                        gameData.map((game, i) => (
                            <div className='gameChooser_body_item'>
                    <div className='gameChooser_body_item_img'>
                        <img src={anhconbo} alt="Game Image" />
                    </div>
                    <div className='gameChooser_body_item_info'>
                        <div className='gameChooser_body_item_info_title'>
                            {game.name}
                        </div>
                        <div className='gameChooser_body_item_info_desc'>
                        {game.description}
                        </div>
                    </div>
                </div>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>
                                <h4 className="text-danger text-center">
                                    Không tìm thấy trò chơi nào
                                </h4>
                            </td>
                        </tr>
                    )}
            </div>
        </div>
    );
}
