import Block from 'core/Block';

import './index.scss';

interface IButtonProps {
  text: string;
  error?: boolean;
  secondary?: boolean;
  link?: boolean;
  withBorder?: boolean;
  linkError?: boolean;
  buttonClassName?: string;
  onClick?: () => void;
}

export class Button extends Block {
  static componentName = 'Button';

  constructor({ text, secondary, error, link, linkError, withBorder, buttonClassName, onClick }: IButtonProps) {
    super({ text, secondary, error, link, linkError, withBorder, buttonClassName, events: { click: onClick } });
  }

  protected render(): string {
    return `
      <button 
        class='button 
        {{#if secondary}} button_secondary {{/if}} 
        {{#if error}} button_error {{/if}} 
        {{#if link}} button_link {{/if}} 
        {{#if linkError }} button_link button_link-error {{/if}} 
        {{#if withBorder}} button_with-border {{/if}} 
        {{buttonClassName}}'
        type="button"
      >
        \{{text}}
      </button>
    `;
  }
}
