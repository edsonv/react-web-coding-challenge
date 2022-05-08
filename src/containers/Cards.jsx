import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Card } from '../components/Card';
import { Counter } from '../components/Counter';
import { Loading } from '../components/Loading';
import { Pager } from '../components/Pager';
import { Context } from '../context/Context';

export const Cards = () => {
  const { state } = useContext(Context);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://bikeindex.org:443/api/v3/search?page=${state.currentPage}&per_page=10&location=Berlin&distance=100&stolenness=proximity`
      )
      .then((response) => {
        setData(response.data.bikes);
      });
  }, [state.currentPage]);

  return (
    <section className='c-cards-container'>
      {data ? (
        <>
          <Counter />
          {data.map((bike) => (
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
