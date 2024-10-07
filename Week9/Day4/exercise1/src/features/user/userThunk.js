import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await response.json();
  return data; // The fulfilled action payload will be the fetched user data
});