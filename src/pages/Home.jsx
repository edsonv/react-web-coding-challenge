import { Counter } from '../components/Counter';
import { Header } from '../components/Header';
import { SearchForm } from '../components/SearchForm';
import { Cards } from '../containers/Cards';

export const Home = () => {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <Counter />
        <Cards />
      </main>
    </>
  );
};
