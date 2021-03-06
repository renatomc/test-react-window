import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
