import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Filter {
  name: string;
  query: string;
}

interface FilterState {
  data: Filter[];
  currentFilter: Filter;
}

const initialState: FilterState = {
  data: [
    { name: 'Top', query: 'topstories' },
    { name: 'New', query: 'newstories' },
    { name: 'Best', query: 'beststories' },
    { name: 'Ask', query: 'askstories' },
    { name: 'Show', query: 'showstories' },
    { name: 'Job', query: 'jobstories' },
  ],
  currentFilter: { name: 'Top', query: 'topstories' },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }: PayloadAction<Filter>) => {
      state.currentFilter = payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
