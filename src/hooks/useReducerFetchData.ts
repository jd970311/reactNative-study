import { useReducer, useEffect } from 'react';
import { request } from '@/utils/request';
const initState = {
  data: null as any,
  loading: false,
  error: false,
};
const reducer = (state: typeof initState, action: any) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: false };
    case 'FETCH_DATA_ERROR':
      return { ...state, data: null, loading: false, error: true };
    case 'FETCH_DATA_LOADING':
      return { ...state, loading: true, error: false };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
export const useReducerFetchData = (url: string, options: { method?: string; params?: any; body?: any } = {}) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const getData = async () => {
    try {
      dispatch({ type: 'FETCH_DATA_LOADING' });

      const { data } = await request(url, options);
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_ERROR', payload: error });
    }
  };
  useEffect(() => {
    getData();
  }, [url, JSON.stringify(options)]);
  const onLoad = async () => {
    getData();
  };
  const setData = (data: any) => {
    dispatch({ type: 'SET_DATA', payload: data });
  };
  return {
    ...state,
    onLoad,
    setData,
  };
};
