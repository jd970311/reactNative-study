import urlcat from 'urlcat';
import * as SecureStore from 'expo-secure-store';
export const request = async (url: string, options: { method?: string; params?: any; body?: any }) => {
  const { method, params, body } = options;

  const timeout = new Promise((_, reject) => setTimeout(() => reject(new Error('请求超时')), 2000));
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  // 使用params拼接URL查询参数，如果没有params则直接拼接url
  const requestUrl = params ? urlcat(apiUrl, url, params) : urlcat(apiUrl, url);
  console.log(requestUrl, 'requestUrl');

  // 获取token
  const token = await SecureStore.getItemAsync('session');
  console.log(token, 'token');
  // 请求头
  const headers = {
    accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  const config: RequestInit = {
    method,
    headers,
  };
  if (method === 'POST') {
    config.body = JSON.stringify(body);
  }
  const res: any = await Promise.race([fetch(requestUrl, config), timeout]);

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
};

export const get = (url, params) => request(url, { method: 'GET', params });

/**
 * POST 请求
 * @param {string} url - 请求地址
 * @param {object} body - 请求体数据
 * @returns {Promise<any>} 返回解析后的 JSON 数据
 *
 * @example
 * // 提交表单数据
 * post('/auth/sign_in', { login: 'user', password: '123123' })
 */
export const post = (url, body) => request(url, { method: 'POST', body });

/**
 * PUT 请求
 * @param {string} url - 请求地址
 * @param {object} body - 请求体数据
 * @returns {Promise<any>} 返回解析后的 JSON 数据
 *
 * @example
 * // 更新数据
 * put('/users/info', { nickname: 'clwy', company: '长乐未央公司' })
 */
export const put = (url, body) => request(url, { method: 'PUT', body });

/**
 * PATCH 请求
 * @param {string} url - 请求地址
 * @param {object} body - 请求体数据
 * @returns {Promise<any>} 返回解析后的 JSON 数据
 *
 * @example
 * // 部分更新数据
 * 注意：本项目无任何接口使用 PATCH
 */
export const patch = (url, body) => request(url, { method: 'PATCH', body });

/**
 * DELETE 请求
 * @param {string} url - 请求地址
 * @returns {Promise<any>} 返回解析后的 JSON 数据
 *
 * @example
 * // 注销用户
 * del('/users/me')
 */
export const del = (url) => request(url, { method: 'DELETE' });
