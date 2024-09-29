import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Dashboard from './components/dashboard';
import Error from './components/Error';
import Home from './Home';

const router = createBrowserRouter([
  { path : "/", element:"",
    errorElement: <Error/>,
    children: [
      { path :"/", element: <Home/>},
      { path: "/dashboard", element: <Dashboard/> }
    ]
  }
])

function App() {

  return (
    <>
     <RouterProvider router={router}/>
     <ToastContainer />
    </>
  )
}

export default App