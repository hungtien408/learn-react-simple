import { Box } from '@material-ui/core';
import NotFound from 'components/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route component={NotFound} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;
