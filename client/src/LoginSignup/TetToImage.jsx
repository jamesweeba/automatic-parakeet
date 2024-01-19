import React, { useState,useEffect } from 'react';
import Top from "./Top";
import Buttom from "./buttom";
 // Import a CSS file for styling

const ImageConverter = () => {
    let [imageDescription, setImageDescription] = useState("")
    let [imageSize, setImageSize] = useState("");
    let [imageUrl, setImageUrl] = useState("");
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");
    useEffect(() => {
      setImageSize("256x256")
  
    }, [])
  
  
  
    return (
      <div className="App">
  
        <Top imageDescription={imageDescription}
          setImageDescription={setImageDescription}
          setImageSize={setImageSize}
          setImageUrl={setImageUrl}
          imageSize={imageSize}
          setLoading={setLoading}
          setError={setError} />
        <Buttom imageSize={imageSize} imageUrl={imageUrl} loading={loading} error={error} />
  
      </div>
    );
};

export default ImageConverter;
