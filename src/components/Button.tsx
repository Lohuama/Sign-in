import React from "react";

interface ButtonProps{
    text: string;
}

const Button : React.FC<ButtonProps> = ({text}) => {
    return(
        <>
            <a href="#">
                {text}
            </a>
        </>
    )
}

export default Button;