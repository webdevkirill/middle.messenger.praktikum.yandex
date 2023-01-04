import Block from 'core/Block';

import { ValidationHelper } from 'helpers/ValidationHelper';

import './index.scss';

interface IProfileEditPasswordProps {
  onSave: (values: { oldPassword: string; password: string; passwordCheck: string }) => void;
}

export class ProfileEditPassword extends Block {
  static componentName = 'ProfileEditPassword';

  protected getStateFromProps(props: IProfileEditPasswordProps) {
    this.state = {
      values: {
        oldPassword: '',
        password: '',
        passwordCheck: '',
      },
      errors: {
        oldPassword: '',
        password: '',
        passwordCheck: '',
      },
      onOldPasswordValidate: (event: FocusEvent) => {
        const input = event.target as HTMLInputElement;

        const passwordValue = input.value;
        const passwordError = ValidationHelper.validatePassword(passwordValue);

        const nextState = {
          errors: {
            ...this.state.errors,
            oldPassword: passwordError,
          },
          values: {
            ...this.state.values,
            oldPassword: passwordValue,
          },
        };

        this.setState(nextState);
      },
      onPasswordValidate: (event: FocusEvent) => {
        const input = event.target as HTMLInputElement;

        const passwordValue = input.value;
        const passwordError = ValidationHelper.validatePassword(passwordValue);

        const passwordCheckValue = this.state.values.passwordCheck;
        const passwordCheckError = passwordCheckValue
          ? ValidationHelper.validateCheckPassword(passwordCheckValue, passwordValue)
          : '';

        const nextState = {
          errors: {
            ...this.state.errors,
            password: passwordError,
            passwordCheck: passwordCheckError,
          },
          values: {
            ...this.state.values,
            password: passwordValue,
          },
        };

        this.setState(nextState);
      },
      onCheckPasswordValidate: (event: FocusEvent) => {
        const input = event.target as HTMLInputElement;
        const passwordValue = this.state.values.password;

        const passwordCheckValue = input.value;
        const passwordCheckError = ValidationHelper.validateCheckPassword(passwordCheckValue, passwordValue);

        const nextState = {
          errors: {
            ...this.state.errors,
            passwordCheck: passwordCheckError,
          },
          values: {
            ...this.state.values,
            passwordCheck: passwordCheckValue,
          },
        };

        this.setState(nextState);
      },
      onHandleSave: () => {
        const { values } = this.state;

        const passwordError = ValidationHelper.validatePassword(values.password);
        const oldPasswordError = ValidationHelper.validatePassword(values.oldPassword);
        const passwordCheckError = ValidationHelper.validateCheckPassword(values.password, values.passwordCheck);

        if (!passwordError && !oldPasswordError && !passwordCheckError) {
          props.onSave(values);
        } else {
          this.setState({
            errors: {
              oldPassword: oldPasswordError,
              password: passwordError,
              passwordCheck: passwordCheckError,
            },
          });
        }
      },
    };
  }

  protected render(): string {
    const { errors, values } = this.state;

    return `
      <form class='profile-edit-info'>
        <div >
          {{{ Title text="Изменение пароля" titleClassName="profile-edit-info__title"}}}
          <div class='registration-form__input'>
            {{{ ControlledInput 
              label="Старый пароль"
              id="oldPassword" 
              name="oldPassword"
              placeholder="Старый пароль"
              type="password"
              value="${values.oldPassword}"
              error="${errors.oldPassword}"
              onBlur=onOldPasswordValidate
            }}}
          </div>
          <div class='registration-form__input'>
            {{{ ControlledInput 
              label="Новый пароль"
              id="password" 
              name="password"
              placeholder="Новый пароль"
              type="password"
              value="${values.password}"
              error="${errors.password}"
              onBlur=onPasswordValidate
            }}}
          </div>
          <div class='registration-form__input'>
            {{{ ControlledInput 
              label="Новый пароль (ещё раз)"
              id="passwordCheck" 
              name="passwordCheck"
              placeholder="Новый пароль"
              type="password"
              value="${values.passwordCheck}"
              error="${errors.passwordCheck}"
              onBlur=onCheckPasswordValidate
            }}}
          </div>
        <div>
          {{{ Button text="Сохранить" onClick=onHandleSave }}}
        </div>
      </form>
    `;
  }
}
