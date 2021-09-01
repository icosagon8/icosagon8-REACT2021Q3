import { TemplateParamsModel } from './models/TemplateParamsModel';

export function renderTemplate({ cssPath, jsPath, content = '', preloadedState }: TemplateParamsModel): string {
  return `<!DOCTYPE html>
  <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React. SSR</title>
        <link href="/client/${cssPath}" rel="stylesheet">
      </head>
      <body>
        <div id="root">${content}</div>
        <script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>
        <script src="/client/${jsPath}" defer></script>
      </body>
  </html>`;
}
