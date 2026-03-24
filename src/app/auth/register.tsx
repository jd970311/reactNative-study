import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { useState } from 'react';
import { post } from '@/utils/request';
import { Alert } from 'react-native';
import { useRouter } from 'expo-router';
const Register = ({ setIsUser }: { setIsUser: (isUser: boolean) => void }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        nickname: '',
        password: '',
    });
    const onChangeEmail = (text: string) => {
        setFormData({ ...formData, email: text });
    }
    const onChangeUsername = (text: string) => {
        setFormData({ ...formData, username: text });
    }
    const onChangeNickname = (text: string) => {
        setFormData({ ...formData, nickname: text });
    }
    const onChangePassword = (text: string) => {
        setFormData({ ...formData, password: text });
    }

    const handlerRegister = async () => {
        try {
            const { data, error } = await post('/auth/sign_up', formData);
            Alert.alert('注册成功', '测试');
            // 切换登录页面
            setIsUser(false)
        } catch (error) {
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>会员注册</Text>
            <View style={styles.form}>
                <Text>电子邮箱</Text>
                <TextInput style={styles.input} onChangeText={onChangeEmail}
                    value={formData.email} />
                <Text>用户名</Text>
                <TextInput style={styles.input} onChangeText={onChangeUsername}
                    value={formData.username} />
                <Text>昵称</Text>
                <TextInput style={styles.input} onChangeText={onChangeNickname}
                    value={formData.nickname} />
                <Text>密码</Text>
                <TextInput style={styles.input} onChangeText={onChangePassword}
                    value={formData.password} />
            </View>
            <View style={styles.button}>
                <Button title="注册" onPress={handlerRegister} />
            </View>
        </View>
    )
}
export default Register
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        padding: 10,
    },
    title: {
        height: 40,
        fontSize: 30
    },
    form: {
        marginTop: 10,
        borderWidth: 1,
    },
    input: {
        width: '60%',
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        padding: 10,
    },
    register: {}
});