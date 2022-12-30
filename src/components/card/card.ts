import Block from 'core/Block';

import './index.scss';

interface ICardProps {
  cardClassName?: string;
}

export class Card extends Block {
  static componentName = 'Card';

  constructor(props: ICardProps) {
    super(props);
  }

  protected render(): string {
    return `
      <div class='card {{cardClassName}}' data-layout="1">
      </div>
    `;
  }
}
