import React from 'react';

type Props = {
    title: string,
    isActive?: boolean
}

const Head = ({title, isActive = true}: Props) => {
    return (
        <div>
            <h1>{title}</h1>
            {isActive && <p>Active</p>}
        </div>
    );
};

export default Head;