export class ValidationHelper {
  static validatePassword = (value: string) => {
    if (value.length < 8) {
      return 'Пароль должен содержать от 8 символов';
    }

    if (value.length > 40) {
      return 'Пароль должен содержать до 40 символов';
    }

    if (!/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/gi.test(value)) {
      return 'Логин должен состоять из латинских символов и цифр и содержать хотя юы одну заглавную букву и цифру';
    }

    return '';
  };

  static validateLogin = (value: string) => {
    if (value.length < 3) {
      return 'Логин должен содержать от 3 символов';
    }

    if (value.length > 20) {
      return 'Логин должен содержать до 20 символов';
    }

    if (!/^(?=.*?[a-zA-Z])[0-9a-zA-Z]{2,19}$/gi.test(value)) {
      return 'Логин должен состоять из латинских символов и цифр';
    }

    return '';
  };

  static validateEmail = (value: string) => {
    if (
      // see https://stackoverflow.com/a/1373724
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
        value,
      )
    ) {
      return 'Некорректный email';
    }

    return '';
  };

  static validatePhone = (value: string) => {
    if (!/^\+?[0-9]{10,15}$/.test(value)) {
      return 'Некорректный телефон: должен состоять из цифр, может начинается с плюса';
    }

    return '';
  };

  static validateCheckPassword = (password: string, checkPassword: string) => {
    if (password !== checkPassword) {
      return 'Пароли не совпадают';
    }

    return '';
  };

  static validateMessage = (value: string) => {
    if (!value) {
      return 'Сообщение не должно быть пустым';
    }

    return '';
  };
}
