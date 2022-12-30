import Block from 'core/Block';

import { Error } from 'components/error';
import { Input } from 'components/input';

import './index.scss';

interface IControlledInputProps {
  label: string;
  value: string;
  id?: string;
  type?: string;
  name?: string;
  error?: string;
  placeholder?: string;
  inputClassName?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onChange?: () => void;
}

export class ControlledInput extends Block<IControlledInputProps> {
  static componentName = 'ControlledInput';

  constructor(props: IControlledInputProps) {
    super(props);
  }

  protected render(): string {
    const type = this.props.type || 'text';

    return `
      <div class='controlled-input'>
        <label class='controlled-input__label' {{#if id}} for={{id}} {{/if}}>{{label}}</label>
        {{{ Input
          inputClassName=inputClassName
          id=id
          type="${type}"
          placeholder=placeholder
          name=name
          value=value
          onFocus=onFocus
          onBlur=onBlur
          onInput=onInput
        }}}
        {{{ Error error=error}}}
      </div>
    `;
  }
}
