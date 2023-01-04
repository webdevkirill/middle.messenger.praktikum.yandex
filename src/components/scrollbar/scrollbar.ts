import Block from 'core/Block';

interface IScrollbarProps {
  scrollbarClassName?: string;
}

export class Scrollbar extends Block {
  static componentName = 'Scrollbar';

  constructor(props: IScrollbarProps) {
    super(props);
  }

  componentDidMount(props: IScrollbarProps) {
    this.element?.scrollTo({ top: this.element?.scrollHeight });
  }

  protected render(): string {
    const { scrollbarClassName } = this.props;

    return `
      <div class=${scrollbarClassName} data-layout="1">

      </div>
    `;
  }
}
