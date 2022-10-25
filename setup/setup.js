import { TextDecoder, TextEncoder } from 'util';

import '@formatjs/intl-datetimeformat/polyfill-force';
import '@formatjs/intl-datetimeformat/locale-data/nb';
import '@formatjs/intl-numberformat/polyfill-force';
import '@formatjs/intl-numberformat/locale-data/nb';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

// TODO Midlertidig mock til bug i ny datepicker er fiksa
const spy = jest.spyOn(window, 'addEventListener');
spy.mockImplementation(() => {});
