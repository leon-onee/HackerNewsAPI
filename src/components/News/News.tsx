import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetNewsQuery } from '../../features/api/apiSlice'
import { RootState } from '../../features/store/store'
import NewItem from '../NewItem/NewItem'
import NewItemSkeleton from '../NewItem/NewItemSkeleton'

const News = () => {
	const currentFilter = useSelector(
		(state: RootState) => state.filter.currentFilter
	)

	const { data, error, isLoading, refetch } = useGetNewsQuery(currentFilter.query, {
		// pollingInterval: 60000,
		// skipPollingIfUnfocused: true,
	})


	const refreshToggle = useSelector(
		(state: RootState) => state.refresh.refreshToggle
	)

	useEffect(() => {
		refetch()
	}, [refreshToggle, refetch])

	return (
		<div className='mt-10 grid grid-cols-4 gap-5'>
			{isLoading && <NewItemSkeleton count={12} />}

			{!isLoading && data?.map(item => (
				<NewItem data={item} key={item.id} />
			))}
		</div>
	)
}

export default News
