import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../features/slices/filterSlice';
import { AppDispatch, RootState } from '../../features/store/store';

const Filter = () => {
  const data = useSelector((state: RootState) => state.filter.data);
  const currentFilter = useSelector((state: RootState) => state.filter.currentFilter);

  const dispatch = useDispatch<AppDispatch>();

  const handleClick = (index: number) => {
    dispatch(setFilter(data[index]));
  };

  const activeItemStyle = 'text-blue-600';

  return (
    <ul className='flex items-center gap-6 text-lg text-white grow'>
      {data.map(({ name }, index) => (
        <li key={index}>
          <button
            onClick={() => handleClick(index)}
            className={`transition hover:text-blue-500 ${currentFilter.name === name ? activeItemStyle : ''}`}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Filter;
