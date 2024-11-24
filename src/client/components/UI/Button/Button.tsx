import styles from "./button.module.css";
import { type FC } from "react";

interface Button {
    title: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    
}
export const Button: FC<Button> = ({title,onClick}) => {
 
    return (
        <button className={styles.button}
        onClick = {onClick}
        >{title}</button>
    )
};
