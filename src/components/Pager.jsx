import { useContext, useEffect /* useState */ } from 'react';
import { Context } from '../context/Context';

export const Pager = ({ pageLimit }) => {
  const { state, goToFirst, goToPrev, goToNext, goToLast, changePage } =
    useContext(Context);

  const getPaginationGroup = () => {
    let start = Math.floor((state.currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [state.currentPage]);

  return (
    <ul className='c-pager-list'>
      <li>
        <button onClick={goToFirst}>&lt;&lt; First</button>
      </li>
      <li>
        <button onClick={goToPrev}>&lt; Previous</button>
      </li>
      {getPaginationGroup().map((item, index) => (
        <li key={index}>
          <button onClick={changePage}>{item}</button>
        </li>
      ))}
      <li>
        <button onClick={goToNext}>Next &gt;</button>
      </li>
      <li>
        <button onClick={goToLast}>Last &gt;&gt;</button>
      </li>
    </ul>
  );
};
