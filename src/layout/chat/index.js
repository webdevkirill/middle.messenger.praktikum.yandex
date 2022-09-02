import template from './index.hbs';
import Handlebars from 'handlebars/dist/handlebars.runtime';
import './menu';
import './content';

Handlebars.registerPartial('chat-layout', template);
