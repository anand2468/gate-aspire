import React, { useState } from 'react';

export default function ImageCarousel({ images }:{images:string[]}) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  const previous = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={images[index]}
        alt={`Image ${index + 1}`}
        style={{
          width: '100%',
          maxHeight: '500px',
          objectFit: 'contain',
        }}
      />

      <div style={{ marginTop: '10px' }}>
        <button onClick={previous}>←</button>
        <span style={{ margin: '0 15px' }}>
          {index + 1} / {images.length}
        </span>
        <button onClick={next}>→</button>
      </div>
    </div>
  );
}