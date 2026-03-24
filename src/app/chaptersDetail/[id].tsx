import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useReducerFetchData } from '@/hooks/useReducerFetchData';
import { useVideoPlayer, VideoView } from 'expo-video';
import SideMenu from 'react-native-side-menu';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import Menu from './menu';
const ChapterDetail = () => {
    const { id } = useLocalSearchParams();
    const { data, loading, error } = useReducerFetchData(`/chapters/${id}`);
    const videoSource = 'https://media.w3.org/2010/05/sintel/trailer.mp4';
    const [videoReady, setVideoReady] = useState(false);
    const player = useVideoPlayer(videoSource, (player) => {
        player.loop = true;
        player.play();
    });

    useEffect(() => {
        if (player) {
            const statusListener = player.addListener('statusChange', (status) => {
                if (status.status === 'readyToPlay') {
                    setVideoReady(true);
                }
            });
            return () => {
                statusListener.remove();
            };
        }
    }, [player]);
    const ContentView = () => {
        return (
            <View style={styles.content}>
                <Text>主界面内容</Text>
            </View>
        );
    };
    const [isOpen, setIsOpen] = useState(false);
    const getVal = (val: boolean) => {
    };
    return (
        <SideMenu
            disableGestures={true}
            menu={isOpen ? <Menu data={data} getVal={getVal} /> : null}
            isOpen={isOpen}
            onChange={() => setIsOpen(!isOpen)}
        >
            <View style={styles.container}>
                {/* 视频播放器容器 */}
                <View style={styles.videoContainer}>
                    <VideoView style={styles.video} player={player} allowsPictureInPicture />
                    {/* 加载指示器 */}
                    {!videoReady && (
                        <View style={styles.loadingOverlay}>
                            <ActivityIndicator size="large" color="#007AFF" />
                            <Text style={styles.loadingText}>视频加载中...</Text>
                        </View>
                    )}
                </View>
                {/* 切换展开菜单按钮 */}
                <View style={styles.containermenu}>
                    <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.opacity}>
                        <View style={styles.box}>
                            <Ionicons name="list" size={16} color="#434D58" />
                            <Text>{isOpen ? '收起课程列表' : '展开课程列表'}</Text>
                        </View>
                    </TouchableOpacity>
                    <ContentView />
                </View>
            </View>
        </SideMenu>
    );
};
export default ChapterDetail;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    videoContainer: {
        width: '100%',
        height: 275,
        position: 'relative',
        backgroundColor: '#000',
    },
    video: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '100%',
        height: '100%',
    },
    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        color: '#fff',
        marginTop: 10,
        fontSize: 14,
    },
    containermenu: {
        flex: 1,
    },
    opacity: {
        height: 40,
        flexDirection: 'row',
        borderBottomWidth: 1,
        padding: 5,
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: 1,
    },
    content: {
        flex: 1,
        padding: 10,
    },
});
