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
      handleChoice(card);
      if (displayLanguage === 'english') {
        setDisplayLanguage('vietnamese');
      } else {
        setDisplayLanguage('english');
      }
      setIsOpened(true);
    }
  };

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

