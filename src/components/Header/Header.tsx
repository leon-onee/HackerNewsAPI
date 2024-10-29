
import Filter from '../Filter/Filter'
import Logo from '../Logo/Logo'
import UpdateBtn from '../UpdateBtn/UpdateBtn'

const Header = () => {
	return (
		<div className='p-6 bg-slate-800 flex items-center gap-10'>
			<Logo />
			<Filter />
			<UpdateBtn />
		</div>
	)
}

export default Header
