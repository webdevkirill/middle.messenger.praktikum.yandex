import { RegistrationPage } from 'pages';
import { ErrorPage404 } from 'pages';
import { ErrorPage500 } from 'pages';
import { ProfilePage } from 'pages';
import { LoginPage } from 'pages';
import { ChatPage } from 'pages';

import { renderDOM } from './core';
import './index.scss';

// require('babel-core/register');

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new ChatPage({}));
});
