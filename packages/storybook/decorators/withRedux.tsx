import React from 'react';

import { ReduxWrapper } from '@fpsak-frontend/form';

const withReduxProvider = (Story) => (
  <ReduxWrapper formData={{}} setFormData={() => undefined}>
    <Story />
  </ReduxWrapper>
);

export default withReduxProvider;
