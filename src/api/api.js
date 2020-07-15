import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': 'e581219b-e76c-405e-b89a-4033e27a3e38'
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
}
