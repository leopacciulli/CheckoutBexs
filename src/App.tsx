import React from 'react';

import GlobalStyle from './styles/global';
import Checkout from './pages/Checkout';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Checkout />
      </AppProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
