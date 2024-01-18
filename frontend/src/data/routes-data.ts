import articlesData from './articles-data';
import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

type IsCapitalizedString = Capitalize<string>;
type Route = { path: `/${string}`; title: IsCapitalizedString };

const articleRouteData = articlesData.map(({ name, title }) => ({
  path: `/articles/${name}` as const,
  title: capitalizeFirstLetter(title) as IsCapitalizedString
}));

const routesData = [
  ...articleRouteData,
  {
    path: '/articles',
    title: 'Articles'
  },
  {
    path: '/about',
    title: 'About'
  },
  {
    path: '/resume',
    title: 'Resume'
  },
  {
    path: '/resume/web-developer',
    title: 'Web Developer Resume'
  },
  {
    path: '/resume/interpreter',
    title: 'Interpreter Resume'
  },
  {
    path: '/signup',
    title: 'Create Account'
  },
  {
    path: '/login',
    title: 'Log In'
  }
] as const satisfies Route[];

export type RouteData = (typeof routesData)[number];
export default routesData;
