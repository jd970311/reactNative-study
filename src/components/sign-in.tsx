import { StyleSheet, Text, View, Button } from 'react-native';
import { useSession } from '@/utils/ctx';
import { useRouter } from 'expo-router';
export default function SignIn() {
  const { signIn } = useSession();
  const router = useRouter();
  const processEvent = () => {
    router.navigate('/auth');
  };
  return (
    <View style={styles.container}>
      <Button title="登录" onPress={processEvent} color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
