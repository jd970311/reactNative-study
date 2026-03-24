import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
const Menu = (props: any) => {
    const { course, chapter, chapters, getVal } = props.data;
    // 顶部标题
    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <Text style={{ color: '#fff', textAlign: 'center' }} numberOfLines={1}>
                    {course.name}
                </Text>
            </View>
        );
    };
    // 分割线
    const renderSeparator = () => {
        return <View style={styles.separator}></View>;
    };

    const renderItem = ({ item, index }: { item: any; index: number }) => {
        return (
            <TouchableHighlight
                underlayColor="red"
                onPress={() => {
                    props.getVal(false);
                }}
            >
                <View style={styles.menuItem}>
                    <Ionicons name="play-circle-outline" size={18} color={chapter.id === item.id ? '#5be17b' : '#434D58'} />
                    <Text style={chapter.id === item.id ? styles.curTitle : styles.iconTitle}>{item.title}</Text>
                </View>
            </TouchableHighlight>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={chapters}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={renderHeader}
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    );
};
export default Menu;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRightWidth: 1,
    },
    header: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 5,
        backgroundColor: '#623315',
        fontSize: 24,
    },
    separator: {
        height: 1, // 分隔线高度
        backgroundColor: '#e5e5e5', // 分隔线颜色
        // marginHorizontal: 15, // 左右边距（让分隔线不贴边）
        marginLeft: 10,
    },
    menuItem: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconTitle: {
        color: '#000',
        marginLeft: 5,
        fontSize: 16,
    },
    curTitle: {
        color: '#5be17b',
        marginLeft: 5,
        fontSize: 16,
    },
});
