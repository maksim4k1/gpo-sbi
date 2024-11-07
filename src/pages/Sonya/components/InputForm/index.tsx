import React, { useState } from 'react';
import styles from './page.module.css'; 
import { type FC } from "react";

interface InputFormProps {
    onAddTodo: (title: string, text: string) => void;
    onClose: () => void; 
}

export const InputForm: FC<InputFormProps> = ({ onAddTodo, onClose }) => {
    const [inputTitle, setInputTitle] = useState<string>(""); 
    const [inputText, setInputText] = useState<string>("");   

    const handleAddTodo = () => {
        if (inputTitle.trim() !== "" && inputText.trim() !== "") {
            onAddTodo(inputTitle, inputText); // Передаем оба значения в родительский компонент
            setInputTitle("");
            setInputText("");
            onClose(); 
        }
    };

    return (
        <div className={styles.inputContainer}> {/* Контейнер для ввода задачи */}
            <div className={styles.header}>
                <h3 className={styles.formTitle}>Создать задачу</h3> {/* Заголовок формы */}
                <span className={styles.closeButton} onClick={onClose}>&times;</span> {/* Крестик для закрытия */}
            </div>
            <input
                type="text"
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
                placeholder="Введите заголовок задачи" // Поле для заголовка
                className={styles.inputTitle} // Используем отдельный класс для заголовка
            />
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Введите текст задачи" // Поле для текста задачи
                className={styles.inputDescription} // Используем отдельный класс для описания
            />
            <button onClick={handleAddTodo} className={styles.addButton}>
                Добавить
            </button>
            <button onClick={onClose} className={styles.cancelButton}>
                Отмена
            </button> {/* Кнопка отмены */}
        </div>
    );
};

export default InputForm;