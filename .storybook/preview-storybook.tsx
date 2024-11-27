import React from 'react';

import dayjs from 'dayjs';

import './globalStylesStorybook.module.css';

import 'dayjs/locale/nb.js';

dayjs.locale('nb');
export const decorators = [
  Story => (
    <div style={{ margin: '40px' }}>
      <Story />
    </div>
  ),
];
