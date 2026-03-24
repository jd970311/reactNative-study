import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useReducerFetchData } from '@/hooks/useReducerFetchData';
import { WebView } from 'react-native-webview';
const Article = () => {
    const { id } = useLocalSearchParams();
    const { data, loading, error } = useReducerFetchData(`/articles/${id}`);
    const articles = {
        id: 100,
        createdAt: '2026-01-01 08:00:00',
        updatedAt: '2026-01-01 08:00:00',
        title: '长乐未央 App 3.2.7 版本已发布！',
        content:
            '<p>尊敬的用户：</p>\n<p>我们很高兴地通知您，长乐未央 App 已发布最新版本 <strong>3.2.7</strong>。本次更新不仅新增了对 iOS 26\n  液态玻璃的支持，更在用户体验和下载渠道上进行了重要优化与扩展，旨在为您提供更流畅、更便捷的服务。</p>\n<h2><em>本次更新的主要内容包括：</em></h2><h3>新增支持 iOS 26 液态玻璃系统</h3>\n<p>新版本已全面适配 iOS 26 液态玻璃系统，能充分利用新系统的特性，为您带来更丝滑、更稳定的使用体验。</p>\n\n<p><img src="/uploads/images/app.png" alt=""></p>\n<h3>个人资料更新免刷新</h3>\n<p>优化了信息同步机制。现在，当您修改个人资料后，无需手动下拉刷新，页面将自动显示最新信息，操作更加即时顺畅。</p>\n<h2><em>新增下载渠道</em></h2>\n<p>为让您能更便捷地获取最新版本，我们已扩展官方下载渠道。您可以通过以下方式更新：</p>\n\n<ul>\n  <li>\n    <strong>iOS 用户</strong>：请前往 <strong>App Store</strong> 搜索下载。\n  </li>\n</ul>\n\n<p><img src="/uploads/images/app-store.png" alt=""></p>\n<ul>\n  <li>\n    <strong>Android 用户</strong>：可通过<strong>官网底部下载链接</strong>安装。也可在 <strong>小米、OPPO、Vivo、荣耀</strong> 官方应用商店中搜索<strong>「长乐未央」</strong>直接下载。\n  </li>\n</ul>\n\n<p>如果您在使用过程中有任何意见或建议，欢迎随时与我们联系。您的反馈对我们至关重要，是推动产品不断进步的动力。</p>\n\n<p>感谢您一直以来的支持与陪伴！期待长乐未央 App 能继续成为您学习与开发路上的得力助手。</p>\n\n<p>此致，长乐未央团队</p><br>',
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{articles.title}</Text>
            <WebView style={styles.container} originWhitelist={['*']} source={{ html: articles.content }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        alignSelf: 'center',
        height: 40,
    },
    content: {
        marginLeft: 10,
    },
});
export default Article;
