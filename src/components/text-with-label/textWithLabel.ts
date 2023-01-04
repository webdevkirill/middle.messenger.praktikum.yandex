import Block from 'core/Block';

import './index.scss';

interface ITextWithLabelProps {
  text: string;
  label: string;
}

export class TextWithLabel extends Block {
  static componentName = 'TextWithLabel';

  constructor({ label, text }: ITextWithLabelProps) {
    super({ label, text });
  }

  protected render(): string {
    return `
      <div class='text-with-label'>
        <div class='text-with-label__label'>
          {{label}}
        </div>
        <div class='text-with-label__text'>
          {{text}}
        </div>
      </div>
    `;
  }
}
