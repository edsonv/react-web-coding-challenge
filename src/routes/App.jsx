import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
