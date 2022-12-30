import Block from 'core/Block';

import './index.scss';

interface IChatContentProps {}

export class ChatContent extends Block {
  static componentName = 'ChatContent';

  constructor({}: IChatContentProps) {
    super({});
  }

  protected render(): string {
    return `
      <div class='content'>
        Content
      </div>
    `;
  }
}
