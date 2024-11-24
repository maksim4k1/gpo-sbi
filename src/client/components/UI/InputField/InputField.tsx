import styles from "./inputfield.module.css";
import { type FC } from "react";
interface InputField {
    label: string;
    inputType: string;
    value: string;
    handleChangeText: (text: string) => void;
}
export const InputField: FC<InputField> = ({ label, inputType, value, handleChangeText, }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleChangeText(event.target.value);
    };
    return <div className={styles.input}>
        <label htmlFor="input-field" className = {styles.input_label}>{label}</label>
        <input type={inputType}
            id="input-field"
            value={value}
            onChange={handleChange}
            className = {styles.input_field}
        />
    </div>;
};
