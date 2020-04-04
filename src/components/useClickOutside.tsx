import { useEffect, MouseEvent, MutableRefObject } from 'react';

const useClickOutside = (ref:MutableRefObject<HTMLElement>, handler: (event: MouseEvent | Event) => void) => {

    useEffect( () => {

        const listener = (event: MouseEvent | Event) => {
            if(!ref.current || ref.current.contains(event.target as Node)) {
                return
            }
            handler(event);
        };
    
        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)

        return () => {
            document.removeEventListener("mousedown", listener)
            document.removeEventListener("touchstart", listener)
        }

    }, [handler, ref])
    

};

export default useClickOutside;