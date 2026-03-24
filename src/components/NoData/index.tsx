import { View, Text, StyleSheet } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
const NoData = () => {
  return (
    <View style={styles.noData}>
      <SimpleLineIcons name="drawer" size={32} color="#000" />
      <Text>暂无数据</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  noData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default NoData;
