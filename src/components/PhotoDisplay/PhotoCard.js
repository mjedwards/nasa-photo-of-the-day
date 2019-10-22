import React from "react";

const PhotoCard = props => {
  return (
    <div className='photo'>
      <h2>{props.title}</h2>
      <p>by {props.copyright}</p>
      <img src={props.url} alt={props.explanation} />
      <p>{props.date}</p>
      <p>{props.explanation}</p>
    </div>
  );
};
export default PhotoCard;
