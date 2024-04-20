import React, { useState, useEffect } from 'react';
import './SingleCard.scss';
import cover from '~/components/asset/img/latBai.png';

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const [displayLanguage, setDisplayLanguage] = useState(null);
  const [isOpened, setIsOpened] = useState(false);


  useEffect(() => {
    setIsOpened(flipped);
  }, [flipped]);



  const handleClick = () => {
    if (!disabled && !isOpened) {
      setIsOpened(true); // Đặt trạng thái đã mở trước khi xử lý
      handleChoice(card);
      const nextLanguage = displayLanguage === 'english' ? 'vietnamese' : 'english';
      setDisplayLanguage(nextLanguage);
    }
  };

  useEffect(() => {
    let timer;
    if (isOpened) {
      timer = setTimeout(() => {
        setIsOpened(false);
      }, 1000); // Thời gian mở lại sau 1 giây
    }
    return () => clearTimeout(timer);
  }, [isOpened]);
  
  

  return (
    <div className="card" onClick={handleClick}>
      <div className={flipped ? 'flipped' : ''}>
        <div className="front">
          {flipped && (
            <>
              {displayLanguage === 'english' && card && card.english && <p className="text">{card.english}</p>}
              {displayLanguage === 'vietnamese' && card && card.vietnamese && <p className="nub">{card.vietnamese}</p>}
            </>
          )}
        </div>
        <img className="back" src={cover} alt="card back"></img>
      </div>
    </div>
  );
}

