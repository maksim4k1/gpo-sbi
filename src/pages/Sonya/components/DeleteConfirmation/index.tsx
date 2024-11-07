import React from 'react';
import styles from './page.module.css'; 

interface DeleteConfirmationProps {
    onConfirm: () => void; 
    onCancel: () => void; 
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({ onConfirm, onCancel }) => {
    return (
        <div className={styles.confirmationContainer}>
            <span className={styles.closeButton} onClick={onCancel}>&times;</span> 
            <h3>Вы уверены, что хотите навсегда удалить задачу?</h3>
            <div className={styles.buttonContainer}>
                <button onClick={onConfirm} className={styles.confirmButton}>Удалить</button>
                <button onClick={onCancel} className={styles.cancelButton}>Отмена</button>
            </div>
        </div>
    );
};

export default DeleteConfirmation;