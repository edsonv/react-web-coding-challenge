import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Context } from '../context/Context';
import { useInitialState } from '../hooks/useInitialState';

export const App = () => {
  const initialState = useInitialState();

  return (
    <Context.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
