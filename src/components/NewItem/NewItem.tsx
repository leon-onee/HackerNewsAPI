import { ArrowRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { timeConvert } from '../../helpers/timeConvert'
import { TNewItem } from '../../types/NewItem'
import Button from '../Button/Button'

type NewItemProps = {
	data: TNewItem
}

const NewItem: React.FC<NewItemProps> = ({ data }) => {
	return (
		<div className='flex flex-col p-5 bg-slate-600 rounded-xl'>
			<h3 className='text-xl text-white grow'>{data.title}</h3>
			<div className='mt-2'>
				<div className=' text-gray-300 text-sm'>
					<span className='font-bold text-base text-gray-400'>Author:</span>{' '}
					{data.by}
				</div>
				<div className=' text-gray-300 text-sm'>
					<span className='font-bold text-base text-gray-400'>Score:</span>{' '}
					{data.score}
				</div>
				<div className='text-gray-300 text-sm'>
					<span className='font-bold text-base text-gray-400'>Comments:</span>{' '}
					{data.descendants}
				</div>
				<div className=' text-gray-300 text-sm'>
					<span className='font-bold text-base text-gray-400'>
						Published ad:
					</span>{' '}
					{timeConvert(data.time)}
				</div>
			</div>

			<Button
				type={'link'}
				url={data.url}
				className={
					'text-white transition flex items-center gap-2 font-semibold py-2 px-4 bg-blue-700 rounded-xl w-fit mt-2'
				}
				text={'Read More'}
				icon={
					<ArrowRightIcon className='w-6 h-6 text-white hover:text-white' />
				}
			/>
		</div>
	)
}

export default NewItem
