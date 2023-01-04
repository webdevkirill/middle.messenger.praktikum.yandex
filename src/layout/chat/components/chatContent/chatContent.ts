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
      <div class='chat-content'>
        {{{ ChatContentTopPanel name="Вадим" }}}
        <div class='chat-content__messages'>
          {{{ ChatContentMessages }}}
        </div>
        {{{ ChatContentBottomPanel }}}
      </div>
    `;
  }
}
