
import ImageRow from './ImageRow';
import imageRowsData from '../../public/data/imageData';
import styles from '../styles/components/ImageGallery.module.scss';

const ImageGallery = () => {
    return (
        <section className={styles.imageGallery}>
            {imageRowsData.map((row, index) => (
                <ImageRow key={index} images={row} />
            ))}
        </section>
    );
};

export default ImageGallery;
