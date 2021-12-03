import React from 'react';
import { Route } from 'react-router-dom';
import loadable from 'utils/loadable';

export function renderRoutes(routers) {
  const routerComponents = routers.map((router, i) => {
    const {
      path, component, children, key, title,
    } = router;
    return (
      <Route
        path={path}
        key={key || i}
        exact={!children}
        render={props => {
          const Component = loadable(component);
          document.title = title;
          if (children) {
            return <Component {...props} route={children} />;
          }
          return <Component {...props} />;
        }}
      />
    );
  });
  return routerComponents;
}
