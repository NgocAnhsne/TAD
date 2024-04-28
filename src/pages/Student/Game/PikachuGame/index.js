import React, { useState } from 'react';
import './style.scss';

const words = [
  { id: 1, english: "apple", vietnamese: "quả táo" },
  { id: 2, english: "banana", vietnamese: "quả chuối" },
  // Thêm các từ khác ở đây
];
const PikachuGame = () => {
    

    return (
        <div className="game_board">
            {words.map((word) => (
                <div key={word.id}>
                    
                       <span className='word_square '>{word.english}</span>
                       <span className='word_square '>{word.vietnamese}</span>
                </div>
            ))}
        </div>
    );
};

export default PikachuGame;
