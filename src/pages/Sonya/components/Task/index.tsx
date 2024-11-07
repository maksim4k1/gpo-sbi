import styles from './page.module.css'; 
import DeleteConfirmation  from "../DeleteConfirmation"; 
import React, { FC, useState } from 'react';

interface TaskProps {
    key: number;
    title: string; 
    text: string;
    completed: boolean;
    index: number;
    onEdit: (title: string, text: string) => void;
    onDelete: (index: number) => void;
    onToggleComplete: (index: number) => void;
}

export const Task: FC<TaskProps> = ({ index, title, text, completed, onEdit, onDelete, onToggleComplete }) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [newTitle, setNewTitle] = useState<string>(title);
    const [newText, setNewText] = useState<string>(text);
    
    // Состояние для подтверждения удаления
    const [isConfirmingDelete, setIsConfirmingDelete] = useState<boolean>(false);

    const handleEditSubmit = () => {
        onEdit(newTitle, newText);
        setIsEditing(false);
    };

    return (
        <div className={styles.taskContainer}>
            <input 
                type="checkbox" 
                checked={completed} 
                onChange={() => onToggleComplete(index)} 
                className={styles.checkbox} 
            />
            {isEditing ? (
                <div className={styles.editForm}>
                    <span className={styles.closeButton} onClick={() => setIsEditing(false)}>&times;</span> 
                    <h3 className={styles.formTitle}>Изменить задачу</h3> 
                    <input 
                        type="text" 
                        value={newTitle} 
                        onChange={(e) => setNewTitle(e.target.value)} 
                        placeholder="Новый заголовок"
                    />
                    <textarea 
                        value={newText} 
                        onChange={(e) => setNewText(e.target.value)} 
                        placeholder="Новый текст задания"
                    />
                    <button className={styles.saveButton} onClick={handleEditSubmit}>Сохранить</button>
                    <button className={styles.cancelButton} onClick={() => setIsEditing(false)}>Отмена</button>
                </div>
            ) : (
                <>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <div className={styles.buttonContainer}> 
                        <button onClick={() => { setIsEditing(true); }} className={styles.smallButton}>Изменить</button>
                        <button onClick={() => setIsConfirmingDelete(true)} className={styles.smallButton}>Удалить</button>
                    </div>

                    {isConfirmingDelete && (
                        <DeleteConfirmation
                            onConfirm={() => {
                                onDelete(index);
                                setIsConfirmingDelete(false); 
                            }}
                            onCancel={() => setIsConfirmingDelete(false)} 
                        />
                    )}
                </>
            )}
        </div>
    );
};


