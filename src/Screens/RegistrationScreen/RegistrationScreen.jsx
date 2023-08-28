import { View, Keyboard, ScrollView, KeyboardAvoidingView, Dimensions, Text } from "react-native";
import PostsScreen from "../PostsScreen/PostsScreen";
import Input from "../InputComponent/InputComponent";
import Button from "../ButtonComponent/Button";
import { LoginWrapper, KeyboardStyled, Title, Paragraph, ShowPassword } from '../LoginScreen/StyledLoginScreen';
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegistrationScreen = () => {
    const [passwordShow, setPasswordShow] = useState(false);

    const navigation = useNavigation();

   const handleShowPassword = () => {
        setPasswordShow(!passwordShow);
    }; 

    return (
        <PostsScreen>
        <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                }}
            >
                <LoginWrapper
                    // isKeyboardOpen={isKeyboardOpen}
                >
            <Text>Реєстрація</Text>
            <View>
                        <Input
                            customStyle={{ marginBottom: 16 }}
                            placeholder='Username' />
                        <Input
                            customStyle={{ marginBottom: 16 }}
                            placeholder='Email' />
               <Input
                            placeholder='Пароль'
                            type={passwordShow === false && 'password'}
                        />
                        <ShowPassword onPress={handleShowPassword}>{passwordShow === false ? 'Показати' : 'Сховати'}</ShowPassword>
                <Button title='Зареєстуватися'></Button>
                    </View>
                    <Paragraph>Вже є акаунт?
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text>Увійти</Text>
                        </TouchableOpacity>
                    </Paragraph>
                </LoginWrapper>
        </ScrollView>
        </PostsScreen>
    )
}

export default RegistrationScreen; 