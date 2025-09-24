import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github, { GithubInfoLoader } from './components/GitHub/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout />,
//     children: [
//       {
//         path: '',
//         element : <Home />,
//       },
//       {
//         path: 'about',
//         element : <About />,
//       },{}
//     ]

//   }
// ])

const  router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element= {<Home />} />
      <Route path="about" element= {<About />} />
      <Route path="contact" element= {<Contact />} />
      <Route path="user/:userId" element= {<User />} />
      <Route loader={GithubInfoLoader} path="github" element= {<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
