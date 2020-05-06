import React from 'react';
import { ToastProvider } from './toast';

// eslint-disable-next-line react/prop-types
const AppProvider: React.FC = ({ children }) => {
  return <ToastProvider>{children}</ToastProvider>;
};

export default AppProvider;
