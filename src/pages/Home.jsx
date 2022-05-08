import { Header } from '../components/Header';
import { SearchForm } from '../components/SearchForm';
import { Cards } from '../containers/Cards';

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <Cards />
      </main>
    </>
  );
};
