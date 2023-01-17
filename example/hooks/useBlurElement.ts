import React, {useEffect} from 'react';

const UseBlurElement = (ref: React.RefObject<HTMLElement>, show: boolean) => {
    useEffect(() => {
        if (show) {
            ref.current?.focus();
        }
    }, [show])
};

export default UseBlurElement;
