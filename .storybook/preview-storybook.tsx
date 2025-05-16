import type { Preview } from '@storybook/react';
import dayjs from 'dayjs';

import 'dayjs/locale/nb';

dayjs.locale('nb');

const previewDefault: Preview = {
  parameters: {
    layout: 'padded',
  },
};

export default previewDefault;
