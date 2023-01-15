import React, {DetailedHTMLProps, FC, FunctionComponent, HTMLAttributes, InputHTMLAttributes} from 'react';

interface Props {
    rest?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    bgColor: string,
    // rest: Props

}

const Input: FC<Props> = (props) => {
    const {rest, bgColor} = props;
    return (
        <input  {...rest}/>
    );
};

export default Input;
