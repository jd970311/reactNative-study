import * as React from 'react';
import { View, Text, useWindowDimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { TabView } from 'react-native-tab-view';
import { useReducerFetchData } from '@/hooks/useReducerFetchData';
import Loading from '@/components/Loading';
import NetWorkError from '@/components/NetWorkError';
import VideoList from '@/components/VideoList';
export default function TabViewExample() {
    const { data, loading, error } = useReducerFetchData('/categories');
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const scrollViewRef = React.useRef<ScrollView>(null);

    const routes = data?.categories?.map((item: any) => {
        return {
            key: item.id.toString(),
            title: item.name,
        };
    });

    const renderScene = ({ route }: { route: any }) => {
        return (
            <View style={{ flex: 1 }}>
                <VideoList id={route.key} />
            </View>
        );
    };
    // 自定义 TabBar 实现自动滚动和居中
    const renderTabBar = (props: any) => {
        const { navigationState, jumpTo } = props;
        const currentIndex = navigationState.index;
        return (
            <View>
                <ScrollView
                    bounces={false} // 禁止弹性滚动 留出空白区域
                    ref={scrollViewRef}
                    contentContainerStyle={styles.contentContainer}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {navigationState.routes.map((route: any, idx: number) => {
                        const isActive = idx === currentIndex;
                        return (
                            <TouchableOpacity
                                key={route.key}
                                onPress={() => jumpTo(route.key)}
                                style={{
                                    padding: 10,
                                }}
                            >
                                <Text style={{ color: isActive ? 'red' : 'black' }} numberOfLines={1}>
                                    {route.title}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
        );
    };

    React.useEffect(() => {
        if (scrollViewRef.current && routes) {
            const tabWidth = 100; // 与 TouchableOpacity 的 width 一致
            const offset = index * tabWidth - layout.width / 2 + tabWidth / 2;
            scrollViewRef.current.scrollTo({ x: Math.max(0, offset), animated: true });
        }
    }, [index, routes, layout.width]);

    if (loading) return <Loading />;
    if (error) return <NetWorkError onReload={() => { }} />;
    if (!routes || routes.length === 0) return <View />;

    return (
        <TabView
            lazy
            renderLazyPlaceholder={() => <Loading />}
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    title: {
        flex: 1,
    },
});
