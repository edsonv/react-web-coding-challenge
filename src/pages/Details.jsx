import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from '../components/Loading';

export const Details = () => {
  const { id } = useParams();
  const [bike, setBike] = useState(null);

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
      {bike ? (
        <article className='c-bike-details'>
          <section className='c-section'>
            <h2 className='title'>Stolen {bike.title}</h2>
            <p className='description'>{`Stolen ${new Date(
              bike.date_stolen
            ).toDateString()} at ${bike.stolen_location}`}</p>
            <p className='dateReported'>
              Reported:{' '}
              {bike.stolen_record
                ? new Date(bike.stolen_record.created_at).toDateString()
                : ''}
            </p>
            {bike.public_images.length > 0 ? (
              <div className='imagesContainer'>
                {bike.public_images.map((image) => (
                  <picture key={image.id}>
                    <img src={image.full} alt={bike.title} width='100%' />
                  </picture>
                ))}
              </div>
            ) : (
              <p>No image available</p>
            )}
          </section>
          <section className='c-section'>
            <h2 className='title'>Description of incident</h2>
            <p className='theftDescription'>
              {bike.stolen_record.theft_description
                ? bike.stolen_record.theft_description
                : 'No description available'}
            </p>
          </section>
        </article>
      ) : (
        <Loading />
      )}
    </>
  );
};
