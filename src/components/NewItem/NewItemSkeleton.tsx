import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type NewItemSkeletonProps = {
	count: number
}

const NewItemSkeleton: React.FC<NewItemSkeletonProps> = ({ count }) => {
	return Array(count)
		.fill(null)
		.map((_, index) => (
			<div key={index} className='flex flex-col p-5 bg-slate-600 rounded-xl'>
				<h3 className='text-xl text-white grow'>
					<Skeleton
						baseColor='#4b5563'
						highlightColor='#6b7280'
						width='100%'
						height={56}
					/>
				</h3>
				<div className='mt-2'>
					<Skeleton
						baseColor='#4b5563'
						highlightColor='#6b7280'
						count={4}
						width='100%'
						height={24}
					/>
				</div>
				<div className='mt-2'>
					<Skeleton
						baseColor='#4b5563'
						highlightColor='#6b7280'
						width={144}
						height={40}
					/>
				</div>
			</div>
		))
}

export default NewItemSkeleton
