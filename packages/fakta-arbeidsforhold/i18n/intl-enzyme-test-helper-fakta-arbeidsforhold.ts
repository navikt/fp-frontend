import { shallowWithIntl as globalShallowWithIntl, mountWithIntl as globalMountWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import messages from './nb_NO.json';

const shallowWithIntl = (node: any) => globalShallowWithIntl(node, null, messages);
export const mountWithIntl = (node: any) => globalMountWithIntl(node, null, messages);

export default shallowWithIntl;
