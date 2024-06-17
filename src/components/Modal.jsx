import React from 'react';
import styles from '../styles/components/Modal.module.scss';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal} >
      <div className={styles.modal__overlay} onClick={onClose}></div>
      <div className={`${styles.modal__content} container`}>
        {/* <button className={styles.modal__close} onClick={onClose}>
          &times;
        </button> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;



