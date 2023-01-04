import Block from 'core/Block';

import './index.scss';

interface ILoginPageProps {}

export class ErrorPage500 extends Block {
  protected render(): string {
    return `
      {{#ErrorLayout}}
        <h1 class='error-screen__title'>500</h1>
        <h3 class='error-screen__subtitle'>Мы уже фиксим</h3>
      {{/ErrorLayout}}
    `;
  }
}
