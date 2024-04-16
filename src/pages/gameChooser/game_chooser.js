import React, { useEffect, useState } from 'react';
import "./style.scss";
import axios from 'axios';
import { Link } from 'react-router-dom';
import anhGame1 from '~/components/asset/img/gamechooser2.png';
import anhGame2 from '~/components/asset/img/gamechooser3.png';
import anhGame3 from '~/components/asset/img/gamechooser.png';
import anhGame4 from '~/components/asset/img/rand_game1.jpg';

export default function GameChooser() {
    const [isVisibleLoading, setIsVisibleLoading] = useState(true);
    const [gameData, setGameData] = useState([]);
    const [randomImageIndexes, setRandomImageIndexes] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (gameData.length > 0) {
            // Tạo mảng chứa các chỉ số ngẫu nhiên
            const indexes = gameData.map(() => Math.floor(Math.random() * 4)); // 2 là số lượng hình ảnh
            setRandomImageIndexes(indexes);
        }
    }, [gameData]);

    const fetchData = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/allgame");
            setGameData(result.data.data);
            setIsVisibleLoading(false);
        } catch (err) {
            console.log("something went wrong");
        }
    };

    const getRandomImage = (index) => {
        // Mảng chứa các hình ảnh
        const images = [anhGame1, anhGame2,anhGame3,anhGame4];
        // Lấy chỉ số ngẫu nhiên tương ứng với phần tử index
        const randomIndex = randomImageIndexes[index];
        // Trả về hình ảnh tương ứng
        return images[randomIndex];
    };

    return (
        <div className='Chooser'>
            <div className='Chooser_header'>
                <h2>Chọn game ngay! </h2>
            </div>
            <div className='Chooser_body'>
                {/* items */}
                
                {isVisibleLoading ? (
                    <p>Loading...</p>
                ) : (
                    gameData.length > 0 ? (
                        gameData.map((game, i) => (
                            <Link to={`/student/game/topic/${game.id}`} key={game.id}>
                                <div className='Chooser_body_item'>
                                    <div className='Chooser_body_item_img'>
                                        <img src={getRandomImage(i)} alt={`Game Image ${i}`} />
                                    </div>
                                    <div className='Chooser_body_item_info'>
                                        <div className='Chooser_body_item_info_title'>
                                            {game.name}
                                        </div>
                                        <div className='Chooser_body_item_info_desc'>
                                            {game.description}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p className="text-danger text-center">Không tìm thấy trò chơi nào</p>
                    )
                )}
            </div>
        </div>
    );
}
