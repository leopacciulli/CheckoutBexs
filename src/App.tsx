import React from 'react';

import GlobalStyle from './styles/global';
import Checkout from './pages/Checkout';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Checkout />
    </>
  );
};

export default App;
