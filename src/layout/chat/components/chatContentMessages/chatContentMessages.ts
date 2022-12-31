import Block from 'core/Block';

import './index.scss';

interface IChatContentMessagesProps {}

export class ChatContentMessages extends Block {
  static componentName = 'ChatContentMessages';

  constructor(props: IChatContentMessagesProps) {
    super(props);
  }

  componentDidMount(props: IChatContentMessagesProps) {
    console.log(this.refs);
  }

  protected render(): string {
    return `
      {{# Scrollbar scrollbarClassName="chat-messages__wrapper" ref=ref }}
        <div class="chat-messages" ref=ref>
          <div class="chat-messages__item chat-messages__time">19 июня</div>

          <div class="chat-messages__item chat-messages__message">
            Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

            Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
            <span class="chat-messages__message-time">11:56</span>
          </div>

          <div class="chat-messages__item chat-messages__message chat-messages__message-attachment">
            <img src="https://i.pinimg.com/736x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg" />
            <span class="chat-messages__message-time">11:56</span>
          </div>

          <div class="chat-messages__item chat-messages__message chat-messages__message_my">
            Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

            Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
            <span class="chat-messages__message-time">11:56</span>
          </div>

          <div class="chat-messages__item chat-messages__message chat-messages__message_my">
            Круто!
            <span class="chat-messages__message-time">11:56</span>
          </div>

          <div class="chat-messages__item chat-messages__time">20 июня</div>

          <div class="chat-messages__item chat-messages__message">
            Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

            Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
            <span class="chat-messages__message-time">11:56</span>
          </div>

          <div class="chat-messages__item chat-messages__message chat-messages__message-attachment">
            <img src="https://i.pinimg.com/736x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg" />
            <span class="chat-messages__message-time">11:56</span>
          </div>

          <div class="chat-messages__item chat-messages__message chat-messages__message_my">
            Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

            Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
            <span class="chat-messages__message-time">11:56</span>
          </div>

          <div class="chat-messages__item chat-messages__message chat-messages__message_my">
            Круто!
            <span class="chat-messages__message-time">11:56</span>
          </div>
        </div>
      {{/ Scrollbar }}
    `;
  }
}
