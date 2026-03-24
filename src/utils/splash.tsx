import { SplashScreen } from 'expo-router';
import { useSession } from '@/utils/ctx';
//阻止启动屏自动隐藏
SplashScreen.preventAutoHideAsync();

export function SplashScreenController() {
  const { isLoading } = useSession();

  if (!isLoading) {
    SplashScreen.hide();
  }

  return null;
}
