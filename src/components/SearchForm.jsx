export const SearchForm = () => {
  return (
    <form className='c-search-form' action=''>
      <input
        type='text'
        name='input'
        id='input'
        placeholder='Search case descriptions'
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
    </form>
  );
};
