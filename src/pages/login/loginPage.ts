import Block from 'core/Block';

import { ValidationHelper } from 'helpers/ValidationHelper';

import './index.scss';

interface ILoginPageProps {}

export class LoginPage extends Block {
  protected getStateFromProps() {
    this.state = {
      values: {
        login: '',
        password: '',
      },
      errors: {
        login: '',
        password: '',
      },
      onLoginValidate: (event: FocusEvent) => {
        const input = event.target as HTMLInputElement;

        const loginValue = input.value;
        const loginError = ValidationHelper.validateLogin(loginValue);

        const nextState = {
          errors: {
            ...this.state.errors,
            login: loginError,
          },
          values: {
            ...this.state.values,
            login: loginValue,
          },
        };

        this.setState(nextState);
      },
      onPasswordValidate: (event: FocusEvent) => {
        const input = event.target as HTMLInputElement;

        const passwordValue = input.value;
        const passwordError = ValidationHelper.validatePassword(passwordValue);

        const nextState = {
          errors: {
            ...this.state.errors,
            password: passwordError,
          },
          values: {
            ...this.state.values,
            password: passwordValue,
          },
        };

        this.setState(nextState);
      },
      onLogin: () => {
        const loginValue = this.state.values.login;
        const passwordValue = this.state.values.password;

        const loginError = ValidationHelper.validateLogin(loginValue);
        const passwordError = ValidationHelper.validatePassword(passwordValue);

        if (!loginError && !passwordError) {
          console.log('action/login', {
            login: loginValue,
            passwordValue: passwordValue,
          });
        } else {
          this.setState({
            values: {
              login: loginValue,
              password: passwordValue,
            },
            errors: {
              login: loginError,
              password: passwordError,
            },
          });
        }
      },
      onRegister: () => {
        console.log('registration');
      },
    };
  }

  protected render(): string {
    const { errors, values } = this.state;

    return `
      {{#LoginLayout}}
        <form>
          <div class='login-form'>
            {{{ Title text="Вход" titleClassName="login-form__title"}}}
            <div class='login-form__input'>
              {{{ ControlledInput 
                label="Логин" 
                id="login" 
                name="login" 
                placeholder='Логин'
                value="${values.login}"
                error="${errors.login}"
                onBlur=onLoginValidate
              }}}
            </div>
            {{{ ControlledInput 
              label="Пароль" 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Пароль" 
              value="${values.password}"
              error="${errors.password}"
              onBlur=onPasswordValidate
            }}}
          </div>
          <div>
            {{{ Button text="Авторизоваться" onClick=onLogin }}}
            {{{ Button secondary=true text="Нет аккаунта?" onClick=onRegister }}}
          </div>
        </form>
      {{/LoginLayout}}
    `;
  }
}
