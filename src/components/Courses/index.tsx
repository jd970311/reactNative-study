import { View, Text, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
const Courses = ({ title, courses }: { title: string, courses: any }) => {
  const renderItem = ({ item, index }: { item: any, index: number }) => {
    return (
      <Link href={`/course/${item.id}`} asChild>
        <Pressable>
          <View style={[
            index === 0 ? { borderWidth: 1 } : { marginLeft: 10, borderWidth: 2 },
          ]}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.box}>
              <Text>{item.name}</Text>
            </View>
          </View>
        </Pressable>
      </Link>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
      }}>{title}</Text>
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    marginTop: 5,
    width: 200,
    height: 80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  box: {
    width: 200,
    height: 80,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#f5f5',
    padding: 10,
  }
})
export default Courses