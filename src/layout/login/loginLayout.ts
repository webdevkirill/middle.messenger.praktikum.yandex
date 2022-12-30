import Block from 'core/Block';

import './index.scss';

interface ILoginLayoutProps {}

export class LoginLayout extends Block {
  static componentName = 'LoginLayout';

  constructor({}: ILoginLayoutProps) {
    super({});
  }

  protected render(): string {
    return `
      <div class='login-screen'>
        {{# Card cardClassName="login-screen__card" }}
          
        {{/Card}}
      </div>
    `;
  }
}
