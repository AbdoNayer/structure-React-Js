import React from 'react';

// Views
const Home                  = React.lazy(() => import('./pages/Home'));
const About                 = React.lazy(() => import('./pages/About'));
const Profile               = React.lazy(() => import('./pages/Profile'));
const ErrorPage             = React.lazy(() => import('./pages/ErrorPage'));

const routes = [

    { path: '*',                name: 'error',          component: ErrorPage },
    { path: '/',                name: 'home',           component: Home },
    { path: '/about',           name: 'about',          component: About },
    { path: '/profile',         name: 'profile',        component: Profile },

];

export default routes;
