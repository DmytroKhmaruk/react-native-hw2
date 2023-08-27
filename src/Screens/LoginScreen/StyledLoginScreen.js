import { Dimensions } from 'react-native';
import styled from 'styled-components/native'

export const KeyboardStyled = styled.KeyboardAvoidingView`
    flex: 1;
`;

export const LoginWrapper = styled.View`
    background-color: #ffffff;
    border-radius: 25px 25px 0px 0px;
    margin-top: ${props => props.isKeyboardOpen
        ? `${Math.min(Dimensions.get('window').height * 0.4, 312)}px`
        : `${Math.min(Dimensions.get('window').height * 0.7, 446)}px`};
    padding: 32px 16px 111px 16px;
    position: relative;
`;

export const Title = styled.Text`
    color: #212121;
text-align: center;
font-size: 30px;
font-weight: 500;
letter-spacing: 0.3px;
margin-bottom: 33px;
`;

export const Paragraph = styled.Text`
    text-align: center;

    color: #1B4371;
    font-size: 16px;
    font-weight: 400;
`;
