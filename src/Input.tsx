import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, useState} from 'react';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    name: string,
    type?: 'text' | 'number',
    dir?: 'rtl' | 'ltr',
    value?: string | number | undefined,
    bgColor?: string,
    // onChange?: (val: string) => void
}

const Input: FC<Props> = ({name, bgColor, value: initialValue, type, dir, ...rest}) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        // onChange?.(e.target.value)
    }

    return (
        <input style={{backgroundColor: bgColor}} dir={dir}
               id={name}
               name={name}
               type={type}
               value={value}
               onChange={handleChange}
               {...rest}/>
    );
};

Input.defaultProps = {
    type: 'text',
    dir: 'rtl',
}

export default Input;
