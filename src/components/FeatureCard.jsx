import React from 'react';
import styles from '../styles/components/FeatureCard.module.scss';
import Image from 'next/image';

const FeatureCard = ({ src, srcIcon, title, description, linkText, linkUrl }) => {
    return (
        <div className={styles.featureCard}>
            <div className={styles.imageWrapper}>
                <Image src={src} alt={title} className={styles.image}  width={700} height={466} loading='lazy'/>
            </div>
            <div className={styles.content}>
                <Image src={srcIcon} alt="" className={styles.icon} width={72} height={72} loading='lazy'/>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <a href={linkUrl} className={styles.link}>
                    {linkText} →
                </a>
            </div>
        </div>
    );
};

export default FeatureCard;
