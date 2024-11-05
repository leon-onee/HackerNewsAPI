import Filter from '../Filter/Filter'
import Logo from '../Logo/Logo'
import UpdateBtn from '../UpdateBtn/UpdateBtn'

const Header = () => {
	return (
		<div className='p-6 bg-slate-800 grid sm:grid-cols-[auto_1fr_auto] grid-cols-2 items-center gap-10'>
			<div className='row-start-1 col-start-1'>
				<Logo />
			</div>
			<div className='sm:row-start-1 sm:col-start-2 row-start-2 col-span-2'>
				<Filter />
			</div>
			<div className='row-start-1 sm:col-start-3 col-start-2 justify-self-end'>
				<UpdateBtn />
			</div>
		</div>
	)
}

export default Header
