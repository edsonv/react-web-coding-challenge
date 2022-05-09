import { Link } from 'react-router-dom';
import { Dummy } from './Dummy';

export const Card = ({ bike }) => {
  return (
    <article className='c-card'>
      <picture>
        {bike.thumb !== null ? (
          <img src={bike.thumb} alt={bike.title} width='100' height='100' />
        ) : (
          <Dummy />
        )}
      </picture>
      <div>
        <h2>
          <Link to={`/details/${bike.id}`}>{bike.title}</Link>
        </h2>
        <p>
          {bike.description ? bike.description : 'No description available'}
        </p>
        <p>
          {new Date(bike.date_stolen).toDateString()} - {bike.stolen_location}
        </p>
      </div>
    </article>
  );
};
