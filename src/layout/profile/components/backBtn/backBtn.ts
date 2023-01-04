import Block from 'core/Block';

import './index.scss';

interface IBackBtnProps {
  onClick: () => void;
}

export class BackBtn extends Block {
  static componentName = 'BackBtn';

  constructor({ onClick }: IBackBtnProps) {
    super({ events: { click: onClick } });
  }

  protected render(): string {
    // language=hbs
    return `
      <button class='profile-screen__back'>
        <span  class='profile-screen__back-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 12">
            <path fill="#fff" d="M13 6.8H2V5.2h11z"/>
            <path stroke="#fff" stroke-width="1.6" d="M6 11 2 6l4-5"/>
          </svg>
        </span>
      </button>
    `;
  }
}
