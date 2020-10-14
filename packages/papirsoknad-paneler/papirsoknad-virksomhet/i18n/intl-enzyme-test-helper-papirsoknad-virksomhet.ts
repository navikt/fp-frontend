// @ts-expect-error ts-migrate(7016) FIXME: Try `npm install @types/fpsak-frontend__utils-test... Remove this comment to see the full error message
import { shallowWithIntl as globalShallowWithIntl } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import messages from './nb_NO.json';

const shallowWithIntl = (node: any) => globalShallowWithIntl(node, null, messages);

export default shallowWithIntl;
