import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from './index.module.css';

const ComModal = ({ imageUrl, handleClose }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <img src={imageUrl} alt="Modal Image" />
                <button className={styles.closeButton} onClick={handleClose}>
                    <CloseIcon />
                </button>
            </div>
        </div>
    );
};

export default ComModal