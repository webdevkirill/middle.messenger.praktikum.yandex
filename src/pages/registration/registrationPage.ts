import Block from 'core/Block';

import { ValidationHelper } from 'helpers/ValidationHelper';

import './index.scss';

interface IRegistrationPageProps {}

export class RegistrationPage extends Block {
  protected getStateFromProps() {
    this.state = {
      values: {
        email: '',
        login: '',
        firstName: '',
        secondName: '',
        phone: '',
        password: '',
        passwordCheck: '',
      },
      errors: {
        email: '',
        login: '',
        firstName: '',
        secondName: '',
        phone: '',
        password: '',
        passwordCheck: '',
      },
      onEmailValidate: (event: FocusEvent) => {
        const input = event.target as HTMLInputElement;

        const inputValue = input.value;
        const inputError = ValidationHelper.validateEmail(inputValue);

        const nextState = {
          errors: {
            ...this.state.errors,
            email: inputError,
          },
          values: {
            ...this.state.values,
            email: inputValue,
          },
        };

        this.setState(nextState);
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
      onFirstNameValidate: (event: FocusEvent) => {
        const input = event.target as HTMLInputElement;

        const inputValue = input.value;

        const nextState = {
          values: {
            ...this.state.values,
            firstName: inputValue,
          },
        };

        this.setState(nextState);
      },
      onSecondNameValidate: (event: FocusEvent) => {
        const input = event.target as HTMLInputElement;

        const inputValue = input.value;

        const nextState = {
          values: {
            ...this.state.values,
            secondName: inputValue,
          },
        };

        this.setState(nextState);
      },
      onPhoneValidate: (event: FocusEvent) => {
        const input = event.target as HTMLInputElement;

        const inputValue = input.value;
        const inputError = ValidationHelper.validatePhone(inputValue);

        const nextState = {
          errors: {
            ...this.state.errors,
            phone: inputError,
          },
          values: {
            ...this.state.values,
            phone: inputValue,
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
      onRegister: () => {
        const { values } = this.props;

        const emailError = ValidationHelper.validateEmail(values.email);
        const loginError = ValidationHelper.validateLogin(values.login);
        const phoneError = ValidationHelper.validatePhone(values.phone);
        const passwordError = ValidationHelper.validatePassword(values.password);
        const passwordCheckError = ValidationHelper.validateCheckPassword(values.password, values.passwordCheck);

        if (!emailError && !loginError && !phoneError && !passwordError && !passwordCheckError) {
          console.log('action/register', values);
        } else {
          this.setState({
            errors: {
              email: emailError,
              login: loginError,
              firstName: '',
              secondName: '',
              phone: phoneError,
              password: passwordError,
              passwordCheck: passwordCheckError,
            },
          });
        }
      },
      onLogin: () => {
        console.log('login');
      },
    };
  }

  protected render(): string {
    const { errors, values } = this.state;

    return `
      {{#LoginLayout}} 
        <form>
          <div class='registration-form'>
            {{{ Title text="Вход" titleClassName="registration-form__title"}}}
            <div class='registration-form__input'>
              {{{ ControlledInput 
                label="Почта"
                id="email" 
                name="email"
                type="email"
                placeholder="Email"
                value="${values.email}"
                error="${errors.email}"
                onBlur=onEmailValidate
              }}}
            </div>
            <div class='registration-form__input'>
              {{{ ControlledInput 
                label="Логин"
                id="login" 
                name="login"
                placeholder="Логин"
                value="${values.login}"
                error="${errors.login}"
                onBlur=onLoginValidate
              }}}
            </div>
            <div class='registration-form__input'>
              {{{ ControlledInput 
                label="Имя"
                id="first_name" 
                name="first_name"
                placeholder="Имя"
                value="${values.firstName}"
                error="${errors.firstName}"
                onBlur=onFirstNameValidate
              }}}
            </div>
            <div class='registration-form__input'>
              {{{ ControlledInput 
                label="Фамилия"
                id="second_name" 
                name="second_name"
                placeholder="Фамилия"
                value="${values.secondName}"
                error="${errors.secondName}"
                onBlur=onSecondNameValidate
              }}}
            </div>
            <div class='registration-form__input'>
              {{{ ControlledInput 
                label="Телефон"
                id="phone" 
                name="phone"
                placeholder="Телефон"
                value="${values.phone}"
                error="${errors.phone}"
                onBlur=onPhoneValidate
              }}}
            </div>
            <div class='registration-form__input'>
              {{{ ControlledInput 
                label="Пароль"
                id="password" 
                name="password"
                placeholder="Пароль"
                type="password"
                value="${values.password}"
                error="${errors.password}"
                onBlur=onPasswordValidate
              }}}
            </div>
            {{{ ControlledInput 
              label="Пароль (ещё раз)"
              id="passwordCheck" 
              name="passwordCheck"
              placeholder="Пароль"
              type="password"
              value="${values.passwordCheck}"
              error="${errors.passwordCheck}"
              onBlur=onCheckPasswordValidate
            }}}
          </div>
          <div>
            {{{ Button text="Зарегистрироваться" onClick=onRegister }}}
            {{{ Button secondary=true text="Войти" onClick=onLogin }}}
          </div>
        </form>
      {{/LoginLayout}}
    `;
  }
}
