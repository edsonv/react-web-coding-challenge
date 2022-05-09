import { useContext, useRef } from 'react';
import { Context } from '../context/Context';

export const SearchForm = () => {
  const { setQuery, goToFirst } = useContext(Context);
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const query = formData.get('input');
    goToFirst();
    setQuery(query);
  };

  const handleReset = () => {
    goToFirst();
    setQuery('');
  };

  return (
    <form
      className='c-search-form'
      action=''
      ref={form}
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type='text'
        name='input'
        id='input'
        placeholder='Search case title'
      />
      <input
        type='text'
        name='from'
        id='from'
        onFocus={(e) => (e.target.type = 'date')}
        onBlur={(e) => (e.target.type = 'text')}
        placeholder='From'
      />
      <input
        type='text'
        name='to'
        id='to'
        onFocus={(e) => (e.target.type = 'date')}
        onBlur={(e) => (e.target.type = 'text')}
        placeholder='To'
      />
      <button type='submit'>Find cases</button>
      <button type='reset' onClick={() => handleReset()}>
        Reset
      </button>
    </form>
  );
};
