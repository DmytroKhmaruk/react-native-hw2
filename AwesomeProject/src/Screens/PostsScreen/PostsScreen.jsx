import { ImageBackground } from 'react-native';

const PostsScreen = ({ children }) => {
    
    return (
        <ImageBackground
            source={require('../../img/PhotoBG.png')} 
        >
            {children}
        </ImageBackground>
    )
}

export default PostsScreen;