import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import Layout from './components/Layout.jsx'
import Wallets from './components/pages/Wallets.jsx'
import Transaction from './components/pages/Transaction.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <HomePage/>,
      },
      {
        path: "wallets",
        element: <Wallets/>,
      },
      {
        path: "transaction ",
        element: <Transaction/>,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
