import Image from 'next/image'
import styles from '../styles/components/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles["footer__inner"]}>
        
        <div className={styles['product']}>
          <h3 className={`${styles["product__title"]} ${styles['footer__title']}`}>product</h3>
            <ul className={`${styles["product__list"]} ${styles['footer__list']}`}>
              <li className={`${styles["product__item"]} ${styles['footer__item']}`}>main dish</li>
              <li className={`${styles["product__item"]} ${styles['footer__item']}`}>soup</li>
              <li className={`${styles["product__item"]} ${styles['footer__item']}`}>salad</li>
              <li className={`${styles["product__item"]} ${styles['footer__item']}`}>smoothie</li>
            </ul>
        </div>

        <div className={styles['about']}>
          <h3 className={`${styles["about__title"]} ${styles['footer__title']}`}>about</h3>
            <ul className={`${styles["about__list"]} ${styles['footer__list']}`}>
              <li className={`${styles["about__item"]} ${styles['footer__item']}`}>our story</li>
              <li className={`${styles["about__item"]} ${styles['footer__item']}`}>green promise</li>
              <li className={`${styles["about__item"]} ${styles['footer__item']}`}>news</li>
            </ul>
        </div>

        <div className={styles['store']}>
          <h3 className={`${styles["store__title"]} ${styles['footer__title']}`}>store</h3>
            <ul className={`${styles["store__list"]} ${styles['footer__list']}`}>
              <li className={`${styles["store__item"]} ${styles['footer__item']}`}>subscription</li>
              <li className={`${styles["store__item"]} ${styles['footer__item']}`}>gift</li>
            </ul>
        </div>

        <div className={styles['help']}>
          <h3 className={`${styles["help__title"]} ${styles['footer__title']}`}>help</h3>
            <ul className={`${styles["help__list"]} ${styles['footer__list']}`}>
              <li className={`${styles["help__item"]} ${styles['footer__item']}`}>faq</li>
              <li className={`${styles["help__item"]} ${styles['footer__item']}`}>contact</li>
            </ul>
        </div>

        <div className={styles['followUs']}>
          <h3 className={`${styles["followUs__title"]} ${styles['footer__title']}`}>follow us</h3>
            <ul className={styles["followUs__list"]}>
            <li className={styles["followUs__item"]}>
              <Image src={'/assets/icons/instagram.png'} alt='instagram' width={40} height={40} loading='lazy'/>
            </li>

            <li className={styles["followUs__item"]}>
              <Image src={'/assets/icons/twitter.png'} alt='twitter' width={40} height={40} loading='lazy'/>
            </li>

            <li className={styles["followUs__item"]}>
              <Image src={'/assets/icons/pinterest.png'} alt='pinterest' width={40} height={40} loading='lazy'/>
            </li>

            <li className={styles["followUs__item"]}>
              <Image src={'/assets/icons/tiktok.png'} alt='tiktok' width={40} height={40} loading='lazy'/>
            </li>
              
            </ul>
        </div>

      </div>
      
      <div className={styles['footer__wrapper']}><h1>tastebox</h1></div>
      
    </footer>
  )
}

export default Footer
