import React from 'react';

import { ReduxWrapper } from '@fpsak-frontend/form';

const withReduxProvider = (Story: any) => (
  <ReduxWrapper formName="Redux" formData={{}} setFormData={() => undefined}>
    <Story />
  </ReduxWrapper>
);

export default withReduxProvider;
