import { View, Text, StyleSheet, FlatList, Pressable, Image } from 'react-native';
import { useReducerFetchData } from '@/hooks/useReducerFetchData';
import Loading from '@/components/Loading';
import NetWorkError from '@/components/NetWorkError';
import NoData from '@/components/NoData';
import { Link } from 'expo-router';
const VideoList = (props: any) => {
    // const { data, loading, error } = useReducerFetchData(`/categories/${props.id}`);
    // if (loading) {
    //   return <Loading />;
    // }
    // if (error) {
    //   return <NetWorkError onReload={() => {}} />;
    // }
    const courses = [
        {
            id: 1,
            createdAt: '2026-01-01 08:00:00',
            updatedAt: '2026-01-01 08:00:00',
            name: 'Node.js 入门 - 使用 Express + Sequelize 实作 API',
            image: 'https://picsum.photos/seed/course-10/800/450',
            recommended: false,
            introductory: true,
            likesCount: 0,
            chaptersCount: 0,
            categoryId: 2,
            userId: 1,
            category: {
                id: 2,
                name: '后端开发',
            },
            user: {
                id: 1,
                username: 'admin',
                nickname: '刘东',
                avatar: 'http://192.168.0.233:3000/uploads/images/avatar-admin.png',
                company: 'CEO / 长乐未央公司',
            },
        },
        {
            id: 2,
            createdAt: '2026-01-01 08:00:00',
            updatedAt: '2026-01-01 08:00:00',
            name: 'Laravel 技巧库',
            image: 'https://picsum.photos/seed/course-10/800/450',
            recommended: false,
            introductory: false,
            likesCount: 0,
            chaptersCount: 0,
            categoryId: 2,
            userId: 1,
            category: {
                id: 2,
                name: '后端开发',
            },
            user: {
                id: 1,
                username: 'admin',
                nickname: '刘东',
                avatar: 'http://192.168.0.233:3000/uploads/images/avatar-admin.png',
                company: 'CEO / 长乐未央公司',
            },
        },
    ];
    const renderItem = ({ item, index }: { item: any; index: number }) => {
        return (
            <Link href={`/courseDetail/${item.id}`} asChild>
                <Pressable>
                    <View style={styles.itemContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text>{item.name}</Text>
                    </View>
                </Pressable>
            </Link>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={courses}
                renderItem={renderItem}
                ListEmptyComponent={<NoData />}
                contentContainerStyle={courses.length === 0 ? styles.listNoData : styles.listContent}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContent: {
        padding: 10,
        paddingBottom: 80,
    },
    listNoData: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 200,
    },
    itemContainer: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
    },
});
export default VideoList;
