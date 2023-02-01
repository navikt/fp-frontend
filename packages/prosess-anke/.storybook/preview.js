import React from 'react';
import '@navikt/ds-css';
import '@navikt/ft-ui-komponenter/dist/style.css';

import '../../../.storybook/global.less';

export const decorators = [(Story) => <div style={{ margin: '40px'}}><Story/></div>];
