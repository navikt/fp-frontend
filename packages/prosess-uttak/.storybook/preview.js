import React from 'react';
import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-tidslinje/dist/style.css';

import '../../utils-test/src/globalStylesTest.less';

export const decorators = [(Story) => <div style={{ margin: '40px'}}><Story/></div>];
