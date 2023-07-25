import Loadable from 'components/Loadable';
import Alerts from 'pages/Alerts';
import { lazy } from 'react';

import NotFound from 'pages/NotFound';
import Profile from 'pages/Profile';
import SKUMarkets from 'pages/SKUMarkets';
import Brand from 'pages/Brand';
import Category from 'pages/Category';
import Subscriptions from 'pages/Subscription';
import Login from 'pages/login';
import Register from 'pages/register';
import Dashboard from 'pages/Dashboard';
import Account from 'pages/Account';



const Home = Loadable(lazy(() => import('pages/Home')));
const About = Loadable(lazy(() => import('pages/About')));
const Contact = Loadable(lazy(() => import('pages/Contact')));
const ProductDetail = Loadable(lazy(() => import('pages/ProductDetail')));
const WatchList = Loadable(lazy(() => import('pages/WatchList')));

const main = [


    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/profile', element: <Profile /> },
    { path: '/alerts', element: <Alerts /> },
    { path: '/watchList', element: <WatchList /> },
    { path: '/skumarkets', element: <SKUMarkets /> },
    { path: '/Brand', element: <Brand /> },
    { path: '/Category', element: <Category /> },
    { path: '/Login', element: <Login /> },
    { path: '/Register', element: <Register /> },
    { path: '/Subscriptions', element: <Subscriptions /> },
    { path: '/Dashboard', element: <Dashboard /> },
    { path: '/ProductDetail', element: <ProductDetail /> },
    { path: '/Account', element: <Account /> },
    {
        path: '/product/:productId',
        element: <ProductDetail />,
    },
    { path: '*', element: <NotFound /> },
];

export default main;
