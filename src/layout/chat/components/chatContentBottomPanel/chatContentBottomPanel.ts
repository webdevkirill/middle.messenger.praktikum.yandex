import Block from 'core/Block';

import './index.scss';

interface IChatContentBottomPanelProps {
  avatarSrc?: string;
}

export class ChatContentBottomPanel extends Block {
  static componentName = 'ChatContentBottomPanel';

  constructor(props: IChatContentBottomPanelProps) {
    super(props);
  }

  protected render(): string {
    const { name } = this.props;
    return `
      <div class='bottom-panel'>
        <div class='bottom-panel__attach'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" width="32px">
            <path fill="#999" fill-rule="evenodd" d="m7.18662 13.5 7.57618-7.57611.9428.94281-7.57617 7.5761-.94281-.9428Zm2.51405 2.5141 7.57613-7.57617.9428.94281-7.5761 7.57616-.94283-.9428Zm5.34263 5.3426 7.5762-7.5761.9428.9428-7.5762 7.5761-.9428-.9428Zm2.5141 2.5141 7.5761-7.5762.9428.9428-7.5761 7.5762-.9428-.9428Zm0 .0001c-2.6151 2.6151-6.8456 2.6245-9.44909.021s-2.59407-6.834.02105-9.4491L7.18655 13.5c-3.13815 3.1381-3.14945 8.2148-.02526 11.339 3.12421 3.1242 8.20081 3.1128 11.33901-.0253l-.9429-.9428Z" clip-rule="evenodd"/>
            <path fill="#999" fill-rule="evenodd" d="m22.6195 13.7806.9428.9428c2.4407-2.4408 2.4495-6.3893.0196-8.81923-2.4299-2.42993-6.3784-2.42114-8.8192.01964l.9428.94281c1.9178-1.91775 5.0202-1.92466 6.9294-.01543 1.9092 1.90923 1.9023 5.01161-.0154 6.92941ZM9.70092 16.0144c-1.74341 1.7434-1.74969 4.5638-.01403 6.2994 1.73571 1.7357 4.55601 1.7294 6.29941-.014l-.9428-.9428c-1.2204 1.2204-3.1946 1.2248-4.4096.0098-1.21496-1.215-1.21056-3.1892.0098-4.4096l-.94278-.9428Z" clip-rule="evenodd"/>
          </svg>
        </div>
        <div class='bottom-panel__message'>
          {{{Input 
            inputClassName='bottom-panel__input'
            type="text" 
            name="message"
            id="message"
            placeholder="Сообщение"
            onInput=onSearchInput
            onBlur=onSearchBlur
            value=inputValue
          }}}
        </div>
        <button class="bottom-panel__button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 12" width="13px">
            <path fill="#fff" d="M0 5.19995h11v1.6H0z"/>
            <path stroke="#fff" stroke-width="1.6" d="m7 1 4 5-4 5"/>
          </svg>
        </button>
      </div>
    `;
  }
}
