import instance from './axiosInstance';

export const deleteUserAccount = (userId) => {
  return instance
    .post(
      '/api/auth/signOut',
      {
        userId: userId,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Use valid token
        },
      },
    )
    .then((res) => res.data);
};
