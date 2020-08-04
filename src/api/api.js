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
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },
  getProfile(userId) {
    console.warn("Please use profileApi object!")
    return profileAPI.getProfile(userId);
  },
  authMe() {
    console.warn("Please use authApi object!")
    return authAPI.authMe();
  },
}
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data);
  },
  getStatus(userId) {
    return instance.get(`status/${userId}`).then(response => response.data);
  },
  updateStatus(status) {
    return instance.put(`status`,{
      status: status
    }).then(response => response.data);
  }
}

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`).then(response => response.data);
  }
}