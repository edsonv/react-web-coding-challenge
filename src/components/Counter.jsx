// import axios from 'axios';
import { useEffect, useContext, useState } from 'react';
import { Context } from '../context/Context';

export const Counter = () => {
  const { state, setPages } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://bikeindex.org:443/api/v3/search/count?&query=${state.query}&location=Berlin&distance=100&stolenness=proximity`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPages(data.proximity);
        setLoading(false);
      });
  }, [state.query]);

  return (
    <p className='c-counter'>
      {loading ? 'Loading total...' : `Total: ${state.counter}`}
    </p>
  );
};
