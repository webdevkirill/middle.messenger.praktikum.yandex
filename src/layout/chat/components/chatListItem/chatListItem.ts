import Block from 'core/Block';

import './index.scss';

interface IChatListItemProps {
  name: string;
  message: string;
  date: string;
  counter?: number;
  isMyMessage?: boolean;
  avatarSrc?: string;
  onClick: () => void;
}

export class ChatListItem extends Block {
  static componentName = 'ChatListItem';

  constructor({ onClick, ...rest }: IChatListItemProps) {
    super({ ...rest, events: { click: onClick } });
  }

  protected render(): string {
    const { name, message, isMyMessage, date, counter } = this.state;
    return `
      <div class='chat-list-item'>
        <div class="chat-list-item__avatar">
          {{{ ChatAvatar
            avatarSrc=avatarSrc
          }}}
        </div>
        <div class="chat-list-item__message-container">
          <h5 class="chat-list-item__name">${name}</h5>
          <p class="chat-list-item__message">
            ${isMyMessage ? `<span class="chat-list-item__message-yours">Вы: </span>` : ''}
            ${message}
          </p>
        </div>
        <div class="chat-list-item__info">
          <p class="chat-list-item__date">${date}</p>
          ${counter ? `<span class='chat-list-item__counter'>${counter}</span>` : ''}
        </div>
      </div>
    `;
  }
}
