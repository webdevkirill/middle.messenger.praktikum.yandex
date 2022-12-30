import Block from 'core/Block';

interface IChatLayoutProps {}

export class ChatLayout extends Block {
  static componentName = 'ChatLayout';

  constructor(props: IChatLayoutProps) {
    super(props);
  }

  protected render(): string {
    console.log('render');

    return `
      <div class='chat-screen'>
        <div class='chat-screen__menu'>
          {{{ ChatMenu }}}
        </div>
        <div class='chat-screen__content'>
          {{{ ChatContent }}}
        </div>
      </div>
    `;
  }
}
