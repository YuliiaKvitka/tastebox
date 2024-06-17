import React from 'react';
import styles from '../styles/components/FeatureCardList.module.scss';
import FeatureCard from './FeatureCard';

const FeatureCardList = ({ cards }) => {
    return (
        <div className={styles.cardList}>
            {cards.map((card, index) => (
                <div key={index} className={styles.featureCard}>
                    <FeatureCard
                        src={card.src}
                        srcIcon={card.srcIcon}
                        title={card.title}
                        description={card.description}
                        linkText={card.linkText}
                        linkUrl={card.linkUrl}
                    />
                </div>
            ))}
        </div>
    );
};

export default FeatureCardList;

