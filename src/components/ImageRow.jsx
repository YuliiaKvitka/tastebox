import React from 'react';
import styles from '../styles/components/ImageRow.module.scss';

const ImageRow = ({ images }) => {
    return (
        <div className={styles.imageRow}>
            {images.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
            ))}
        </div>
    );
};

export default ImageRow;
