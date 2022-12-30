import Block from 'core/Block';

import './index.scss';

interface IChatMenuProps {}

export class ChatMenu extends Block {
  static componentName = 'ChatMenu';

  constructor({}: IChatMenuProps) {
    super({});
  }

  protected render(): string {
    return `
      <div class='menu'>
        Menu
      </div>
    `;
  }
}
