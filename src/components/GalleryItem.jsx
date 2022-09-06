import React from 'react';

import classes from './GalleryItem.module.css';

const GalleryItem = (props) => {
  return <img src={props.path} className={classes.image} />;
};

export default GalleryItem;
