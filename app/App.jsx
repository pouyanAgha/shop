import { Route, Routes } from 'react-router-dom';

import Home from '../libs/pages/Home';
import TshirtPage from '../libs/pages/TshirtPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tshirt" element={<TshirtPage />} />
      </Routes>
    </div>
  );
};

export default App;
