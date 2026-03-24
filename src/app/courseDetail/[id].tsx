import {
    View,
    FlatList,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    Share,
    Platform,
    Pressable,
} from 'react-native';
import { Link } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import { useReducerFetchData } from '@/hooks/useReducerFetchData';
import Loading from '@/components/Loading';
import NetWorkError from '@/components/NetWorkError';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NoData from '@/components/NoData';
import dayjs from 'dayjs';
const CourseDetail = () => {
    const { id } = useLocalSearchParams();
    const { data, loading, error } = useReducerFetchData(`/courses/${id}`);
    if (data?.course) {
        data.course.image = 'https://picsum.photos/seed/course-10/800/450';
    }

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <NetWorkError onReload={() => { }} />;
    }
    const onShare = async () => {
        if (Platform.OS === 'ios') {
            await Share.share({
                message: data?.course?.name,
                url: `https://clwy.com/courses/${data?.course?.id}`,
            });
        } else if (Platform.OS === 'android') {
            await Share.share({
                message: data?.course?.name + '\n' + `https://clwy.com/courses/${data?.course?.id}`,
            });
        }
    };
    const Header = () => {
        return (
            <View style={styles.courseInfo}>
                <ImageBackground resizeMode="cover">
                    <Image source={{ uri: data?.course.image }} style={styles.image} />
                    <Text style={styles.courseName}>{data?.course?.name}</Text>
                    <View style={styles.content}>
                        <View style={{ justifyContent: 'space-between' }}>
                            <Text>全{data?.course?.chaptersCount}回</Text>
                            <Text>发布于{data?.course?.updatedAt}</Text>
                        </View>
                        <View style={styles.box}>
                            <View>
                                <TouchableOpacity onPress={onShare}>
                                    <MaterialCommunityIcons name="share" size={24} color="black" />
                                    <Text>分享</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons name="heart-outline" size={24} color="#ffb416" />
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            color: '#ffb416',
                                        }}
                                    >
                                        {data?.course?.likesCount}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    };

    const renderItem = ({ item, index }: { item: any; index: number }) => {
        return (
            <View style={styles.chapterItem}>
                {item?.chapters.map((chapter: any) => {
                    return (
                        <Link href={`/chaptersDetail/${chapter.id}`} asChild key={chapter.id}>
                            <Pressable>
                                <View
                                    key={chapter.id}
                                    style={{ flexDirection: 'row', padding: 10, borderWidth: 1, borderColor: 'blue' }}
                                >
                                    <View>
                                        <Text>{chapter.id}</Text>

                                        <Text>{chapter.title}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                            <Image
                                                source={{
                                                    uri: item.image,
                                                }}
                                                style={styles.avatar}
                                            />
                                            <Text>{item?.user?.username}</Text>
                                            <Text>{dayjs(chapter.createdAt).format('YYYY-MM-DD HH:mm:ss')}</Text>
                                        </View>
                                    </View>
                                    <Image source={{ uri: item.image }} style={styles.image1} />
                                </View>
                            </Pressable>
                        </Link>
                    );
                })}
            </View>
        );
    };
    return (
        <FlatList
            data={[data?.course]}
            renderItem={renderItem}
            ListHeaderComponent={<Header />}
            ListEmptyComponent={NoData}
            contentContainerStyle={styles.listContent}
        />
    );
};

const styles = StyleSheet.create({
    courseInfo: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ddd',
    },
    courseName: {
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
    },
    image: {
        width: '100%',
        height: 100,
    },
    image1: {
        width: 100,
        height: 100,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    listContent: {
        flexGrow: 1,
    },
    chapterItem: {
        padding: 10,
    },
});
export default CourseDetail;
