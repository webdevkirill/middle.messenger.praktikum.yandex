import Block from 'core/Block';

import './index.scss';

interface IChatListProps {}

export class ChatList extends Block {
  static componentName = 'ChatList';

  protected getStateFromProps(props: IChatListProps) {
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
      <div class='chat-list'>
        {{{ ChatListItem 
          name="Андрей"
          message="Андрей"
          date="10:49"
          counter="2"
        }}}
        {{{ ChatListItem 
          name="Киноклуб"
          message="стикер"
          date="12:00"
          isMyMessage=true
        }}}

      </div>
    `;
  }
}
