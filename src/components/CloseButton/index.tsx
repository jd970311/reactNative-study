import { TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { SimpleLineIcons } from '@expo/vector-icons';

const CloseButton = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => router.dismiss()}>
      <SimpleLineIcons name="close" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,               // 或 44，接近 iOS 导航栏高度
    justifyContent: 'center', // 垂直居中图标
    alignItems: 'center',     // 水平居中图标
    paddingHorizontal: 8,
  },
});

export default CloseButton;