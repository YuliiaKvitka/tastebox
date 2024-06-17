import Image from 'next/image'
import styles from '../styles/components/CardNews.module.scss'


const CardNews = ({src, alt, date, description,}) => {
    return (
        <div className={styles['card']}>
            <div className={styles['card__image']}>
                <Image src={src} alt={alt} width={334} height={237} loading='lazy' /></div>
            <div className={styles['card__content']}>
                <h3 className={styles["card__date"]}>{date}</h3>
                <h4 className={styles['card__description']}>{description}</h4>
            </div>
        
        </div>
    )
}

export default CardNews
