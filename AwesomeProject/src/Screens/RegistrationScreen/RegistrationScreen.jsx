import { View, Text } from "react-native";
import PostsScreen from "../PostsScreen/PostsScreen";
import Input from "../InputComponent/InputComponent";
import Button from "../ButtonComponent/Button";

const RegistrationScreen = () => {
    return (
        <PostsScreen>
        <View>
            <Text>Реєстрація</Text>
            <View>
                <Input placeholder='Username' />
                <Input placeholder='Email' />
                <Input placeholder='Password' secureTextEntry />
                <Button title='Зареєстуватися'></Button>
                <Text>Вже є акаунт? Увійти</Text>
            </View>
        </View>
        </PostsScreen>
    )
}

export default RegistrationScreen; 