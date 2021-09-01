import { RootState } from '../store/store';

export interface TemplateParamsModel {
  cssPath: string;
  jsPath: string;
  content: string;
  preloadedState: RootState;
}
