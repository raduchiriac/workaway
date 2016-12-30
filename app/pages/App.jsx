import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Page from '../pages/Page';
import AppContainer from '../containers/AppContainer';
import { title, meta, link } from '../config/headAssets';

const App = props => (
  <Page title={title} meta={meta} link={link}>
    <MuiThemeProvider>
      <AppContainer {...props} />
    </MuiThemeProvider>
  </Page>
);

export default App;
