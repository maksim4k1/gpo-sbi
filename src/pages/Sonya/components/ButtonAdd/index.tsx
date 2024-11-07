import React, { useState } from 'react';
import styles from './page.module.css'; 
import { type FC } from "react";
import InputForm  from "../InputForm"; 

export const ButtonAdd: FC<{ onAddTodo: (title: string, text: string) => void }> = ({ onAddTodo }) => {
    const [isInputVisible, setIsInputVisible] = useState<boolean>(false);

    const toggleInputVisibility = () => {
        setIsInputVisible(!isInputVisible);
    };

    return (
        <div className={styles.pageContainer}> 
            <button
                onClick={toggleInputVisibility}
                className={`${styles.button}`}
            >
                Добавить задачу
            </button>

            {isInputVisible && (
                <InputForm 
                    onAddTodo={onAddTodo} 
                    onClose={() => setIsInputVisible(false)} 
                />
            )}
        </div>
    );
};