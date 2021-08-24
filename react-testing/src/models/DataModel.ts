import { DocsModel } from './DocsModel';

export interface DataModel {
  docs: DocsModel[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}
