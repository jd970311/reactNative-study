import Loading from '@/components/Loading';
import { useSession } from '@/utils/ctx';
import SignIn from '@/components/sign-in';
import { Slot } from 'expo-router';
export default function UserLayout() {
    const { session, isLoading } = useSession();

    if (isLoading) {
        return <Loading />;
    }
    // 如果用户未登录，渲染登录提示组件
    if (!session) {
        return <SignIn />;
    }
    //已登录
    return <Slot />;
}
