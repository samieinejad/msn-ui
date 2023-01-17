import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import useBlurElement from "@/hooks/useBlurElement";

interface Props<T> {
    name: string,
    items: T[],
    renderItem: (item: T) => ReactNode
}

const Select = <T, >({name, items, renderItem}: Props<T>) => {
    const [selectedItem, setSelectedItem] = useState<T>();
    const [showOptions, setShowOptions] = useState(false);
    const ref = React.createRef<HTMLDivElement>();

    useBlurElement(ref, showOptions)

    const hideOptions = useCallback(() => {
            setShowOptions(false);
        }, [],
    );

    const handleSelect = useCallback((item: T) => {
            setSelectedItem(item);
            hideOptions();
        }, [],
    );

    return (
        <div className={`p-4`}>
            <div className={'relative w-96 bg-red-300 inline-block select-none'}
                 ref={ref}
                 id={name}
                 onBlur={hideOptions}
                 tabIndex={-1}>

                <div
                    className={`bg-gray-100 cursor-pointer rounded border border-gray-300 px-5 py-2`}
                    onClick={() => setShowOptions(!showOptions)}>{selectedItem ? renderItem(selectedItem) : '...'}</div>

                <div className={`${showOptions ? 'block' : 'hidden'}  bg-gray-200 absolute w-96 border border-gray-100 rounded shadow`}>
                    {items.map((item, index) => (
                        <div key={index} className={'cursor-pointer p-2 bg-white hover:bg-blue-500 hover:text-white rounded'}
                             onClick={() => handleSelect(item)}>
                            {renderItem(item)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Select;
