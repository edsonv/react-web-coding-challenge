// import axios from 'axios';
import { useEffect, useContext } from 'react';
import { Context } from '../context/Context';

export const Counter = () => {
  const { state, setPages, setLoadingStatus } = useContext(Context);

  useEffect(() => {
    fetch(
      `https://bikeindex.org:443/api/v3/search/count?${
        state.query ? `&query=${state.query}` : ''
      }location=Berlin&distance=100&stolenness=proximity`
    )
      .then((response) => {
        return response.json();
      })
      .then(async (data) => {
        await setPages(data.proximity);
        setLoadingStatus(false);
      })
      .catch((error) => console.error(error));
    console.log('Counter', state);
  }, []);

  return <p className='c-counter'>Total: {state.counter}</p>;
};
