import React, {useState, useRef} from 'react';

const Input = () => {
    const [name, setName] = useState<string>("");
    const ref = useRef<HTMLInputElement>(null!);
    
    // if(ref && ref.current) {
        console.log(ref?.current?.value)
    // }
    return (
        <input ref={ref} value={name} onChange={e => setName(e.target.value)}/>
    );
};

export default Input;