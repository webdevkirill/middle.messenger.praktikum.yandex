import Block from 'core/Block';

import './index.scss';

interface ILoginPageProps {}

export class ErrorPage404 extends Block {
  protected render(): string {
    return `
      {{#ErrorLayout}}
        <h1 class='error-screen__title'>404</h1>
        <h3 class='error-screen__subtitle'>Не туда попали</h3>
      {{/ErrorLayout}}
    `;
  }
}
