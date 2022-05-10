import React from 'react';
import { Routes, Route } from 'react-router-dom';


// routes config
import routes from '../routes'
import Loading from '../components/loader';

const loading = (
  <Loading />
)

const TheContent = () => {
  return (
    <React.Suspense fallback={loading}>
        <Routes>
            {
              routes.map((route, i) => {
                return (
                  <Route
                    key={i}
                    path={route.path}
                    name={route.name}
                    element={ <route.component /> }
                  />
                );
              })
          }
        </Routes>
    </React.Suspense>
    
  )
}

export default TheContent
