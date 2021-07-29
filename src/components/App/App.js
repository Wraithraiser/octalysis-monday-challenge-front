import styled from 'styled-components/macro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Header from '../Header';
import Challenge from '../../pages/Challenge';
import About from '../../pages/About';
import { RouterPath } from '../../utils/router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Main>
          <Switch>
            <Route exact path={RouterPath.challenge}>
              <Challenge />
            </Route>
            <Route path={RouterPath.about}>
              <About />
            </Route>
          </Switch>
        </Main>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'} />
    </QueryClientProvider>
  );
}

const Main = styled.main`
  padding: 32px 32px;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export default App;
