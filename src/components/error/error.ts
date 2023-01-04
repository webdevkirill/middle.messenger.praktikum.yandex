import Block from 'core/Block';

import './index.scss';

interface IErrorProps {
  error?: string;
}

export class Error extends Block<IErrorProps> {
  static componentName = 'Error';

  protected render(): string {
    return `
      <div>
        {{#if error}} 
          <div class='error'>
            {{error}}
          </div>
        {{/if}} 
      </div>
    `;
  }
}
