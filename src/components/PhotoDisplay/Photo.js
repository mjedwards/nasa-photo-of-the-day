import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function Photo() {
  const [photo, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=AVsZhABX2xK1idMmiIEojVAboQqGfdIhXVCMApu8`
      )
      .then(response => {
        console.log(response);
        setPhotos(response.data);
      })
      .catch(error => {
        console.log(`The error was: ${error}`);
      });
  }, []);

  return (
    <div className='photo'>
      {
        <PhotoCard
          title={photo.title}
          copyright={photo.copyright}
          url={photo.url}
          explanation={photo.explanation}
          date={photo.date}
        />
      }
    </div>
  );
}
