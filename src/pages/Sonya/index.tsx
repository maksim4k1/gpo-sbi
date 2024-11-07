import { Todo } from "./components/Todo";
import { ButtonAdd } from "./components/ButtonAdd";
import { InputForm } from "./components/InputForm";
import { Task } from "./components/Task";
import { FC, useState } from 'react';

interface TaskType {
    title: string;
    text: string;
    completed: boolean;
}

const Sonya: FC = () => {
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [isInputVisible, setIsInputVisible] = useState<boolean>(false); // Состояние видимости формы ввода

    const handleAddTodo = (title: string, text: string) => {
        setTasks([...tasks, { title, text, completed: false }]); 
        setIsInputVisible(false); // Закрываем форму после добавления задачи
    };

    const handleEditTask = (index: number, newTitle: string, newText: string) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = { ...updatedTasks[index], title: newTitle, text: newText };
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (index: number) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const handleToggleComplete = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed; // Переключаем состояние
        setTasks(updatedTasks);
    };

    return (
        <div style={{ backgroundColor: '#5F81B2', minHeight: '100vh', margin: 0 }}>
            <Todo />
            <ButtonAdd onAddTodo={handleAddTodo} /> 
            {isInputVisible && (
                <InputForm 
                    onAddTodo={handleAddTodo} 
                    onClose={() => setIsInputVisible(false)} 
                />
            )}
            <div>
                <h1 style={{ marginLeft: '35px', color: 'white', fontSize: '40px' }}>Список задач</h1>
                {tasks.length === 0 ? (
                    <p style={{ marginLeft: '35px', color: 'white', fontSize: '40px'}}>Список задач пуст</p>
                ) : (
                    tasks.map((task, index) => (
                        <Task 
                            key={index}
                            index={index}
                            title={task.title}
                            text={task.text}
                            completed={task.completed}
                            onEdit={(newTitle, newText) => handleEditTask(index, newTitle, newText)}
                            onDelete={() => handleDeleteTask(index)}
                            onToggleComplete={() => handleToggleComplete(index)}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Sonya;