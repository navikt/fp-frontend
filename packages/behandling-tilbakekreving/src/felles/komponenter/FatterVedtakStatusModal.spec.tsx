import React from 'react';
import { render, screen } from '@testing-library/react';
import { RawIntlProvider } from 'react-intl';
import Modal from 'nav-frontend-modal';
import { createIntl } from '@navikt/ft-utils';

import FatterVedtakStatusModal from './FatterVedtakStatusModal';
import messages from '../../../i18n/nb_NO.json';

const intl = createIntl(messages);

describe('<FatterVedtakStatusModal>', () => {
  Modal.setAppElement('body');
  it('skal ikke vise modal når behandling ikke er på vent', async () => {
    render(
      <RawIntlProvider value={intl}>
        <FatterVedtakStatusModal
          visModal
          lukkModal={() => undefined}
          tekst="Dette er en tekst"
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Du kommer nå til forsiden.')).toBeInTheDocument();
    expect(screen.getByText('OK')).toBeInTheDocument();
  });
});
