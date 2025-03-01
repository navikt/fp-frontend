import { RawIntlProvider } from 'react-intl';

import { render, screen } from '@testing-library/react';

import { getIntlMock } from '@navikt/fp-utils-test';

import { SettPaVentModal } from './SettPaVentModal';

import messages from '../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

describe('<SettPaVentModal>', () => {
  it('skal ikke disable knapp for lagring når frist er en gyldig fremtidig dato', async () => {
    const cancelEventCallback = vi.fn();
    const submitCallback = vi.fn();

    render(
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

    expect(await screen.findByText('Behandlingen settes på vent')).toBeInTheDocument();
    expect(screen.getByText('OK')).toBeEnabled();
  });

  it('skal disable knapp for lagring når frist er en historisk dato', async () => {
    const cancelEventCallback = vi.fn();
    const submitCallback = vi.fn();

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

    expect(await screen.findByText('Behandlingen settes på vent')).toBeInTheDocument();
    expect(utils.getByText('OK').closest('button')).toBeDisabled();
  });

  it('skal ikke vise frist-input når behandling automatisk er satt på vent uten frist', async () => {
    const cancelEventCallback = vi.fn();
    const submitCallback = vi.fn();

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
    const cancelEventCallback = vi.fn();
    const submitCallback = vi.fn();

    render(
      <RawIntlProvider value={intlMock}>
        <SettPaVentModal
          submitCallback={submitCallback}
          cancelEvent={cancelEventCallback}
          frist="2015-10-10"
          hasManualPaVent={false}
          ventearsaker={[
            {
              kode: 'VENT_PÅ_TILBAKEKREVINGSGRUNNLAG',
              kodeverk: 'VENT_AARSAK',
              navn: 'Venter på kravgrunnlag',
            },
          ]}
          ventearsak="VENT_PÅ_TILBAKEKREVINGSGRUNNLAG"
          erTilbakekreving
          showModal
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Behandlingen er satt på vent')).toBeInTheDocument();
    expect(screen.getByText('Venter på kravgrunnlag')).toBeInTheDocument();
    expect(screen.getByText(/OBS! Fristen på denne behandlingen er utløpt!/)).toBeInTheDocument();
  });
});
