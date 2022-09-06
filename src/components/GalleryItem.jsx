import React from 'react';

import classes from './GalleryItem.module.css';

const GalleryItem = (props) => {
  const gallery = props.gallery;

  return <img src={gallery[0].path} className={classes.image} />;
};

export default GalleryItem;
