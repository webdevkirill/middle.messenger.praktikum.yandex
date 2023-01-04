import Block from 'core/Block';

interface IProfilePageProps {}

export class ProfilePage extends Block {
  protected getStateFromProps() {
    this.state = {
      showEditInfo: false,
      showEditPassword: false,
      onChangePassword: () => {
        this.setState({ showEditPassword: true });
      },
      onChangeUserInfo: () => {
        this.setState({ showEditInfo: true });
      },
      onSaveInfo: (values: { email: string; login: string; firstName: string; secondName: string; phone: string }) => {
        console.log(values);
      },
      onSavePassword: (values: { oldPassword: string; password: string; passwordCheck: string }) => {
        console.log(values);
      },
      onBackBtnCLick: () => {
        const { showEditInfo, showEditPassword } = this.state;

        if (showEditInfo) {
          this.setState({ showEditInfo: false });
        } else if (showEditPassword) {
          this.setState({ showEditPassword: false });
        } else {
          console.log('redirect');
        }
      },
      onExit: () => {
        console.log('exit');
      },
    };
  }

  protected render(): string {
    const { showEditInfo, showEditPassword } = this.state;

    return `
      {{#ProfileLayout onBackBtnCLick=onBackBtnCLick }}
        ${
          !showEditInfo && !showEditPassword
            ? `{{{ ProfileInfo 
                onChangePassword=onChangePassword 
                onChangeUserInfo=onChangeUserInfo 
                onExit=onExit
              }}}`
            : ''
        }
        ${showEditInfo ? `{{{ ProfileEditInfo onSave=onSaveInfo }}}` : ''}
        ${showEditPassword ? `{{{ ProfileEditPassword onSave=onSavePassword }}}` : ''}
      {{/ProfileLayout}}
    `;
  }
}
