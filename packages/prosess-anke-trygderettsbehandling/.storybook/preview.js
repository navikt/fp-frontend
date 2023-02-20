import React from 'react';
import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';

import '../../utils-test/src/global.less';

export const decorators = [(Story) => <div style={{ margin: '40px'}}><Story/></div>];
