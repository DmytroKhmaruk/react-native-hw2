import { InputWrapper, StyledInput } from './StyledInputComponent'
import { useState } from "react";

const Input = ({ placeholder, ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <InputWrapper>
            <StyledInput>
                placeholder={placeholder} 
                placeholderTextColor='#BDBDBD'
                {...rest}
            </StyledInput>
        </InputWrapper>
    )
}

export default Input;