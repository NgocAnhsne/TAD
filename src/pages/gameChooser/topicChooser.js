import React, { useEffect, useState } from 'react';
import "./style.scss";
import axios from 'axios';

export default function TopicChooser() { // Changed function name to start with uppercase
    const [isVisibleLoading, setIsVisibleLoading] = useState(true);
    const [topicData, settopicData] = useState([]);

    useEffect(() => {
        fetchData();
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

    return (
        <div className='Chooser'>
            <div className='Chooser_header'>
                <h2>Chọn chủ đề </h2>
            </div>
            <div className='Chooser_body'>
                {topicData.length > 0 ? (
                    topicData.map((topic, i) => (
                        <div className='Chooser_body_item' key={i}> {/* Added key prop */}
                            <div className='Chooser_body_item_img'>
                                <img src={topic.image} alt="Game Image" /> {/* Assuming there's an image property in your game data */}
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
                    ))
                ) : (
                    <div className='Chooser_body_item'>
                        <h4 className="text-danger text-center">
                            Không tìm thấy chủ đề nào
                        </h4>
                    </div>
                )}
            </div>
        </div>
    );
}