import { Card, ControlledInput, Error, Input, Button, Title } from 'components';
import { registerComponent } from 'core';
import { LoginLayout } from 'layout';

export { RegistrationPage } from './registrationPage';

registerComponent(LoginLayout);
registerComponent(Card);
registerComponent(Input);
registerComponent(Error);
registerComponent(ControlledInput);
registerComponent(Button);
registerComponent(Title);
