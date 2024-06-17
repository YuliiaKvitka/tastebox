'use client';
import { useState } from 'react';
import styles from '../styles/components/News.module.scss';
import Image from 'next/image';
import SliderNews from './SliderNews';
import cardsNewsData from '../../public/data/cardsNewsData';
import Link from 'next/link';

const News = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideLeft = () => {
        const nextIndex = currentIndex === 0 ? 0 : currentIndex - 1;
        setCurrentIndex(nextIndex);
    };

    const slideRight = () => {
        const nextIndex = currentIndex === cardsNewsData.length - 1 ? currentIndex : currentIndex + 1;
        setCurrentIndex(nextIndex);
    };

    return (
        <section className={styles['news']}>
            <h2 className='visually-hidden'>News</h2>
            <div className="news__inner">
                <div className={styles['news__wrapper']}>
                    <h3 className={styles["news__title"]}>News</h3>
                    <button
                        className={`${styles.btnLeft} ${currentIndex === 0 ? styles.disabled : ''}`}
                        title="scroll left"
                        onClick={slideLeft}
                        disabled={currentIndex === 0}
                    >
                        <Image src={'/assets/icons/arrowLeft.svg'} alt='' width={32} height={32} />
                    </button>
                    <button
                        className={`${styles.btnRight} ${currentIndex === cardsNewsData.length - 1 ? styles.disabled : ''}`}
                        title="scroll right"
                        onClick={slideRight}
                        disabled={currentIndex === cardsNewsData.length - 1}
                    >
                        <Image src={'/assets/icons/arrowRight.svg'} alt='' width={32} height={32} />
                    </button>
                </div>
                <SliderNews data={cardsNewsData} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                <div className={styles['news__link-wrapper']}><Link className={styles['news__link']} href='##'>Read more</Link></div>
            </div>
        </section>
    );
}

export default News;
