import styles from '../styles/components/LoveYourself.module.scss'

const LoveYourself = () => {
    return (
        <section className={styles['love-yourself']}>
            <h2>Love yourself, always.</h2>
            <div className={styles['love-yourself__wrapper']}>
                <p className={styles['love-yourself__text']}>A life where you can continue to love yourself.</p>
            </div>
            <div className={styles['love-yourself__btn-wrap']}><button className={styles["love-yourself__button"]}>Start today</button></div>
      
    </section>
  )
}

export default LoveYourself
