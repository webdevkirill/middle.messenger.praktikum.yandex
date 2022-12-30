import { Card, Input, Error, ControlledInput, Button, Title } from 'components';
import { registerComponent } from 'core';
import { LoginLayout } from 'layout';

export { LoginPage } from './loginPage';

registerComponent(LoginLayout);
registerComponent(Card);
registerComponent(Input);
registerComponent(Error);
registerComponent(ControlledInput);
registerComponent(Button);
registerComponent(Title);
