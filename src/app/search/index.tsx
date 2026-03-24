import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
const Search = () => {
  const router = useRouter();
  const [number, setNumber] = useState('');
  const onChangeNumber = (val: any) => {
    setNumber(val);
  };
  const onSubmitEditing = ({ nativeEvent: { text, eventCount, target } }: { nativeEvent: any }) => {
    const keyWords = text.trim();
    if (!keyWords) {
      Alert.alert('提示', '请输入关键词');
      return;
    }
    router.navigate({
      pathname: '/search/[key]',
      params: { keyWords: keyWords },
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Ionicons style={{ marginLeft: 6 }} name="search-outline" size={20} color={'#888'} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="通过关键词搜索"
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus={true}
          returnKeyType="search"
          placeholderTextColor="red"
          onSubmitEditing={onSubmitEditing}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    margin: 10,
    height: 40,
    borderRadius: 20,
  },
  input: {
    width: '86%',
    height: 40,
  },
});
export default Search;
