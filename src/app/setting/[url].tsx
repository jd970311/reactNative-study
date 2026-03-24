import { WebView } from 'react-native-webview';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Loading from '@/components/Loading';
import * as WebBrowser from 'expo-web-browser';
import { useState } from 'react';
export default function App() {
    // 指定泛型，url 被视为 string
    const { url } = useLocalSearchParams<{ url: string }>();
    const [progress, setProgress] = useState(0);
    // url 可能 undefined，先处理一下
    if (!url) {
        return (
            <View style={[styles.container, styles.center]}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
    // 进度条组件，简单起见，直接放在 App 组件里了
    const ProgressBar = () => {
        return <View style={{ height: 3, backgroundColor: '#007AFF', width: `${progress * 100}%` }} />;
    };

    // 拦截链接
    const onShouldStartLoadWithRequest = (request: any) => {
        if (url === request.url) {
            return true; // 允许加载初始 URL
        }
        // 否则 用webBrowser打开
        void WebBrowser.openBrowserAsync(request.url);
        return false; // 阻止 WebView 自身加载其他链接
    };
    return (
        <View style={styles.container}>
            {/* 使用进度条 */}
            <ProgressBar />
            <WebView
                userAgent="clwy-app"
                style={styles.container}
                source={{ uri: url }}
                startInLoadingState={true}
                renderLoading={() => <Loading />}
                onLoadProgress={({ nativeEvent }) => {
                    setProgress(nativeEvent.progress);
                }}
                onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: { justifyContent: 'center', alignItems: 'center' },
});
