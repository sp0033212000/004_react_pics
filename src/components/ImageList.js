import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({images}) => {
    return <div className="image-list">{images.map((image) => {
        return <ImageCard key={image.id} image={image}/>
    })}</div>;
};

export default ImageList;
