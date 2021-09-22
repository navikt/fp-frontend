import React from 'react';
import { render, screen } from '@testing-library/react';
import { RawIntlProvider } from 'react-intl';

import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';
import messages from '../../i18n/nb_NO.json';

import SettPaVentModal from './SettPaVentModal';

const intlMock = getIntlMock(messages);

describe('<SettPaVentModal>', () => {
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
    expect(utils.getByLabelText('Behandlingen settes på vent med frist')).not.toBeDisabled();
    expect(screen.getByText('OK')).not.toBeDisabled();
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
    expect(utils.getByLabelText('Behandlingen settes på vent med frist')).toBeDisabled();
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
    expect(utils.getByLabelText('Behandlingen settes på vent med frist')).toBeDisabled();
    expect(utils.queryByRole('textbox')).toHaveLength(2);
  });

  it('skal ikke vise frist-input når behandling automatisk er satt på vent uten frist', async () => {
    const cancelEventCallback = jest.fn();
    const submitCallback = jest.fn();

    const utils = render(
      <RawIntlProvider value={intlMock}>
        <SettPaVentModal
          submitCallback={submitCallback}
          cancelEvent={cancelEventCallback}
          frist="2015-10-10"
          hasManualPaVent={false}
          ventearsaker={[]}
          erTilbakekreving={false}
          showModal
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Behandlingen settes på vent med frist')).toBeInTheDocument();
    expect(utils.getByRole('textbox')).toHaveLength(1);
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
