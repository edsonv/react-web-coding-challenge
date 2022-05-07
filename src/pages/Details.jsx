import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';

export const Details = () => {
  const { id } = useParams();
  const [bike, setBike] = useState({});

  useEffect(() => {
    fetch(`https://bikeindex.org:443/api/v3/bikes/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setBike(response.bike);
      });
  }, [id]);

  return (
    <>
      <Header />
      <section>
        <h2>Stolen {bike.title}</h2>
      </section>
    </>
  );
};
