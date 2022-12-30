import Block from 'core/Block';

import './index.scss';

interface ITitleProps {
  text: string;
  titleClassName?: string;
}

export class Title extends Block {
  static componentName = 'Title';

  constructor({ text, titleClassName }: ITitleProps) {
    super({ text, titleClassName });
  }

  protected render(): string {
    return `
      <h1 class='title {{titleClassName}}'>{{text}}</h1>
    `;
  }
}
