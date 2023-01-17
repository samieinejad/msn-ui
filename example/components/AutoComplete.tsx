import React, {FocusEvent, ReactNode, useCallback, useState} from 'react';
import useBlurElement from "@/hooks/useBlurElement";

interface Props<T> {
    name: string,
    items: T[],
    renderItem: (item: T) => ReactNode
}

const AutoComplete = <T, >({name, items, renderItem}: Props<T>) => {
    const width = 96;
    const [filteredItems, setFilteredItems] = useState<T[]>(items);
    const [selectedItem, setSelectedItem] = useState<T>();
    const [showOptions, setShowOptions] = useState(false);
    const ref = React.createRef<HTMLDivElement>();

    useBlurElement(ref, showOptions)

    const hideOptions = useCallback((e: FocusEvent<HTMLElement>) => {
            if (e.currentTarget?.id === e.relatedTarget?.id || e.currentTarget.contains(e.relatedTarget)) return;

            console.log('hide')
            setShowOptions(false);
        }, [],
    );

    const handleSelect = useCallback((item: T) => {
            setSelectedItem(item);
            setShowOptions(false);
        }, [],
    );

    const handleFilter = useCallback((text: string) => {

        }, [],
    );

    return (
        <div className={`p-4`}>
            <div className={`relative w-${width} bg-red-300 inline-block select-none`}
                 ref={ref}
                 id={name}
                 onBlur={hideOptions}
                 tabIndex={-1}>

                <input
                    className={`w-${width} bg-gray-100 cursor-pointer rounded border border-gray-300 px-5 py-2`}
                    onClick={() => setShowOptions(!showOptions)}/>

                <div className={`bg-gray-200 absolute w-${width} border border-gray-100 rounded shadow`}>
                    {filteredItems.map((item, index) => (
                        <div key={index}
                             className={'cursor-pointer p-2 bg-white hover:bg-blue-500 hover:text-white rounded'}
                             onClick={() => handleSelect(item)}>
                            {renderItem(item)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AutoComplete;
