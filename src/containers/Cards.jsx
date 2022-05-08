// import axios from 'axios';
import { useEffect, useContext } from 'react';
import { Card } from '../components/Card';
import { Loading } from '../components/Loading';
import { Counter } from '../components/Counter';
import { Pager } from '../components/Pager';
import { Context } from '../context/Context';

export const Cards = () => {
  const { state, setData } = useContext(Context);

  useEffect(() => {
    fetch(
      `https://bikeindex.org:443/api/v3/search?page=${
        state.currentPage
      }&per_page=10${
        state.query ? `&query=${state.query}` : ''
      }&location=Berlin&distance=100&stolenness=proximity`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.bikes);
      })
      .catch((error) => console.error(error));
  }, [state.query, state.currentPage]);

  return (
    <section className='c-cards-container'>
      {state.data.length > 0 ? (
        <>
          <Counter />
          {state.data.map((bike) => (
            <Card bike={bike} key={bike.id} />
          ))}
          <Pager pageLimit={3} />
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
};
