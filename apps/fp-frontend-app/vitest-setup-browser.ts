import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

import 'dayjs/locale/nb.js';
import '@navikt/ds-css';
import '@navikt/ds-css/darkside';

expect.extend(matchers);
