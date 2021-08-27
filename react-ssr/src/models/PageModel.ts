import { SortConfigModel } from './SortConfigModel';

export interface PageModel {
  currentPage: number;
  limit: number;
  sortConfig: SortConfigModel | null;
  search: string;
}
