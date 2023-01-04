import Block from 'core/Block';

import './index.scss';

interface IInputProps {
  id?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  inputClassName?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onInput?: () => void;
}

export class Input extends Block {
  static componentName = 'Input';

  constructor({ onBlur, onFocus, onInput, ...rest }: IInputProps) {
    super({
      ...rest,
      events: {
        input: onInput,
        focus: onFocus,
        blur: onBlur,
      },
    });
  }

  protected render(): string {
    return `
      <input
        class='input {{inputClassName}}'
        {{#if id}} id={{id}} {{/if}}
        type={{type}}
        {{#if placeholder}} placeholder={{placeholder}} {{/if}}
        {{#if name}} name={{name}} {{/if}}
        {{#if value}} value={{value}} {{/if}}
      />
    `;
  }
}
