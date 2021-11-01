import React from 'react';
import { render, screen } from '@testing-library/react';
import { RawIntlProvider } from 'react-intl';
import Modal from 'nav-frontend-modal';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import messages from '../../i18n/nb_NO.json';

import SettPaVentModal from './SettPaVentModal';

const intlMock = getIntlMock(messages);

describe('<SettPaVentModal>', () => {
  Modal.setAppElement('body');

  it('skal ikke disable knapp for lagring når frist er en gyldig fremtidig dato', async () => {
    const cancelEventCallback = jest.fn();
    const submitCallback = jest.fn();

    const utils = render(
      <RawIntlProvider value={intlMock}>
        <SettPaVentModal
          submitCallback={submitCallback}
          cancelEvent={cancelEventCallback}
          frist="2030-10-19"
          hasManualPaVent
          ventearsaker={[]}
          erTilbakekreving={false}
          showModal
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();
    expect(utils.getByLabelText('Behandlingen settes på vent med frist')).toBeEnabled();
    expect(screen.getByText('OK')).toBeEnabled();
  });

  it('skal disable knapp for lagring når frist er en ugyldig dato', async () => {
    const cancelEventCallback = jest.fn();
    const submitCallback = jest.fn();

    const utils = render(
      <RawIntlProvider value={intlMock}>
        <SettPaVentModal
          submitCallback={submitCallback}
          cancelEvent={cancelEventCallback}
          frist="20-10-10"
          hasManualPaVent
          ventearsaker={[]}
          erTilbakekreving={false}
          showModal
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();
    expect(utils.getByText('OK')).toBeDisabled();
  });

  it('skal disable knapp for lagring når frist er en historisk dato', async () => {
    const cancelEventCallback = jest.fn();
    const submitCallback = jest.fn();

    const utils = render(
      <RawIntlProvider value={intlMock}>
        <SettPaVentModal
          submitCallback={submitCallback}
          cancelEvent={cancelEventCallback}
          frist="2015-10-10"
          hasManualPaVent
          ventearsaker={[]}
          erTilbakekreving={false}
          showModal
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();
    expect(utils.getByText('OK')).toBeDisabled();
  });

  it('skal ikke vise frist-input når behandling automatisk er satt på vent uten frist', async () => {
    const cancelEventCallback = jest.fn();
    const submitCallback = jest.fn();

    const utils = render(
      <RawIntlProvider value={intlMock}>
        <SettPaVentModal
          showModal
          submitCallback={submitCallback}
          cancelEvent={cancelEventCallback}
          ventearsak="ventearsak"
          hasManualPaVent={false}
          ventearsaker={[]}
          erTilbakekreving={false}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Behandlingen er satt på vent')).toBeInTheDocument();
    expect(utils.queryByRole('textbox', { hidden: true })).not.toBeInTheDocument();
  });

  it('skal vise tekst for tilbakekreving behandling venter på kravgrunnlag og fristen er utløpt', async () => {
    const cancelEventCallback = jest.fn();
    const submitCallback = jest.fn();

    render(
      <RawIntlProvider value={intlMock}>
        <SettPaVentModal
          submitCallback={submitCallback}
          cancelEvent={cancelEventCallback}
          frist="2015-10-10"
          hasManualPaVent={false}
          ventearsaker={[{
            kode: 'VENT_PÅ_TILBAKEKREVINGSGRUNNLAG',
            kodeverk: 'VENT_AARSAK',
            navn: 'Venter på kravgrunnlag',
          }]}
          ventearsak="VENT_PÅ_TILBAKEKREVINGSGRUNNLAG"
          erTilbakekreving
          showModal
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Behandlingen er satt på vent med frist')).toBeInTheDocument();
    expect(screen.getByText('Venter på kravgrunnlag')).toBeInTheDocument();
    expect(screen.getByText(/OBS! Fristen på denne behandlingen er utløpt!/)).toBeInTheDocument();
  });
});
