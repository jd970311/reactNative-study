import { use, createContext, type PropsWithChildren } from 'react';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
import { useStorageState } from '@/utils/useStorageState';
import { post } from '@/utils/request';
const AuthContext = createContext<{
    signIn: (formData: any, setIsLoading: (isLoading: boolean) => void) => void;
    signOut: () => void;
    session?: string | null;
    isLoading: boolean;
}>({
    signIn: (formData: any, setIsLoading: (isLoading: boolean) => void) => null,
    signOut: () => null,
    session: null,
    isLoading: false,
});
// Use this hook to access the user info.
export function useSession() {
    const value = use(AuthContext);
    if (!value) {
        throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
    return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
    const [[isLoading, session], setSession] = useStorageState('session');
    const router = useRouter();
    return (
        <AuthContext.Provider
            value={{
                signIn: async (formData, setIsLoading) => {
                    // 在这里实现登录逻辑
                    try {
                        const { data, error } = await post('/auth/sign_in', formData);
                        await setSession(data.token);
                        router.dismiss()
                    } catch (error: any) {
                        Alert.alert('登录失败', '测试', {
                            text: 'ok',
                            onPress: () => console.log('Ask me later pressed'),
                        });
                    } finally {
                        setIsLoading(false);
                    }
                },
                signOut: () => {
                    setSession(null);
                },
                session,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
