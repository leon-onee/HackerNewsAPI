import {
	createApi,
	fetchBaseQuery,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { TNewItem } from '../../types/NewItem';

const DEFAULT_QUERY_END = '.json?print=pretty';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://hacker-news.firebaseio.com/v0/',
	}),
	endpoints: (builder) => ({
		getNews: builder.query<TNewItem[], string>({
			async queryFn(stories, _api, _extraOptions, fetchWithBQ) {
				const idsResult = await fetchWithBQ(
					stories + DEFAULT_QUERY_END + '&orderBy="$key"&limitToFirst=12'
				);
				if (idsResult.error) {
					return { error: idsResult.error as FetchBaseQueryError };
				}
				const newsIds = idsResult.data as number[];

				try {
					const newsItems = await Promise.all(
						newsIds.map(async (id) => {
							const newsResult = await fetchWithBQ(`item/${id}` + DEFAULT_QUERY_END);
							if (!newsResult.error && newsResult.data) {
								return newsResult.data as TNewItem;
							}
							throw newsResult.error;
						})
					);
					return { data: newsItems };
				} catch (error) {
					return { error: error as FetchBaseQueryError };
				}
			},
		}),
	}),
});

export const { useGetNewsQuery } = apiSlice;
