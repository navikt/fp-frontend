import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/nb.js';

import './globalStylesStorybook.module.css';

dayjs.locale('nb');
export const decorators = [
  Story => (
    <div style={{ margin: '40px' }}>
      <Story />
    </div>
  ),
];
