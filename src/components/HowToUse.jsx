import Image from 'next/image'
import styles from '../styles/components/HowToUse.module.scss'

const HowToUse = () => {
    return (
        <section className={styles['how-to-use']}>
            <div className={styles["how-to-use__inner"]}>
                <div className={styles['how-to-use__wrapper']}>
                    <h2 className={styles["how-to-use__title"]}>How to use</h2>
                    <ol className={styles["how-to-use__list"]}>
    
                        <li value='01' className={styles["how-to-use__item"]}>
                            <h3 className={styles["how-to-use__caption"]}>Create Your Box</h3>
                            <p className={styles["how-to-use__text"]}>Choose your products and order your own box!</p>
                        </li>
    
                        <li value='02' className={styles["how-to-use__item"]}>
                            <h3 className={styles["how-to-use__caption"]}>Deliver to Home</h3>
                            <p className={styles["how-to-use__text"]}>Deliver individual flash-frozen ingredients to your home</p>
                        </li>
    
                        <li value='03' className={styles["how-to-use__item"]}>
                            <h3 className={styles["how-to-use__caption"]}>Make in One-step</h3>
                            <p className={styles["how-to-use__text"]}>Put it on your favorite plate and microwave it! When heating in the microwave, be sure to use a heat-resistant container.</p>
                        </li>
                    </ol>
                </div>
                <div className={styles['how-to-use__wrapper']}>
                    <Image src='/assets/how-to-use/1.jpeg' alt='' width={388}
                    height={538} loading='lazy'/>
                </div>
                
            </div>
        
        </section>
    )
}

export default HowToUse
