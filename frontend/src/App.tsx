import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import {
  Loading,
  Error,
  Home,
  Articles,
  Article,
  About,
  SignUp,
  LogIn,
  NotFound
} from './pages';
import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path='articles' element={<Articles />} />
      <Route path='articles/:articleName' element={<Article />} />
      <Route path='about' element={<About />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<LogIn />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

const App = () => (
  <RouterProvider router={router} fallbackElement={<Loading />} />
);

export default App;

