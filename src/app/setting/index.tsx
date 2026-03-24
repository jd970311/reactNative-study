import { View, StyleSheet, Alert } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { useRouter } from 'expo-router';
const Setting = () => {
    const router = useRouter();
    const handlePress = async () => {
        let result = await WebBrowser.openBrowserAsync('https://clwy.cn/sites');
    };
    return (
        <View style={styles.container}>
            <TableView>
                <View style={styles.section}>
                    <Section
                        hideSurroundingSeparators={true}
                        roundedCorners={true}
                        separatorInsetRight={18}
                        sectionPaddingTop={0}
                        sectionPaddingBottom={0}
                    >
                        <Cell
                            title="wiki"
                            accessory="DisclosureIndicator"
                            onPress={() => {
                                Linking.openURL('https://clwy.cn/sites');
                            }}
                        />
                        <Cell title="常用站点" accessory="DisclosureIndicator" onPress={handlePress} />
                    </Section>
                </View>
                <View style={styles.section}>
                    <Section
                        hideSurroundingSeparators={true}
                        roundedCorners={true}
                        separatorInsetRight={18}
                        sectionPaddingTop={0}
                        sectionPaddingBottom={0}
                    >
                        <Cell
                            title="关于【长乐未央】"
                            accessory="DisclosureIndicator"
                            onPress={() => {
                                router.navigate({
                                    pathname: '/setting/[url]',
                                    params: {
                                        url: 'https://clwy.cn/sites',
                                        title: '详情',
                                    },
                                });
                            }}
                        />
                        <Cell title="使用条款" accessory="DisclosureIndicator" />
                        <Cell title="隐私政策" accessory="DisclosureIndicator" />
                        <Cell title="App备案号" accessory="DisclosureIndicator" />
                    </Section>
                </View>
                <View style={styles.section}>
                    <Section
                        hideSurroundingSeparators={true}
                        roundedCorners={true}
                        separatorInsetRight={18}
                        sectionPaddingTop={0}
                        sectionPaddingBottom={0}
                    >
                        <Cell title="注销账户" accessory="DisclosureIndicator" />
                        <Cell title="安全退出" accessory="DisclosureIndicator" />
                    </Section>
                </View>
            </TableView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        padding: 15,
        backgroundColor: '#ddd',
    },
    section: {
        // borderWidth: 1,
        // borderColor: 'red',
        borderRadius: 22,
        overflow: 'hidden',
        marginTop: 10,
    },
});
export default Setting;
