import { TextDecoder, TextEncoder } from 'util';

import '@formatjs/intl-datetimeformat/polyfill-force';
import '@formatjs/intl-datetimeformat/locale-data/nb';
import '@formatjs/intl-numberformat/polyfill-force';
import '@formatjs/intl-numberformat/locale-data/nb';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
