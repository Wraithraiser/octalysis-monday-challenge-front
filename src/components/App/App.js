import styled from 'styled-components/macro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Challenge from '../../pages/Challenge';
import About from '../../pages/About';
import { RouterPath } from '../../utils/router';

function App() {
  return (
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
