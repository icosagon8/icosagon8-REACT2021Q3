import { RouteModel } from './models/RouteModel';
import { About } from './pages/About';
import DetailsPage from './pages/Details/Details';
import Home from './pages/Home';

export const ROUTES: RouteModel[] = [
  {
    path: '/',
    exact: true,
    ...Home,
  },
  {
    path: '/about',
    exact: true,
    strict: true,
    component: About,
  },
  {
    path: '/details/:id',
    exact: true,
    strict: true,
    ...DetailsPage,
  },
];
