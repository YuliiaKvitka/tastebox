import Image from 'next/image'
import styles from '../styles/components/Card.module.scss'


const Card = ({src, alt, title, description, calorie, protein, vegetables}) => {
    return (
        <div className={styles['card']}>
            <div className={styles['card__image']}>
                <Image src={src} alt={alt} width={400} height={400} loading='lazy' /></div>
            <div className={styles['card__content']}>
                <h3 className={styles["card__title"]}>{title}</h3>
                <h4 className={styles['card__description']}>{description}</h4>

                <ul className={styles['card__list']}>

                    <li className={styles["card__item"]}>
                        <h5 className={styles["card__caption"]}>Calorie</h5>
                        <h6 className={styles["card__element"]}>{calorie}</h6>
                    </li>

                    <li className={styles["card__item"]}>
                        <h5 className={styles["card__caption"]}>Protein</h5>
                        <h6 className={styles["card__element"]}>{protein}</h6>
                    </li>

                    <li className={styles["card__item"]}>
                        <h5 className={styles["card__caption"]}>Vegetables</h5>
                        <h6 className={styles["card__element"]}>{vegetables}</h6>
                    </li>

                </ul>
            </div>
        
        </div>
    )
}

export default Card
