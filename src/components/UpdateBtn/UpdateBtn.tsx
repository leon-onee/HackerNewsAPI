import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { useDispatch } from 'react-redux'
import { toggleRefresh } from '../../features/slices/refreshSlice'
import { AppDispatch } from '../../features/store/store'

const UpdateBtn = () => {
	const dispatch = useDispatch<AppDispatch>()

	const handleClick = () => {
		dispatch(toggleRefresh())
	}

	return (
		<button onClick={handleClick}>
			<ArrowPathIcon className='w-8 h-8 text-blue-700 transition hover:text-white' />
		</button>
	)
}

export default UpdateBtn
