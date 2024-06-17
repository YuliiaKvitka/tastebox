import { useState, useRef, useEffect } from 'react';
import styles from '../styles/components/Slider.module.scss';
import Card from './Card';
import Image from 'next/image';

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const listRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const slideLeft = () => {
    const nextIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  };

  const slideRight = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(nextIndex);
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current - touchEndXRef.current > 50) {
      slideRight();
    }
    if (touchStartXRef.current - touchEndXRef.current < -50) {
      slideLeft();
    }
  };

  useEffect(() => {
    scrollToSlide(currentIndex);
  }, [currentIndex]);

  const scrollToSlide = (index) => {
    if (listRef.current) {
      const slideWidth = listRef.current.children[0].offsetWidth + 20;
      const offset = (listRef.current.offsetWidth - slideWidth) / 2;
      listRef.current.scrollTo({
        left: index * slideWidth - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      className={styles.slider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button className={styles.btnLeft} title="scroll left" onClick={slideLeft}>
        <Image src={'/assets/icons/arrowLeft.svg'} alt='' width={32} height={32} />
      </button>

      <ul ref={listRef} className={styles.slider__list}>
        {data.map((card, index) => (
          <li key={card.id} className={styles.slider__item}>
            <Card
              src={card.src}
              alt={card.alt}
              title={card.title}
              description={card.description}
              calorie={card.calorie}
              protein={card.protein}
              vegetables={card.vegetables}
            />
          </li>
        ))}
      </ul>

      <button className={styles.btnRight} title="scroll right" onClick={slideRight}>
        <Image src={'/assets/icons/arrowRight.svg'} alt='' width={32} height={32} />
      </button>
    </section>
  );
};

export default Slider;
