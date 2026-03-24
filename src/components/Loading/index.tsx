import { ActivityIndicator, StyleSheet } from 'react-native';
export default function Loading() {
  return (
    <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />
  )
}

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});