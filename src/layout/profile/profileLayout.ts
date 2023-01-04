import Block from 'core/Block';

import './index.scss';

interface IProfileLayoutProps {
  onBackBtnCLick: () => void;
}

export class ProfileLayout extends Block {
  static componentName = 'ProfileLayout';

  constructor(props: IProfileLayoutProps) {
    super(props);
  }

  protected render(): string {
    return `
      <div class='profile-screen'>
        {{{ BackBtn onClick=onBackBtnCLick }}}
        <div class='profile-screen__content' data-layout="1">

        </div>
      </div>
    `;
  }
}
