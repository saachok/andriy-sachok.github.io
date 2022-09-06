import React from 'react';

import GalleryItem from './GalleryItem';
import classes from './Gallery.module.css';

const Gallery = (props) => {
  return (
    <div className={classes.gallery}>
      <button>Prev img</button>
      <GalleryItem gallery={props.gallery} />
      <button>Next img</button>
    </div>
  );
};

export default Gallery;
