import { Store } from '../store/store';

export interface RouteModel {
  path: string;
  exact: boolean;
  strict?: boolean;
  component: React.FunctionComponent;
  fetchInitialData?: (store: Store, param: string) => any;
}
