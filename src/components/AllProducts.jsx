import Image from 'next/image'
import styles from '../styles/components/AllProducts.module.scss'

const AllProducts = () => {
    return (
        <div className={styles['inner']}>
            <div className={styles['wrapper']}>
                <Image className={styles['image']} src={'/assets/all-products/1.jpeg'} width={198} height={250} alt='' loading='lazy'  />  
                <Image className={styles['image']} src={'/assets/all-products/2.jpeg'} width={198} height={250} alt='' loading='lazy'  />  
                <Image className={styles['image']} src={'/assets/all-products/3.jpeg'} width={198} height={250} alt='' loading='lazy'  />  
                <Image className={styles['image']} src={'/assets/all-products/4.jpeg'} width={198} height={250} alt='' loading='lazy'  />  
            </div>
            
            <div className={styles['link']}><a href='##'>ALL PRODUCTS</a></div>
        </div>
    )
}

export default AllProducts
