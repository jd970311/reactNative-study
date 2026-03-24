import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
export default function TabLayout() {
  if (Platform.OS === 'ios') {
    return (
      <NativeTabs>
        <NativeTabs.Trigger name="index">
          <Label>发现</Label>
          <Icon sf={{ default: 'play.house', selected: 'play.house.fill' }} />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="video">
          <Label>视频课程</Label>
          <Icon sf={{ default: 'video', selected: 'video.fill' }} />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="user">
          <Label>我的</Label>
          <Icon sf={{ default: 'person', selected: 'person.fill' }} />
        </NativeTabs.Trigger>
      </NativeTabs>
    );
  }
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#1f99b0', headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <SimpleLineIcons size={28} name="compass" color={color} />, //taeBar图标
        }}
      />
      <Tabs.Screen
        name="video"
        options={{
          tabBarIcon: ({ color }) => <SimpleLineIcons size={28} name="camrecorder" color={color} />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          tabBarIcon: ({ color }) => <SimpleLineIcons size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
