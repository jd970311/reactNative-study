import { Stack, useSegments } from 'expo-router';
import HeaderButton from '@/components/HeaderButton';
import { SessionProvider } from '@/utils/ctx';
import { SplashScreenController } from '@/utils/splash';
import { View } from 'react-native';
export default function Layout() {
  const segments = useSegments();
  const segmentsArr = segments as unknown as string[];
  const tabName = segmentsArr[0] === '(tabs)' ? segmentsArr[1] : 'index';
  const tabsTitleMap: Record<string, string> = {
    index: '首页',
    user: '个人中心',
    video: '视频',
  };
  const tabsTitle = tabsTitleMap[tabName ?? 'index'] ?? '首页';

  const HeaderRightBtn = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <HeaderButton href="/search" iconName="search" />
        <HeaderButton href="/setting" iconName="align-right" />
      </View>
    );
  };
  return (
    <SessionProvider>
      {/* <SplashScreenController /> */}
      <Stack
        screenOptions={{
          headerTitleAlign: 'center',
          headerBackButtonDisplayMode: 'minimal',
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            title: tabsTitle,
            headerLeft: () => <HeaderButton href="/notification" iconName="bell" />,
            headerRight: () => <HeaderRightBtn />,
          }}
        />
        <Stack.Screen name="course/[id]" options={{ title: '课程详情' }} />
        <Stack.Screen name="notification" options={{ title: '通知' }} />
        <Stack.Screen name="article/[id]" options={{ title: '文章详情' }} />
        <Stack.Screen name="setting/index" options={{ title: '设置' }} />
        <Stack.Screen
          name="setting/[url]"
          options={({ route }) => ({
            title: (route?.params as any)?.title ?? '设置',
          })}
        />
        <Stack.Screen name="courseDetail/[id]" options={{ title: '课程详情' }} />
        <Stack.Screen name="chaptersDetail/[id]" options={{ title: '章节详情' }} />
        <Stack.Screen name="search/index" options={{ title: '搜索' }} />
        <Stack.Screen name="search/[key]" options={{ title: '搜索详情' }} />
        <Stack.Screen
          name="auth/index"
          options={{ title: '会员注册&登录', presentation: 'modal', animation: 'fade_from_bottom' }}
        />
      </Stack>
    </SessionProvider>
  );
}
