import React, { MouseEventHandler } from "react";
import styles from "./Button.module.scss";

type ButtonTypes = "filled" | "outline";
interface ButtonProps {
    children: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: ButtonTypes;
}

export default function Button(props: ButtonProps) {
    const { children, onClick, type: buttonType = "filled" } = props;

    const getButtonClassNames = (type: ButtonTypes) => {
        const classNames = [styles.normalButton];
        if (type == "filled") {
            classNames.push(styles.filledButton);
        }
        return classNames.join(" ");
    };

    return (
        <button className={getButtonClassNames(buttonType)} onClick={onClick}>
            {children}
        </button>
    );
}
