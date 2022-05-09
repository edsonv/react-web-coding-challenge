import { HashRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Context } from '../context/Context';
import { useInitialState } from '../hooks/useInitialState';
import { Layout } from '../containers/Layout';

export const App = () => {
  const initialState = useInitialState();

  return (
    <Context.Provider value={initialState}>
      <Layout>
        <HashRouter>
          <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/details/:id' element={<Details />} />
          </Routes>
        </HashRouter>
      </Layout>
    </Context.Provider>
  );
};

export default App;
