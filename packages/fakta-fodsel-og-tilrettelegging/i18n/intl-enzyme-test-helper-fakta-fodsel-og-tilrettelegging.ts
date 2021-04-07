import { shallowWithIntl as globalShallowWithIntl, getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import messages from './nb_NO.json';

const shallowWithIntl = (node) => globalShallowWithIntl(node, messages);

export const intlMock = getIntlMock(messages);

export default shallowWithIntl;
