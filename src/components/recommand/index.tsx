import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';

const Recommand = ({ title, recommendedCourses }: { title: string, recommendedCourses: any }) => {
  // const { title, recommendedCourses } = props;
  const renderItem = ({ item, index }: { item: any, index: number }) => {
    return (
      <View style={{
        padding: 5,
      }}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={{
          fontSize: 16,
          fontWeight: 'bold',
          marginTop: 5,
          width: 300,
        }} numberOfLines={1}>{item.name}——{item.name}</Text>
        <Text>{item.category.name}</Text>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 5,
        }}>
          <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
          <View style={{
            marginLeft: 5
          }}>
            <Text>{item.user.nickname}</Text>
            <Text>{item.user.company}</Text>
          </View>
        </View>
      </View>
    )
  }
  return (
    <ScrollView>
      <View>
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
        }}>{title}</Text>
        <FlatList
          data={recommendedCourses}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 150,
    borderRadius: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginTop: 5
  },
})

export default Recommand;