//MealDescription.module.scss

import Image from 'next/image'
import styles from '../styles/components/MealDescription.module.scss'

const MealDescription = () => {
    return (
        <section className={styles['meal-description']}>
            <div className={styles["meal-description__inner"]}>
                <h2 className='visually-hidden'>Meal description </h2>
                <ul className={styles["meal-description__list"]}>
                    <li className={styles["meal-description__item"]}>
                        <h3 className={styles["meal-description__caption"]}>Tastebox to meal!</h3>
                        <h4 className={styles["meal-description__text"]}>A healthy home-cooked meal with plenty of vegetables that comes straight from the ingredients.</h4>
                    </li>
                    <li className={`${styles["meal-description__item"]}`} >
                        <Image className={styles['meal-description__image']} src='/assets/meal-desc/1.png' alt='meal' width={303} height={332} loading='lazy'/>
                    </li>
                    <li className={`${styles["meal-description__item"]} ${styles['meal-description__wrapper']}`} >
                        <p className={styles['meal-description__desc']}>Even in your busy days,we want you to take care of your body and mind.</p>
                        <p className={styles['meal-description__desc']}>We deliver home-cooked meals packed with vegetables that can be prepared in just a few moments to your home.</p>
                        <p className={styles['meal-description__desc']}>Even easier. More delicious. More fun.I hope you continue to have a healthy diet.</p>
                    </li>

                </ul>

            </div>
        
        </section>
    )
}

export default MealDescription

