// BoxOffers.js
import React from 'react';
import Box from './Box';
import boxes from '../../public/data/boxData'; // Импорт данных о коробках
import styles from '../styles/components/BoxOffers.module.scss';

// Основной компонент, который отображает все коробки с предложениями
const BoxOffers = () => {
  return (
    <div className={styles.boxOffers}>
      {/* Отображаем каждую коробку, проходя по массиву данных */}
      {boxes.map((box, index) => (
        <Box 
          key={index} // Уникальный ключ для каждого элемента массива
          size={box.size} 
          meals={box.meals} 
          price={box.price} 
          specialOffer={box.specialOffer} 
          color={box.color} // Пропс для цвета заголовка
          textColor={box.textColor} // Пропс для цвета текста в заголовке
          colorSpecial={box.colorSpecial}
        />
      ))}
    </div>
  );
};

export default BoxOffers;


