import styles from "./page.module.css";
import { type FC } from "react";

export const Title: FC = () => {
  return <h1 className={styles.title}>Hello world!</h1>;
};
