import React from 'react';

const Displaysimpson = ({ character, quote, image }) => {
  return (
    <div className="Displaysimpson">
      <img src={image} alt="nada" />
      <ul>
        <li>name : {character}</li>
        <li>
          quote : {quote}
        </li>

      </ul>
    </div>
  );
};

export default Displaysimpson;