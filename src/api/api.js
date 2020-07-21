import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': 'e581219b-e76c-405e-b89a-4033e27a3e38'
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10){
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`).then(response => response.data);
  },
  followUser(id) {
    return instance.post(`follow/${id}`).then(response => response.data);
  },
}
