import React, {useState} from 'react';

const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    React.useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });
    return { width };
};

export default useResize;