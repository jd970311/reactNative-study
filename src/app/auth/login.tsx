import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSession } from '@/utils/ctx';
import { KeyboardAwareScrollView, KeyboardProvider } from 'react-native-keyboard-controller';
const Login = () => {
    const { signIn } = useSession();
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });
    const onChangeName = (val: string) => {
        setFormData({
            ...formData,
            login: val,
        });
    };
    const onChangePassword = (val: string) => {
        setFormData({
            ...formData,
            password: val,
        });
    };
    const handlerLogin = () => {
        setIsLoading(true);
        signIn(formData, setIsLoading);
    }

    //
    return (
        <KeyboardProvider preload={false}>
            <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <View style={styles.form}>
                        <View style={styles.pwd}>
                            <Text style={styles.text}>用户名/邮箱：</Text>
                            <TextInput style={styles.input} onChangeText={onChangeName} value={formData.login} autoFocus clearButtonMode="while-editing" />
                        </View>
                        <View style={styles.pwd}>
                            <Text style={styles.text}>密码：</Text>
                            <TextInput style={styles.input} onChangeText={onChangePassword} value={formData.password} autoFocus clearButtonMode="while-editing" secureTextEntry={!isVisible} />
                            <TouchableWithoutFeedback onPress={() => { setIsVisible(!isVisible) }}>
                                <View style={styles.eyeIcon}>
                                    <MaterialCommunityIcons name={isVisible ? 'eye' : 'eye-off'} size={24} color="black" />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handlerLogin}
                        >
                            {isLoading ? <ActivityIndicator size="small" color="black" /> : <Text>登录</Text>}
                        </TouchableOpacity>
                    </View>

                </View>
            </KeyboardAwareScrollView>
        </KeyboardProvider>

    )
}
export default Login


const styles = StyleSheet.create({
    pwd: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        width: '30%',
        textAlign: 'right',
    },
    input: {
        width: '60%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    scrollView: {
        borderWidth: 1,
        borderColor: 'red',
        height: '100%',
    },
    container: {
        flex: 1,
    },

    form: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderWidth: 1,
        color: 'blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        height: 40,
        borderRadius: 10,
        margin: 10,
    },
    eyeIcon: {
        position: 'absolute',
        right: 30,
        top: 20,
    },

});