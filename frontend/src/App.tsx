import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import ResumeLayout from './layouts/ResumeLayout';
import {
  Loading,
  Error,
  Home,
  Articles,
  Article,
  About,
  WebDeveloper,
  Interpreter,
  SignUp,
  SignIn,
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
      <Route path='resume' element={<ResumeLayout />}>
        <Route path='web-developer' element={<WebDeveloper />} />
        <Route path='interpreter' element={<Interpreter />} />
      </Route>
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<SignIn />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

const App = () => (
  <RouterProvider router={router} fallbackElement={<Loading />} />
);

export default App;

