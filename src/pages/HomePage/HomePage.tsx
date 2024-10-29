import News from '../../components/News/News'

const HomePage = () => {
	return (
		<div className='container mx-auto px-4 pb-10'>
			<h1 className='font-medium text-center text-4xl mt-6 text-white'>
				Hacker News: Tech & Startup News
			</h1>
			<News />
		</div>
	)
}

export default HomePage
