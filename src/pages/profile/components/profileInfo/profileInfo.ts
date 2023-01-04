import Block from 'core/Block';

import { ValidationHelper } from 'helpers/ValidationHelper';

import './index.scss';

interface IProfileInfoProps {
  onExit:() => void
  onChangePassword: () => void;
  onChangeUserInfo: () => void;
}

export class ProfileInfo extends Block {
  static componentName = 'ProfileInfo';

  constructor(props: IProfileInfoProps) {
    super(props);
  }

  protected render(): string {
    return `
      <div>
        <div class='profile-screen__avatar'>
          {{{ AvatarUpload }}}
        </div>
        <div class='profile-screen__title'>
          Иван
        </div>
        <div class='profile-screen__info'>
          {{{ TextWithLabel label="Почта" text="pochta@yandex.ru" }}}
          {{{ TextWithLabel label="Логин" text="ivanivanov" }}}
          {{{ TextWithLabel label="Имя" text="Иван" }}}
          {{{ TextWithLabel label="Фамилия" text="Иванов" }}}
          {{{ TextWithLabel label="Имя в чате" text="Иван" }}}
          {{{ TextWithLabel label="Телефон" text="+7 (909) 967 30 30" }}}
          <div class='profile-screen__links'>
            {{{ Button text="Изменить данные" link=true withBorder=true onClick=onChangeUserInfo }}}
            {{{ Button text="Изменить пароль" link=true withBorder=true onClick=onChangePassword }}}
            {{{ Button text="Выйти" link=true linkError=true onClick=onExit }}}
          </div>
        </div>
      </div>
    `;
  }
}
