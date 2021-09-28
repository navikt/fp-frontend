import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { NedChevron, OppChevron } from 'nav-frontend-chevron';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import messages from '../../../../i18n/nb_NO.json';
import BubbleText from './bubbleText';

const intlMock = getIntlMock(messages);

describe('<BubbleText>', () => {
  it('skal kun vise en del av teksten om cutoffpointen vi sender er mindre en tekstens lengde', async () => {
    const bodyText = 'My bodytekst is the only thing that keeps me awake at night';
    const cutOffLength = 10;

    render(
      <RawIntlProvider value={intlMock}>
        <BubbleText
          bodyText={bodyText}
          cutOffLength={cutOffLength}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('My body...')).toBeInTheDocument();
    expect(screen.getByTitle('Åpne tekstfelt')).toBeInTheDocument();
  });

  it('skal vise hele teksten om cutoffpointen vi sender er størren en teksten', async () => {
    const bodyText = 'My bodytekst is the only thing that keeps me awake at night';
    const cutOffLength = 100;

    render(
      <RawIntlProvider value={intlMock}>
        <BubbleText
          bodyText={bodyText}
          cutOffLength={cutOffLength}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText(bodyText)).toBeInTheDocument();
  });

  it('skal vise chevron opp om man klikker på chevron', async () => {
    const bodyText = 'My bodytekst is the only thing that keeps me awake at night';
    const cutOffLength = 10;

    render(
      <RawIntlProvider value={intlMock}>
        <BubbleText
          bodyText={bodyText}
          cutOffLength={cutOffLength}
        />
      </RawIntlProvider>,
    );

    userEvent.click(screen.getByTitle('Åpne tekstfelt'));

    expect(await screen.findByTitle('Lukke tekstfelt')).toBeInTheDocument();
  });
});
