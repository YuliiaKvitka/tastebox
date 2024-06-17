// boxData.js

// Определение переменных цветов
const colors = {
  sBox: 'var(--color-secondary)',
  mBox: 'var(--color-branding)',
  lBox: 'var(--color-contrast)',
  textLight: 'var(--color-200)',
  textDark: 'var(-color-800)',
  sColor: 'rgba(145, 124, 120, 0.1)',
  mColor: 'rgba(255, 198, 52, 0.5)',
  lColor: ' rgba(253, 225, 45, 0.5)'
};

// Данные о коробках с использованием цветовых переменных
const boxes = [
  { size: 'S', meals: 8, price: 75, specialOffer: true, color: colors.sBox, textColor: colors.textLight, colorSpecial: colors. sColor }, // Цвет для S BOX
  { size: 'M', meals: 12, price: 69, specialOffer: true, color: colors.mBox, textColor: colors.textLight, colorSpecial: colors. mColor  }, // Цвет для M BOX
  { size: 'L', meals: 20, price: 67, specialOffer: true, color: colors.lBox, textColor: colors.textDark, colorSpecial: colors. lColor  }  // Цвет для L BOX
];

export default boxes;
export { colors }; // Экспортируем цвета, чтобы использовать их в других местах



