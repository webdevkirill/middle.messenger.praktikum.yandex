import Block from 'core/Block';

interface IChatPageProps {}

export class ChatPage extends Block {
  constructor(props: IChatPageProps) {
    super(props);
  }

  protected render(): string {
    return `
      {{{ ChatLayout }}}
    `;
  }
}
