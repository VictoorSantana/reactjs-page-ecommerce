import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';

/* Routes */
import HomeRoute from './pages/home';
/*****/

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const Routes = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={(props) => <HomeRoute {...props}></HomeRoute>}></Route>
      </Switch>
    </BrowserRouter>
  </QueryClientProvider>
);
export default Routes; //end