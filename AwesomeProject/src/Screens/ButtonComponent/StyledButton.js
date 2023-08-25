import styled from 'styled-components'
import { TouchableOpacity, Text } from "react-native"

export const ButtonWrapper = styled(TouchableOpacity)`
    padding: 16px 32px;
    align-items: center;
    
    border: none;
    cursor: pointer;
    border-radius: 100px;
    background: #FF6C00;
`;

export const ButtonText = styled(Text)`
    color: #ffffff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
`;