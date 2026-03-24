import { View, Text, StyleSheet, Button } from 'react-native';
import { useSession } from '@/utils/ctx';
import { useReducerFetchData } from '@/hooks/useReducerFetchData';
const User = () => {
    const { signOut } = useSession();
    const { data, error } = useReducerFetchData('/user/me', { method: 'GET' });
    console.log(data, 'data123');

    return (
        <View style={styles.container}>
            <Text>User</Text>
            <Button title="Sign-out" onPress={() => signOut()} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});
export default User;
