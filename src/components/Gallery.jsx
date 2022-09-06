import React, { useState } from 'react';

import GalleryItem from './GalleryItem';
import classes from './Gallery.module.css';

const Gallery = (props) => {
  const [index, setIndex] = useState(+0);

  const gallery = props.gallery;
  // console.log('gallery length:', gallery.length);

  const showPrevImg = () => {
    setIndex((prevValue) => {
      if (prevValue === 0) {
        return gallery.length - 1;
      }
      return prevValue - 1;
    });
  };

  const showNextImg = () => {
    setIndex((prevValue) => {
      if (prevValue === gallery.length - 1) {
        return 0;
      }
      return prevValue + 1;
    });
  };

  return (
    <div className={classes.gallery}>
      <button onClick={showPrevImg}>Prev img</button>
      <GalleryItem path={gallery[index].path} />
      <button onClick={showNextImg}>Next img</button>
    </div>
  );
};

export default Gallery;
