import Block from 'core/Block';

import './index.scss';

interface IAvatarUploadProps {
  onClick: () => void;
}

export class AvatarUpload extends Block {
  static componentName = 'AvatarUpload';

  constructor({ onClick }: IAvatarUploadProps) {
    super({ events: { click: onClick } });
  }

  protected render(): string {
    // language=hbs
    return `
      <div class='avatar-upload'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 40 40'>
          <path
            fill='#CDCDCD'
            fill-rule='evenodd'
            d='M36 2H4a2 2 0 0 0-2 2v21.27l12.65-2.96a12 12 0 0 1 2.73-.31h5.24a12 12 0 0 1 2.73.31L38 25.27V4a2 2 0 0 0-2-2ZM4 0a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm6.9 14.55a3.64 3.64 0 1 0 0-7.28 3.64 3.64 0 0 0 0 7.28Z'
            clip-rule='evenodd'
          ></path>
        </svg>
        <span class='avatar-upload__text'>
          Поменять аватар
        </span>
      </div>
    `;
  }
}
