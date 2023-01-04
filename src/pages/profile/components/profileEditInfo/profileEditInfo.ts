import Block from 'core/Block';

import { ValidationHelper } from 'helpers/ValidationHelper';

import './index.scss';

interface IProfileEditInfoProps {
  onSave: (values: { email: string; login: string; firstName: string; secondName: string; phone: string }) => void;
}

export class ProfileEditInfo extends Block {
  static componentName = 'ProfileEditInfo';

  protected getStateFromProps(props: IProfileEditInfoProps) {
    this.state = {
      values: {
        email: '',
        login: '',
        firstName: '',
        secondName: '',
        phone: '',
      },
      errors: {
        email: '',
        login: '',
        firstName: '',
        secondName: '',
        phone: '',
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
      onHandleSave: () => {
        const { values } = this.state;

        const emailError = ValidationHelper.validateEmail(values.email);
        const loginError = ValidationHelper.validateLogin(values.login);
        const phoneError = ValidationHelper.validatePhone(values.phone);

        if (!emailError && !loginError && !phoneError) {
          props.onSave(values);
        } else {
          this.setState({
            errors: {
              email: emailError,
              login: loginError,
              firstName: '',
              secondName: '',
              phone: phoneError,
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
          {{{ Title text="Изменение данных" titleClassName="profile-edit-info__title"}}}
          <div class='profile-edit-info__input'>
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
          <div class='profile-edit-info__input'>
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
          <div class='profile-edit-info__input'>
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
          <div class='profile-edit-info__input'>
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
          <div class='profile-edit-info__input'>
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
        <div>
          {{{ Button text="Сохранить" onClick=onHandleSave }}}
        </div>
      </form>
    `;
  }
}
