import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import Login from './pages/Login';
import LayoutContainer from './components/layouts/LayoutContainer';
import { GlobalStyle } from './styles/GlobalStyle';
import {
  INTRO_PAGE_URL_PATH,
  LOGIN_PAGE_URL_PATH,
} from './constants/url/internalUrl';
import theme from './styles/theme';

const App = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN_PAGE_URL_PATH} element={<Login />} />
          <Route element={<LayoutContainer />}>
            <Route path={INTRO_PAGE_URL_PATH} element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>
);

export default App;