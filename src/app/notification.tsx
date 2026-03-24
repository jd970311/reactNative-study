import { View, Text, StyleSheet, Image, FlatList, Pressable, RefreshControl } from 'react-native';
import { useReducerFetchData } from '@/hooks/useReducerFetchData';
import { Link } from 'expo-router';
import moment from 'moment';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useState } from 'react';
import Loading from '@/components/Loading';
import NetWorkError from '@/components/NetWorkError';
// import useLoadmore from '@/hooks/useLoadmore';
import NoData from '@/components/NoData';
import { request } from '@/utils/request';
const Notification = () => {
  const { data, loading, error, onLoad, setData } = useReducerFetchData('/articles');
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const render = ({ item, index }: { item: any; index: number }) => {
    return (
      <Link href={`/article/${item.id}`} asChild>
        <Pressable>
          <View style={styles.box}>
            <Image style={styles.image} source={require('@/assets/list-light.png')} />
            <View style={styles.content}>
              <Text>{item.title}</Text>
              <Text style={styles.time}>{moment(item.createdAt).format('YYYY/MM/DD')}</Text>
            </View>
          </View>
        </Pressable>
      </Link>
    );
  };
  const onRefresh = () => {
    if (loading) return; // 防止重复请求
    setRefreshing(true);
    onLoad();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  // const { onEndReached } = useLoadmore('/articles', 'articles', loading, setData)
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <NetWorkError onReload={onLoad} />;
  }

  const onEndReached = async () => {
    if (loading) return; // 防止重复请求
    let newPage = page + 1;
    setPage(newPage);
    const res = await request('/articles', {
      method: 'GET',
      params: {
        page: newPage,
        pageSize: 10,
      },
    });
    // setData({
    //   ...data,
    //   articles: [
    //     ...data?.articles,
    //     ...res.data.articles
    //   ]
    // })
  };

  const ListFooterComponent = () => {
    let message;
    if (loading) {
      message = '加载中...';
    } else if (data?.articles?.length === 0) {
      message = '暂无数据';
    } else {
      message = '没有更多数据了';
    }
    return (
      <View style={styles.footer}>
        <Text>{message}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data?.articles}
        renderItem={render}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={NoData}
        contentContainerStyle={styles.listContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="red" />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
  },
  box: {
    borderBottomWidth: 2,
    borderColor: '#000',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    height: 80,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingRight: 10,
  },
  time: {
    textAlign: 'right',
  },
  listContent: {
    flexGrow: 1,
  },

  footer: {
    // borderTopWidth: 2,
    // borderColor: 'red',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Notification;
