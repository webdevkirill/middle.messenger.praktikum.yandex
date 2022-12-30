import { AvatarUpload, TextWithLabel } from 'components';
import { registerComponent } from 'core';
import { ProfileLayout } from 'layout';

import { ProfileEditInfo, ProfileInfo } from './components';
import { ProfileEditPassword } from './components/profileEditPassword';

export { ProfilePage } from './profilePage';

registerComponent(ProfileLayout);
registerComponent(ProfileInfo);
registerComponent(ProfileEditInfo);
registerComponent(ProfileEditPassword);
registerComponent(TextWithLabel);
registerComponent(AvatarUpload);
