import { View } from "react-native";
import PostsScreen from "../PostsScreen/PostsScreen";
import Input from "../InputComponent/InputComponent";
import Button from "../ButtonComponent/Button";

const LoginScreen = () => {
    return (
        <PostsScreen>
        <View>
            <Text>Увійти</Text>
            <View>
            <Input placeholder='Email' />
            <Input placeholder='Password' secureTextEntry />
            <Button title='Увійти'></Button>
            </View>
            <Text>Немає акаунту? Зареєструватися</Text>
        </View>
        </PostsScreen>
    )
}

export default LoginScreen; 