import React from 'react';

import dayjs from 'dayjs';

export const formatDateTime = (date: string) => dayjs(date).format('D. MMMM YYYY [kl.] HH:mm');

export const parseBoldText = (input: string) =>
  input
    .split(/(__.*?__)/g)
    .map((part, index) =>
      part.startsWith('__') && part.endsWith('__') ? <b key={index}>{part.slice(2, -2)}</b> : part,
    );
