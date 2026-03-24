import { View, ScrollView, RefreshControl } from 'react-native';
import { useReducerFetchData } from '@/hooks/useReducerFetchData';
import Loading from '@/components/Loading';
import NetWorkError from '@/components/NetWorkError';
import Recommand from '@/components/recommand';
import Courses from '@/components/Courses';
import { useState } from 'react';
const Home = () => {
  const { data, loading, error, onLoad } = useReducerFetchData('/');
  const recommendedCourses = [
    {
      "id": 10,
      "createdAt": "2026-01-01 08:00:00",
      "updatedAt": "2026-01-01 08:00:00",
      "name": "React Native + Expo 项目实战",
      "image": "https://picsum.photos/seed/course-10/800/450",
      "recommended": true,
      "introductory": false,
      "likesCount": 0,
      "chaptersCount": 0,
      "categoryId": 3,
      "userId": 1,
      "category": {
        "id": 3,
        "name": "移动端开发"
      },
      "user": {
        "id": 1,
        "username": "admin",
        "nickname": "刘东",
        "avatar": "https://reactnative.dev/img/tiny_logo.png",
        "company": "CEO / 长乐未央公司"
      }
    },
    {
      "id": 8,
      "createdAt": "2026-01-01 08:00:00",
      "updatedAt": "2026-01-01 08:00:00",
      "name": "CSS 入门",
      "image": "https://picsum.photos/seed/course-8/800/450",
      "recommended": true,
      "introductory": true,
      "likesCount": 0,
      "chaptersCount": 0,
      "categoryId": 1,
      "userId": 1,
      "category": {
        "id": 1,
        "name": "前端开发"
      },
      "user": {
        "id": 1,
        "username": "admin",
        "nickname": "刘东",
        "avatar": "https://reactnative.dev/img/tiny_logo.png",
        "company": "CEO / 长乐未央公司"
      }
    },
    {
      "id": 4,
      "createdAt": "2026-01-01 08:00:00",
      "updatedAt": "2026-01-01 08:00:00",
      "name": "Workerman + Laravel + Vue.js 实战聊天室",
      "image": "https://picsum.photos/seed/course-4/800/450",
      "recommended": true,
      "introductory": false,
      "likesCount": 0,
      "chaptersCount": 0,
      "categoryId": 2,
      "userId": 1,
      "category": {
        "id": 2,
        "name": "后端开发"
      },
      "user": {
        "id": 1,
        "username": "admin",
        "nickname": "刘东",
        "avatar": "https://reactnative.dev/img/tiny_logo.png",
        "company": "CEO / 长乐未央公司"
      }
    },
    {
      "id": 2,
      "createdAt": "2026-01-01 08:00:00",
      "updatedAt": "2026-01-01 08:00:00",
      "name": "Node.js 项目实践",
      "image": "https://picsum.photos/seed/course-2/800/450",
      "recommended": true,
      "introductory": true,
      "likesCount": 2,
      "chaptersCount": 10,
      "categoryId": 2,
      "userId": 1,
      "category": {
        "id": 2,
        "name": "后端开发"
      },
      "user": {
        "id": 1,
        "username": "admin",
        "nickname": "刘东",
        "avatar": "https://reactnative.dev/img/tiny_logo.png",
        "company": "CEO / 长乐未央公司"
      }
    },
    {
      "id": 1,
      "createdAt": "2026-01-01 08:00:00",
      "updatedAt": "2026-01-01 08:00:00",
      "name": "超简单的 Laravel 新手入门课程",
      "image": "https://picsum.photos/seed/course-1/800/450",
      "recommended": true,
      "introductory": true,
      "likesCount": 3,
      "chaptersCount": 0,
      "categoryId": 2,
      "userId": 1,
      "category": {
        "id": 2,
        "name": "后端开发"
      },
      "user": {
        "id": 1,
        "username": "admin",
        "nickname": "刘东",
        "avatar": "https://reactnative.dev/img/tiny_logo.png",
        "company": "CEO / 长乐未央公司"
      }
    }
  ]
  const likesCourses = [
    {
      "id": 10,
      "createdAt": "2026-01-01 08:00:00",
      "updatedAt": "2026-01-01 08:00:00",
      "name": "React Native + Expo 项目实战",
      "image": "https://picsum.photos/seed/course-10/800/450",
      "recommended": true,
      "introductory": false,
      "likesCount": 0,
      "chaptersCount": 0,
      "categoryId": 3,
      "userId": 1,
      "category": {
        "id": 3,
        "name": "移动端开发"
      },
      "user": {
        "id": 1,
        "username": "admin",
        "nickname": "刘东",
        "avatar": "https://reactnative.dev/img/tiny_logo.png",
        "company": "CEO / 长乐未央公司"
      }
    },
    {
      "id": 8,
      "createdAt": "2026-01-01 08:00:00",
      "updatedAt": "2026-01-01 08:00:00",
      "name": "CSS 入门",
      "image": "https://picsum.photos/seed/course-8/800/450",
      "recommended": true,
      "introductory": true,
      "likesCount": 0,
      "chaptersCount": 0,
      "categoryId": 1,
      "userId": 1,
      "category": {
        "id": 1,
        "name": "前端开发"
      },
      "user": {
        "id": 1,
        "username": "admin",
        "nickname": "刘东",
        "avatar": "https://reactnative.dev/img/tiny_logo.png",
        "company": "CEO / 长乐未央公司"
      }
    },
    {
      "id": 4,
      "createdAt": "2026-01-01 08:00:00",
      "updatedAt": "2026-01-01 08:00:00",
      "name": "Workerman + Laravel + Vue.js 实战聊天室",
      "image": "https://picsum.photos/seed/course-4/800/450",
      "recommended": true,
      "introductory": false,
      "likesCount": 0,
      "chaptersCount": 0,
      "categoryId": 2,
      "userId": 1,
      "category": {
        "id": 2,
        "name": "后端开发"
      },
      "user": {
        "id": 1,
        "username": "admin",
        "nickname": "刘东",
        "avatar": "https://reactnative.dev/img/tiny_logo.png",
        "company": "CEO / 长乐未央公司"
      }
    },
    {
      "id": 2,
      "createdAt": "2026-01-01 08:00:00",
      "updatedAt": "2026-01-01 08:00:00",
      "name": "Node.js 项目实践",
      "image": "https://picsum.photos/seed/course-2/800/450",
      "recommended": true,
      "introductory": true,
      "likesCount": 2,
      "chaptersCount": 10,
      "categoryId": 2,
      "userId": 1,
      "category": {
        "id": 2,
        "name": "后端开发"
      },
      "user": {
        "id": 1,
        "username": "admin",
        "nickname": "刘东",
        "avatar": "https://reactnative.dev/img/tiny_logo.png",
        "company": "CEO / 长乐未央公司"
      }
    },
    {
      "id": 1,
      "createdAt": "2026-01-01 08:00:00",
      "updatedAt": "2026-01-01 08:00:00",
      "name": "超简单的 Laravel 新手入门课程",
      "image": "https://picsum.photos/seed/course-1/800/450",
      "recommended": true,
      "introductory": true,
      "likesCount": 3,
      "chaptersCount": 0,
      "categoryId": 2,
      "userId": 1,
      "category": {
        "id": 2,
        "name": "后端开发"
      },
      "user": {
        "id": 1,
        "username": "admin",
        "nickname": "刘东",
        "avatar": "https://reactnative.dev/img/tiny_logo.png",
        "company": "CEO / 长乐未央公司"
      }
    }
  ]
  const introductoryCourses = [
    {
      "id": 10,
      "createdAt": "2026-01-01 08:00:00",
      "updatedAt": "2026-01-01 08:00:00",
      "name": "React Native + Expo 项目实战",
      "image": "https://picsum.photos/seed/course-10/800/450",
      "recommended": true,
      "introductory": false,
      "likesCount": 0,
      "chaptersCount": 0,
      "categoryId": 3,
      "userId": 1,
      "category": {
        "id": 3,
        "name": "移动端开发"
      },
      "user": {
        "id": 1,
        "username": "admin",
        "nickname": "刘东",
        "avatar": "https://reactnative.dev/img/tiny_logo.png",
        "company": "CEO / 长乐未央公司"
      }
    },
    {
      "id": 8,
      "createdAt": "2026-01-01 08:00:00",
      "updatedAt": "2026-01-01 08:00:00",
      "name": "CSS 入门",
      "image": "https://picsum.photos/seed/course-8/800/450",
      "recommended": true,
      "introductory": true,
      "likesCount": 0,
      "chaptersCount": 0,
      "categoryId": 1,
      "userId": 1,
      "category": {
        "id": 1,
        "name": "前端开发"
      },
      "user": {
        "id": 1,
        "username": "admin",
        "nickname": "刘东",
        "avatar": "https://reactnative.dev/img/tiny_logo.png",
        "company": "CEO / 长乐未央公司"
      }
    },
    {
      "id": 4,
      "createdAt": "2026-01-01 08:00:00",
      "updatedAt": "2026-01-01 08:00:00",
      "name": "Workerman + Laravel + Vue.js 实战聊天室",
      "image": "https://picsum.photos/seed/course-4/800/450",
      "recommended": true,
      "introductory": false,
      "likesCount": 0,
      "chaptersCount": 0,
      "categoryId": 2,
      "userId": 1,
      "category": {
        "id": 2,
        "name": "后端开发"
      },
      "user": {
        "id": 1,
        "username": "admin",
        "nickname": "刘东",
        "avatar": "https://reactnative.dev/img/tiny_logo.png",
        "company": "CEO / 长乐未央公司"
      }
    },
    {
      "id": 2,
      "createdAt": "2026-01-01 08:00:00",
      "updatedAt": "2026-01-01 08:00:00",
      "name": "Node.js 项目实践",
      "image": "https://picsum.photos/seed/course-2/800/450",
      "recommended": true,
      "introductory": true,
      "likesCount": 2,
      "chaptersCount": 10,
      "categoryId": 2,
      "userId": 1,
      "category": {
        "id": 2,
        "name": "后端开发"
      },
      "user": {
        "id": 1,
        "username": "admin",
        "nickname": "刘东",
        "avatar": "https://reactnative.dev/img/tiny_logo.png",
        "company": "CEO / 长乐未央公司"
      }
    },
    {
      "id": 1,
      "createdAt": "2026-01-01 08:00:00",
      "updatedAt": "2026-01-01 08:00:00",
      "name": "超简单的 Laravel 新手入门课程",
      "image": "https://picsum.photos/seed/course-1/800/450",
      "recommended": true,
      "introductory": true,
      "likesCount": 3,
      "chaptersCount": 0,
      "categoryId": 2,
      "userId": 1,
      "category": {
        "id": 2,
        "name": "后端开发"
      },
      "user": {
        "id": 1,
        "username": "admin",
        "nickname": "刘东",
        "avatar": "https://reactnative.dev/img/tiny_logo.png",
        "company": "CEO / 长乐未央公司"
      }
    }
  ]
  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = () => {
    setRefreshing(true)
    onLoad()
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }
  const renderContainer = () => {
    if (loading) {
      return <Loading />
    }
    if (error) {
      return <NetWorkError onReload={onLoad} />
    }
    return (
      <View>
        <Recommand title="推荐课程" recommendedCourses={recommendedCourses} />
        <Courses title="热门课程" courses={likesCourses} />
        <Courses title="入门课程" courses={introductoryCourses} />
      </View>
    )
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: '76%' }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {renderContainer()}
    </ScrollView>
  )
}
export default Home;