import { View, Text, StyleSheet, } from 'react-native';
import Button from '@/components/Button';
const NetWorkError = ({ title, onReload }: { title?: string, onReload: () => void }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title || '请求出错啦'}</Text>
      <Button title={title || '重新加载'} onPress={onReload} />
    </View >
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 20
  },
});
export default NetWorkError;