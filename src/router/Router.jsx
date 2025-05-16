import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import Shop from '../pages/shop/Shop'
import Blog from '../pages/blog/Blog'
import About from '../pages/aboutPages/AboutPages'
import Error from '../pages/error/Error'
import Contact from '../pages/contact/Contact'
import Search from '../pages/search/Search'
import Detail from "../pages/detail/Detail"
import Login from "../pages/login/Login"
import Auth from "../pages/auth/Auth"


const Router = () => {
  return (
    <div>
      {useRoutes([
        {
          path: '/',
          element: <Layout />,
          children: [
            {
              path: '/',
              element: ( 
              <Auth>
              <Home />
              </Auth>
              ) 
            },
            {
              path: '/shop',
              element: <Shop />
            },
            {
              path: '/blog',
              element: <Blog />
            },
            {
              path: '/about',
              element: <About />
            },

            {
              path: '/search',
              element: <Search />
            },
            {
              path: '/detail/:id',
              element: <Detail />
            },
            {
              path: '/contact',
              element: <Contact />
            },
          ]
        },
        {
          path: '*',
          element: <Error />
        },
                      {
              path: '/login',
              element: <Login />
            }
      ])}
    </div>
  )
}

export default Router
