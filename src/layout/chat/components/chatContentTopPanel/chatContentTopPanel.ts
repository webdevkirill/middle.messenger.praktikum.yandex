import Block from 'core/Block';

import './index.scss';

interface IChatContentTopPanelProps {
  name: string;
  avatarSrc?: string;
}

export class ChatContentTopPanel extends Block {
  static componentName = 'ChatContentTopPanel';

  constructor(props: IChatContentTopPanelProps) {
    super(props);
  }

  protected render(): string {
    const { name } = this.props;
    return `
      <div class='top-panel'>
        <div class='top-panel__avatar'>
          {{{ ChatAvatar
            size="medium"
            avatarSrc=avatarSrc
          }}}
        </div>
        <div class='top-panel__name'>
          ${name}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 3 16" width="3px">
          <circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E"/>
          <circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E"/>
          <circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E"/>
        </svg>
      </div>
    `;
  }
}
