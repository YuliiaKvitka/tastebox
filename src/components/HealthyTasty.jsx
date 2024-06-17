// components/HealthyTasty.jsx
'use client'
import { useState } from 'react';
import styles from '../styles/components/HealthyTasty.module.scss'
import Slider from './Slider';
import mainDishData from '../../public/data/MainDishData';
import soupData from '../../public/data/SoupData';
import saladData from '../../public/data/SaladData';
import smoothieData from '../../public/data/SmoothieData';
import setMenuData from '../../public/data/SetMenuData';
import Link from 'next/link';

const HealthyTasty = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const renderDataByTab = () => {
        switch (activeTab) {
            case 0:
                return mainDishData;
            case 1:
                return soupData;
            case 2:
                return saladData;
            case 3:
                return smoothieData;
            case 4:
                return setMenuData;
            default:
                return [];
        }
    };

    return (
        <section className={styles['healthy-tasty']}>
            <div className={styles["healthy-tasty__inner"]}>
                <h2 className={styles["healthy-tasty__title"]}>healthy & tasty</h2>
                <div className={styles['healthy-tasty__text']}>
                    <p>You can mix and match as you like depending on the occasion and mood.<br/>
                        Over 40 original recipes.</p>
                </div>

                <div className={styles['tabs']}>
                    <div className={styles.tabs__btn}>
                        <button
                            className={`${styles['tabs__btn-item']} ${activeTab === 0 ? styles.active : ''}`}
                            onClick={() => handleTabClick(0)}
                        >
                            Main Dish
                        </button>
                        <button
                            className={`${styles['tabs__btn-item']} ${activeTab === 1 ? styles.active : ''}`}
                            onClick={() => handleTabClick(1)}
                        >
                            Soup
                        </button>
                        <button
                            className={`${styles['tabs__btn-item']} ${activeTab === 2 ? styles.active : ''}`}
                            onClick={() => handleTabClick(2)}
                        >
                            Salad
                        </button>
                        <button
                            className={`${styles['tabs__btn-item']} ${activeTab === 3 ? styles.active : ''}`}
                            onClick={() => handleTabClick(3)}
                        >
                            Smoothie
                        </button>
                        <button
                            className={`${styles['tabs__btn-item']} ${activeTab === 4 ? styles.active : ''}`}
                            onClick={() => handleTabClick(4)}
                        >
                            Set Menu
                        </button>
                    </div>
                </div>
                <div className={styles['slider']}>
                    <Slider data={renderDataByTab()} />
                </div>

                <div className={styles['healthy-tasty__link-wrapper']}><Link className={styles['healthy-tasty__link']} href='##'>ALL PRODUCTS</Link></div>
            </div>
        </section>
    );
};

export default HealthyTasty;

