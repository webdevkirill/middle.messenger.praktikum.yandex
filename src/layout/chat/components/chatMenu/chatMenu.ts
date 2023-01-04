import Block from 'core/Block';

import './index.scss';

interface IChatMenuProps {}

export class ChatMenu extends Block {
  static componentName = 'ChatMenu';

  protected getStateFromProps(props: IChatMenuProps) {
    this.state = {
      inputValue: '',
      onSearchBlur: (event: FocusEvent) => {
        const input = event.target as HTMLInputElement;

        const inputValue = input.value;

        this.setState({
          inputValue: inputValue,
        });
      },
      onSearchInput: (event: InputEvent) => {
        const input = event.target as HTMLInputElement;

        const inputValue = input.value;
        console.log(inputValue);
      },
    };
  }

  protected render(): string {
    return `
      <div class='menu'>
        <a class="menu__profile-link" href="/profile">Профиль ></a>
        <div class='menu__search-input-wrapper'>
          {{{Input 
            inputClassName='menu__search-input'
            type="text" 
            name="search"
            id="search"
            placeholder="Поиск"
            onInput=onSearchInput
            onBlur=onSearchBlur
            value=inputValue
          }}}
          <div class="menu__search-input-label">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 14" width="13px" height="14px"><path fill="#999" fill-rule="evenodd" d="M7.592 8.414a3.667 3.667 0 1 1-5.185-5.186 3.667 3.667 0 0 1 5.185 5.186Zm.44 1.383a5.001 5.001 0 1 1 .944-.943l3.566 3.567-.943.942-3.566-3.566Z" clip-rule="evenodd"/></svg>
          </div>
        </div>
        {{{ ChatList }}}
      </div>
    `;
  }
}
