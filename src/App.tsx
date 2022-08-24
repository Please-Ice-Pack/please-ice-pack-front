import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import Home from '@pages/Home';
import Login from '@pages/Login';
import Error404 from '@pages/Error/Error404';
import LayoutContainer from '@components/layouts/LayoutContainer';
import { GlobalStyle } from '@styles/GlobalStyle';
import theme from '@styles/theme';
import {
  INTRO_PAGE_URL_PATH,
  LOGIN_PAGE_URL_PATH,
} from '@constants/url/internalUrl';

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });

  return (
    <>
      <GlobalStyle />
      <ToastContainer position="top-right" autoClose={1500} hideProgressBar />
      <ReactQueryDevtools initialIsOpen={false} />
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route element={<LayoutContainer />}>
                <Route path={INTRO_PAGE_URL_PATH} element={<Home />} />
                <Route path="*" element={<Error404 />} />
              </Route>
              <Route path={LOGIN_PAGE_URL_PATH} element={<Login />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
