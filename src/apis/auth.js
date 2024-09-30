import instance from './axiosInstance';

export const signUpUser = (data) => {
  return instance.post('/api/auth/signUp', data);
};
export const loginInUser = (userId, pwd) => {
  return instance.post('/login', {
    userId,
    pwd,
  });
};
export const checkUserId = (userId) => {
  return instance.post('/api/auth/check-id', { userId });
};
export const checkUserEmail = (email) => {
  return instance.post('/api/auth/check-email', { email });
};
export const deleteUserAccount = (userId) => {
  return instance
    .post(
      '/api/auth/signOut',
      {
        userId,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Use valid token
        },
      },
    )
    .then((res) => res.data);
};
