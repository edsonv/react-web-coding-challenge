import { useContext, useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { Counter } from '../components/Counter';
import { Pager } from '../components/Pager';
import { Context } from '../context/Context';
import { Loading } from '../components/Loading';

export const Cards = () => {
  const { state } = useContext(Context);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
      });
  }, [state.currentPage, state.query]);

  return (
    <section className='c-cards-container'>
      <Counter />
      {loading ? (
        <Loading />
      ) : data.length > 0 ? (
        <>
          {data.map((bike) => (
            <Card bike={bike} key={bike.id} />
          ))}
          <Pager pageLimit={3} />
        </>
      ) : (
        'No data available'
      )}
    </section>
  );
};
