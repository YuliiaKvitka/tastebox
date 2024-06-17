// Box.js
import React from 'react';

import styles from '../styles/components/Box.module.scss';
import SpecialOffer from './SpecialsOffers';

// Подкомпонент, представляющий отдельную коробку
const Box = ({ size, meals, price, specialOffer, color, textColor, colorSpecial }) => {
  return (
    <div className={styles.box} >
      <div className={styles.header} style={{ backgroundColor: color, color: textColor }}>
        <span>{size} BOX</span>
      </div>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <div className={styles.image}></div> {/* Изображение коробки */}
          <div className={styles.meals}>
            <span className={styles.meals__number}>{meals}</span> {/* Количество приемов пищи */}
            <span className={styles.meals__text}>MEAL</span>
          </div>
        </div>
        <div className={styles.perMeal}>Per Meal</div>
        {specialOffer && <div className={styles.specialOffer}  style={{ backgroundColor: colorSpecial }}>Special Offer</div>}
        <div className={styles.price}><span>$</span>{price}</div>
      </div>
    </div>
  );
};

export default Box;



