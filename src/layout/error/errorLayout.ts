import Block from 'core/Block';

import './index.scss';

interface IErrorLayoutProps {}

export class ErrorLayout extends Block {
  static componentName = 'ErrorLayout';

  constructor({}: IErrorLayoutProps) {
    super({});
  }

  protected render(): string {
    return `
      <div class='error-screen'>
        <div class='error-screen__text' data-layout="1">
        
        </div>
        <a href='/' class='error-screen__link'>Назад к чатам</a>
      </div>
    `;
  }
}
