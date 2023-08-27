import { View, Keyboard, KeyboardAvoidingView, Dimensions } from "react-native";
import PostsScreen from "../PostsScreen/PostsScreen";
import Input from "../InputComponent/InputComponent";
import Button from "../ButtonComponent/Button";
import { LoginWrapper, KeyboardStyled, Title, Paragraph } from './StyledLoginScreen';
import { useState, useEffect } from "react";

const LoginScreen = () => {
    const [passwordShow, setpasswordShow] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)

    const handleShowPassword = () => {
        setpasswordShow(!passwordShow);
    };

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            (e) => {
                setKeyboardHeight(e.endCoordinates.height);
                setIsKeyboardOpen(true)
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardHeight(0);
                setIsKeyboardOpen(false)
            }
        );
    
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <PostsScreen>
            <KeyboardAvoidingView
            >
            <LoginWrapper isKeyboardOpen={isKeyboardOpen}>
                <Title>Увійти</Title>
                    <View>
                    <Input
                        customStyle={{ marginBottom: 16 }}
                        placeholder='Адреса електронної пошти' />
                        <Input placeholder='Пароль'
                            type={passwordShow === false && 'password'} secureTextEntry />
                        <Button title='Увійти'></Button>
                    </View>
                <Paragraph>Немає акаунту? Зареєструватися</Paragraph>
                </LoginWrapper>
                </KeyboardAvoidingView>
        </PostsScreen>
    )
}

export default LoginScreen; 