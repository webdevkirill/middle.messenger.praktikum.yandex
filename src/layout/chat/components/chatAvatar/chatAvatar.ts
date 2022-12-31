import Block from 'core/Block';

import './index.scss';

interface IChatAvatarProps {
  size?: string;
  avatarSrc?: string;
}

export class ChatAvatar extends Block {
  static componentName = 'ChatAvatar';

  constructor({ size = 'large', avatarSrc = '' }: IChatAvatarProps) {
    super({ size, avatarSrc });
  }

  protected render(): string {
    const { size } = this.props;

    return `
      <div class='chat-avatar chat-avatar_${size}'>
        {{#if avatarSrc}} <img src=avatarSrc /> {{/if}} 
      </div>
    `;
  }
}
