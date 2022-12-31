import Block from 'core/Block';

import './index.scss';

interface IChatEmptyContentProps {}

export class ChatEmptyContent extends Block {
  static componentName = 'ChatEmptyContent';

  constructor({}: IChatEmptyContentProps) {
    super({});
  }

  protected render(): string {
    return `
      <div class='content'>
        Выберите чат чтобы отправить сообщение
      </div>
    `;
  }
}
