import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import Home from '@pages/Home';
import Login from '@pages/Login';
import LayoutContainer from '@components/layouts/LayoutContainer';
import { GlobalStyle } from '@styles/GlobalStyle';
import theme from '@styles/theme';
import {
  INTRO_PAGE_URL_PATH,
  LOGIN_PAGE_URL_PATH,
} from '@constants/url/internalUrl';

const App = () => (
  <>
    <GlobalStyle />
    <ToastContainer position="top-right" autoClose={1500} hideProgressBar />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={LOGIN_PAGE_URL_PATH} element={<Login />} />
          <Route element={<LayoutContainer />}>
            <Route path={INTRO_PAGE_URL_PATH} element={<Home />} />
            <Route
              path="*"
              element={<div>ERROR 404 PAGE ! 맞는 페이지가 없네요 !</div>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>
);

export default App;
