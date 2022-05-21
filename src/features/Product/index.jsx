import NotFound from 'components/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      Product Feature
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default ProductFeature;
