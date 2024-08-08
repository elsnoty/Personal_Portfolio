import { ReactNode } from "react";

const Btn = (props: {
    className: string;
    text: string;
    icon?: ReactNode;
}) => {
    return (
        <button
        className={`${props.className}`}
        >
        {props.text}
        {props.icon}
        </button>
    );
};

export default Btn;