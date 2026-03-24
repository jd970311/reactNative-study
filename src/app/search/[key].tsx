import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useReducerFetchData } from '@/hooks/useReducerFetchData';
const SearchKey = () => {
    const { keyWords } = useLocalSearchParams();
    const { data, loading, error, setData } = useReducerFetchData('/search', {
        params: {
            q: keyWords,
            page: 1,
            limit: 10,
        },
    });
    return (
        <View>
            <Text>123:{keyWords}</Text>
        </View>
    );
};

export default SearchKey;
