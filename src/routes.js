import React from 'react';

// Views
const Home                  = React.lazy(() => import('./pages/Home'));
const About                 = React.lazy(() => import('./pages/About'));
const ErrorPage             = React.lazy(() => import('./pages/ErrorPage'));


const Login                 = React.lazy(() => import('./pages/Auth/Login'));
const Register              = React.lazy(() => import('./pages/Auth/Register'));
const Profile               = React.lazy(() => import('./pages/Auth/Profile'));

const routes = [

    { path: '*',                name: 'error',          component: ErrorPage },
    { path: '/',                name: 'home',           component: Home },
    { path: '/about',           name: 'about',          component: About },
    { path: '/login',           name: 'login',          component: Login },
    { path: '/register',        name: 'register',       component: Register },
    { path: '/profile',         name: 'profile',        component: Profile },

];

export default routes;
