import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import Home from '@pages/Home';
import Login from '@pages/Login';
import Error404 from '@pages/Error/Error404';
import AuthProtected from '@components/AuthProtected';
import LoginProtected from '@components/LoginProtected';
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
          <Route element={<AuthProtected />}>
            <Route element={<LayoutContainer />}>
              <Route path={INTRO_PAGE_URL_PATH} element={<Home />} />
              <Route path="*" element={<Error404 />} />
            </Route>
          </Route>
          <Route element={<LoginProtected />}>
            <Route path={LOGIN_PAGE_URL_PATH} element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </>
);

export default App;
