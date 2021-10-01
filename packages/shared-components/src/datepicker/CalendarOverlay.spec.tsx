import React from 'react';
import { render, screen } from '@testing-library/react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import CalendarOverlay from './CalendarOverlay';

const intl = createIntl(messages);

describe('<CalendarOverlay>', () => {
  it('skal ikke vise overlay når disabled', () => {
    render(
      <RawIntlProvider value={intl}>
        <CalendarOverlay
          onDayChange={() => undefined}
          elementIsCalendarButton={() => true}
          numberOfMonths={1}
          value="21.08.2017"
          disabled
        />
      </RawIntlProvider>,
    );

    expect(screen.queryByText('02.10.2017')).not.toBeInTheDocument();
  });

  it('skal vise overlay', async () => {
    render(
      <RawIntlProvider value={intl}>
        <CalendarOverlay
          onDayChange={() => undefined}
          elementIsCalendarButton={() => true}
          numberOfMonths={1}
          value="21.08.2017"
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('August 2017')).toBeInTheDocument();
    expect(screen.getByText('man')).toBeInTheDocument();
    expect(screen.getByText('tir')).toBeInTheDocument();
    expect(screen.getByText('ons')).toBeInTheDocument();
    expect(screen.getByText('tor')).toBeInTheDocument();
    expect(screen.getByText('fre')).toBeInTheDocument();
    expect(screen.getByText('lør')).toBeInTheDocument();
    expect(screen.getByText('søn')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('31')).toBeInTheDocument();
  });
});
