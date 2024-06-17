import styles from '../styles/components/Features.module.scss'
import FeatureCardList from './FeatureCardList';

import cardsData from '../../public/data/cardsData'; // Импортируем cardsData

const Features = () => {
  return (
      <section className={styles['features']}>
          <div className={styles["features__inner"]}>
        <h2 className='visually-hidden'> Features </h2>
        <h3 className={styles['features__title']}>Features</h3>
        <FeatureCardList cards={cardsData} />
          </div>
      
    </section>
  )
}

export default Features
