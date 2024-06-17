'use client'

import { useEffect } from 'react';
import styles from '../styles/components/Gallery.module.scss'
import ImageGallery from './ImageGallery'

const Gallery = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/path/to/smoothScroll.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <section className={styles['gallery']}>
            <div className={styles["gallery__inner"]}>
                <h2 className='visually-hidden'>Gallery</h2>
                <ImageGallery/>
            </div>
        
        </section>
    )
}

export default Gallery
