import { View, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import Login from './login';
import Register from './register';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { TouchableWithoutFeedback } from 'react-native';
const Auth = () => {
    const [isPolicy, setIsPolicy] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const handlerPresss = () => {
        setIsUser(!isUser);
    }
    return (
        <View style={styles.container}>
            <View style={styles.register}>
                {
                    isUser ? (
                        <Text onPress={handlerPresss}>已经有用户了&gt;&gt;&gt;会员登录
                        </Text>
                    ) : (
                        <Text onPress={handlerPresss}>新用户从这里开始&gt;&gt;&gt;注册
                        </Text>
                    )
                }
            </View>
            {
                isUser ? (
                    <Register setIsUser={setIsUser} />
                ) : (
                    <Login />
                )
            }
            <TouchableWithoutFeedback onPress={() => { setIsPolicy(!isPolicy) }}>
                <View style={styles.policy}>
                    <MaterialCommunityIcons name={isPolicy ? 'checkbox-marked' : 'checkbox-blank-outline'} size={24} color="black" />
                    <Text >我已阅读并同意</Text>
                    <Text onPress={() => { WebBrowser.openBrowserAsync('https://clwy.cn.rules') }} style={styles.policyText}>《用户协议》</Text>
                    <Text onPress={() => { WebBrowser.openBrowserAsync('https://clwy.cn.privacy') }} style={styles.policyText}>《隐私政策》</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default Auth;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
    },
    register: {
        width: '100%',
        height: 40,
        lineHeight: 40,
        backgroundColor: 'lightblue',
        display: 'flex',
    },
    policy: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    policyText: {
        fontSize: 16,
        marginLeft: 5,
        color: 'blue',
    }
});