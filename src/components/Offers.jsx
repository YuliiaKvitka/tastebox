import styles from '../styles/components/Offers.module.scss'
import BoxOffers from './BoxOffers'

const Offers = () => {
    return (
        <section className={styles['offers']}>
            <div className={styles["offers__inner"]}>
                <div className={styles["offers__inner-left"]}>
                    <h2>SELECT YOUR PLAN</h2>
                    <div className={styles["offers__title-text"]}>
                        <p>It arrives regularly<br/> It's easy to keep up with it.</p>
                    </div>
                </div>
                <div className={styles["offers__inner-right"]}>
                    <BoxOffers />
                    <div className={styles['faq']}>
                        <h3 className={styles['faq__title']}>faq</h3>
                        <ul className={styles["faq__list"]}>

                            <li className={styles["faq__item"]}>
                                <div className={styles['faq__inner']}>
                                    <span>q</span>
                                    <h4 className={styles['faq__question']}>When will I receive my first order?</h4>
                                </div>
                                <div className={styles['faq__answer']}>Although it depends on the date of your order and the area of ​​delivery, your order will be delivered within 4 days at the earliest. From the second time onward, your order will be delivered at the delivery frequency you selected at the time of purchase.</div>
                            </li>

                            <li className={styles["faq__item"]}>
                                <div className={styles['faq__inner']}>
                                    <span>q</span>
                                    <h4 className={styles['faq__question']}>Can I purchase it just once to try it out?</h4>
                                </div>
                                <div className={styles['faq__answer']}>You can stop or cancel your subscription after the first delivery. Please complete the procedure from the FAQ before the deadline for changing your next order.</div>
                            </li>

                            <li className={styles["faq__item"]}>
                                <div className={styles['faq__inner']}>
                                    <span>q</span>
                                    <h4 className={styles['faq__question']}>Please tell me the size of the container</h4>
                                </div>
                                <div className={styles['faq__answer']}>All products are available in pouch containers. Width: Approx. 15cm, Height: Approx. 20cm, Thickness: Approx. 4cmPouches cannot be heated in the microwave. Be sure to transfer it to a heat-resistant plate before using it in the microwave.</div>
                            </li>

                             <li className={styles["faq__item"]}>
                                <div className={styles['faq__inner']}>
                                    <span>q</span>
                                    <h4 className={styles['faq__question']}>Please tell me how to save</h4>
                                </div>
                                <div className={styles['faq__answer']}>All products are frozen foods.Please store in a frozen environment below -18℃.Once thawed and refrozen, the flavor and quality may be lost.</div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        
        </section>
    )
}

export default Offers
