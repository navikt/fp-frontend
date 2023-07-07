import React from 'react';

import './globalStylesStorybook.module.css';

export const decorators = [
  Story => (
    <div style={{ margin: '40px' }}>
      <Story />
    </div>
  ),
];
