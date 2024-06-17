//Hero.module.scss

import Image from 'next/image'
import styles from '../styles/components/Hero.module.scss'
import Header from './Header'

const Hero = () => {
    return (
        <section className={styles['hero']}>
                    <div className={styles["hero__inner"]}>
                        <h1 className={styles['hero__title']}>tastebox</h1>
                    </div>
            </section>
    )
}

export default Hero
