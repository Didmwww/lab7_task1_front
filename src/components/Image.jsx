import React, { useState } from 'react';
import cityImage from '../assets/cher.jpg';

function Image() {
  const [isVisible, setIsVisible] = useState(true);
  const [imgWidth, setImgWidth] = useState(600);

  const addImage = () => setIsVisible(true);
  const removeImage = () => setIsVisible(false);
  
  const increaseImage = () => {
    if (isVisible) setImgWidth(prevWidth => prevWidth + 50);
  };
  
  const decreaseImage = () => {
    if (isVisible && imgWidth > 100) setImgWidth(prevWidth => prevWidth - 50);
  };

  return (
    <div className="section">
      <div id="image-container" style={{ minHeight: '350px' }}>
        {isVisible && (
          <a href="https://city.cv.ua/" target="_blank" rel="noopener noreferrer">
            <img 
              src={cityImage} 
              alt="Панорама міста Чернівці" 
              style={{ 
                width: `${imgWidth}px`, 
                borderRadius: '6px', 
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)', 
                transition: 'width 0.3s ease' 
              }} 
            />
          </a>
        )}
      </div>
      
      <div className="controls">
        <button onClick={addImage}>Додати</button>
        <button onClick={increaseImage}>Збільшити</button>
        <button onClick={decreaseImage}>Зменшити</button>
        <button onClick={removeImage}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;