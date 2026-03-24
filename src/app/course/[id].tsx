import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';
const Course = () => {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Text>Course:{id}</Text>
        </View>
    )
}
export default Course