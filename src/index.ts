import { Button, Card, ControlledInput, Input, Scrollbar, Title, Error, AvatarUpload, TextWithLabel } from 'components';
import { ChatLayout, ErrorLayout, LoginLayout, ProfileLayout } from 'layout';
import {
  ChatMenu,
  ChatAvatar,
  ChatEmptyContent,
  ChatContent,
  ChatList,
  ChatListItem,
  ChatContentTopPanel,
  ChatContentBottomPanel,
  ChatContentMessages,
} from 'layout/chat/components';
import { BackBtn } from 'layout/profile/components/backBtn';
import { RegistrationPage } from 'pages';
import { ErrorPage404 } from 'pages';
import { ErrorPage500 } from 'pages';
import { ProfilePage } from 'pages';
import { LoginPage } from 'pages';
import { ChatPage } from 'pages';
import { ProfileEditInfo, ProfileInfo } from 'pages/profile/components';
import { ProfileEditPassword } from 'pages/profile/components/profileEditPassword';

import { registerComponent, renderDOM } from './core';
import './index.scss';

registerComponent(Input);
registerComponent(Scrollbar);
registerComponent(Card);
registerComponent(Error);
registerComponent(ControlledInput);
registerComponent(Button);
registerComponent(Title);
registerComponent(TextWithLabel);
registerComponent(AvatarUpload);

registerComponent(ChatMenu);
registerComponent(ChatAvatar);
registerComponent(ChatEmptyContent);
registerComponent(ChatContent);
registerComponent(ChatList);
registerComponent(ChatListItem);
registerComponent(ChatContentTopPanel);
registerComponent(ChatContentBottomPanel);
registerComponent(ChatContentMessages);

registerComponent(BackBtn);

registerComponent(ProfileInfo);
registerComponent(ProfileEditInfo);
registerComponent(ProfileEditPassword);

registerComponent(ChatLayout);
registerComponent(ErrorLayout);
registerComponent(LoginLayout);
registerComponent(ProfileLayout);

// require('babel-core/register');

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new ProfilePage({}));
});
