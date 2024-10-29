import { NewspaperIcon } from '@heroicons/react/24/outline'

const Logo = () => {
	return (
		<div className='flex items-center gap-1'>
			<NewspaperIcon className='w-8 h-8 text-blue-600' />

			<span className='text-white text-2xl font-bold'>HackerNews</span>
		</div>
	)
}

export default Logo
