import cn from "classnames";
import { FC, PropsWithChildren } from "react";
import styles from "./Text.module.scss";

export interface IText {
    className: string;
}

const Text: FC<PropsWithChildren<IText>> = ({ children, className }) => {
    return <p className={cn(styles.common, className)}>{children}</p>;
};

export default Text;
