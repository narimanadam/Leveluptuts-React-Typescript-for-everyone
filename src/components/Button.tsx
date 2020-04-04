import React, {MouseEvent} from 'react';

type Props = {
    handleClick:(e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({handleClick, children}) => {
    return (
        <button onClick={handleClick}> 
            {children}
            
        </button>
    );
};

export default Button;