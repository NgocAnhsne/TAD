import React, { useEffect, useState } from 'react';
import "./style.scss";
import axios from 'axios';
import Upload from '~/pages/Upload';
import { Link, useParams } from 'react-router-dom';
import anhGame1 from '~/components/asset/img/gamechooser2.png';
import anhGame2 from '~/components/asset/img/gamechooser3.png';
import anhGame3 from '~/components/asset/img/gamechooser.png';
import anhGame4 from '~/components/asset/img/rand_game1.jpg';

export default function TopicChooser() { 
    const [isVisibleLoading, setIsVisibleLoading] = useState(true);
    const [topicData, settopicData] = useState([]);
    const [gameData, setGameData] = useState([]);
    const { id } = useParams()
    const [randomImageIndexes, setRandomImageIndexes] = useState([]);

    useEffect(() => {
        if (gameData.length > 0) {
            const indexes = gameData.map(() => Math.floor(Math.random() * 4));
            setRandomImageIndexes(indexes);
        }
    }, [gameData]);

    useEffect(() => {
        fetchData();
        fetchDataGame();
    }, []);
    const fetchData = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/wordle/all");
            settopicData(result.data.data);
            setIsVisibleLoading(false);
        } catch (err) {
            console.log("something went wrong");
        }
    };
    const fetchDataGame = async () => {
        try {
            const result = await axios("http://127.0.0.1:8000/api/allgame");
            setGameData(result.data.data);
            setIsVisibleLoading(false);
        } catch (err) {
            console.log("something went wrong");
        }
    };

    const getRandomImage = (index) => {
        const images = [anhGame1, anhGame2, anhGame3, anhGame4];
        const randomIndex = randomImageIndexes[index];
        if (randomIndex >= 0 && randomIndex < images.length) {
            return images[randomIndex];
        } else {
            return anhGame1;
        }
    };

    return (
        <div className='Chooser'>
            <div className='Chooser_header'>
                <h2>Chọn chủ đề </h2>
            </div>
            <div className='Chooser_body'>

          {isVisibleLoading ? (
                    <div className='loading_screen'>
                        <Upload/>
                    </div>
                
                ) : (   
                topicData.length > 0 ? (
                    topicData.map((topic, i) => (
                      <Link to={`/student/game/${id}/topic/${topic.id}`}>
                        <div className='Chooser_body_item' key={i}> 
                            <div className='Chooser_body_item_img'>
                            <img src={getRandomImage(i)} alt={`Game Image ${i}`} />
                            </div>
                            <div className='Chooser_body_item_info'>
                                <div className='Chooser_body_item_info_title'>
                                    {topic.name}
                                </div>
                                <div className='Chooser_body_item_info_desc'>
                                    {topic.description}
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))
                ) : (
                    <div className='Chooser_body_item'>
                        <h4 className="text-danger text-center">
                            Không tìm thấy chủ đề nào
                        </h4>
                    </div>
                )
            )}
            </div>
        </div>
    );
}