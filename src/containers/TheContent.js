import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// routes config
import routes from '../routes'
import Loading from '../components/loader'
import ErrorPage from "../pages/ErrorPage";

const loading = (
  <Loading />
)

const TheContent = () => {
  return (
    <Suspense fallback={loading}>
          <Router>
              <Routes>
                <Route
                  path="*"
                  element={ <ErrorPage /> }
                />
                {
                  routes.map((route, i) => {
                    console.log('route -------', route)
                    return (
                      <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        element={props => (
                          <route.component {...props} />
                        )}
                      />
                    );
                  })
                }
              </Routes>
        </Router>
    </Suspense>
    
  )
}

export default TheContent
