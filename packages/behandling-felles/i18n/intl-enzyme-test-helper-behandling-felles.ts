import { shallowWithIntl as globalShallowWithIntl, intlWithMessages } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import messages from './nb_NO.json';

const shallowWithIntl = (node: any) => globalShallowWithIntl(node, null, messages);

export const intlMock = intlWithMessages(messages);

export default shallowWithIntl;
