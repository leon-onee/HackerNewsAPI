import { createSlice } from '@reduxjs/toolkit';

const refreshSlice = createSlice({
  name: 'refresh',
  initialState: {
    refreshToggle: false,
  },
  reducers: {
    toggleRefresh: (state) => {
      state.refreshToggle = !state.refreshToggle;
    },
  },
});

export const { toggleRefresh } = refreshSlice.actions;

export default refreshSlice.reducer;
