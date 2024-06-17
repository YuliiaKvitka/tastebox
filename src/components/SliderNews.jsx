import { useRef, useEffect } from 'react';
import styles from '../styles/components/SliderNews.module.scss';
import CardNews from './CardNews';

const SliderNews = ({ data, currentIndex, setCurrentIndex }) => {
  const listRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const slideLeft = () => {
    const nextIndex = currentIndex === 0 ? 0 : currentIndex - 1;
    setCurrentIndex(nextIndex);
  };

  const slideRight = () => {
    const nextIndex = currentIndex === data.length - 1 ? currentIndex : currentIndex + 1;
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
      <ul ref={listRef} className={styles.slider__list}>
        {data.map((card, index) => (
          <li key={card.id} className={styles.slider__item}>
            <CardNews
              src={card.src}
              alt={card.alt}
              date={card.date}
              description={card.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SliderNews;
