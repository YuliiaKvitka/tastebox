'use client'

import Link from 'next/link'
import styles from '../styles/components/Header.module.scss'
import Image from 'next/image'
import { useState } from 'react';
import Modal from './Modal';
import AllProducts from './AllProducts';

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleProductClick = () => {
    setModalOpen(!isModalOpen);
  };

  const handleBurgerClick = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={styles['header']}>
        <div className="container">
          <div className={styles["header__inner"]}>
            <nav className={styles['header__nav']}>
              <ul className={styles["header__list"]}>
                <li className={styles["header__item"]}>
                  <Link href='##' className={`${styles['header__link']} ${isModalOpen ? styles['header__link-caretUp'] : styles['header__link-caretDown']}`} onClick={handleProductClick}>product</Link>
                </li>
                <li className={styles["header__item"]}>
                  <Link href='##' className={styles['header__link']}>our story</Link>
                </li>
                <li className={styles["header__item"]}>
                  <Link href='##' className={`${styles['header__link']} ${styles['header__link-arrowUpRight']}`}>faq</Link>
                </li>
              </ul>
              <div className={styles['header__actions']}>
                <button className={styles["header__button"]}>log in</button>
                <button className={styles["header__burger"]} onClick={handleBurgerClick}>
                  <Image src='/assets/icons/list.svg' alt='list' width={24} height={24} layout='fixed' loading='lazy'/>
                </button>
              </div>
            </nav>
          </div>
        </div>
        {isMobileMenuOpen && (
          <nav className={styles['mobileMenu']}>
            <ul className={styles["mobileMenu__list"]}>
              <li className={styles["mobileMenu__item"]}>
                <Link href='##' className={`${styles['mobileMenu__link']} ${isModalOpen ? styles['mobileMenu__link-caretUp'] : styles['mobileMenu__link-caretDown']}`} onClick={handleProductClick}>product</Link>
              </li>
              <li className={styles["mobileMenu__item"]}>
                <Link href='##' className={styles['mobileMenu__link']}>our story</Link>
              </li>
              <li className={styles["mobileMenu__item"]}>
                <Link href='##' className={`${styles['mobileMenu__link']} ${styles['mobileMenu__link-arrowUpRight']}`}>faq</Link>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* ----------------------Modal ----------------------------------- */}
      <Modal isOpen={isModalOpen} onClose={handleProductClick}>
        <nav className={styles.modal__nav}>
          <ul className={styles.modal__list}>
            <li className={styles.modal__item}>
                <a
                href="##"
                className={`${styles['modal__link']} ${isModalOpen ? styles['modal__link-caretDown'] : styles['modal__link-caretUp']}`}
                onClick={handleProductClick}
              >
                product
              </a>
            </li>
            <li className={styles.modal__item}>
              <a href='##' className={styles.modal__link}>our story</a>
            </li>
            <li className={styles.modal__item}>
              <a href='##' className={`${styles.modal__link} ${styles['modal__link-arrowUpRight']}`}>faq</a>
            </li>
          </ul>
          <span className={styles.modal__logo}>tastebox</span>
          <div className={styles.modal__actions}>
            <button className={styles.modal__button}>log in</button>
            <button className={styles.modal__burger}>
              <Image src='/assets/icons/list-white.svg' alt='list' width={24} height={24} layout='fixed' loading='lazy'/>
            </button>
          </div>
        </nav>
        <div className={styles.modalContent}>
          <AllProducts/>
        </div>
      </Modal>
    </>
  )
}

export default Header;
