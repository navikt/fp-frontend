import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { render, screen } from '@testing-library/react';
import { OpptjeningAktiviteter } from '@fpsak-frontend/types';
import ModalWrapper from 'nav-frontend-modal';
import { getIntlMock } from '@fpsak-frontend/utils-test/src/intl-enzyme-test-helper';

import OpptjeningTotrinnText from './OpptjeningTotrinnText';
import messages from '../../../i18n/nb_NO.json';

const intlMock = getIntlMock(messages);

const lagOpptjeningAktivitetArbeidMedNavn = (resultat: string): OpptjeningAktiviteter => ({
  erEndring: resultat === 'ENDRING',
  aktivitetType: 'Arbeid',
  arbeidsgiverNavn: 'Andersen Transport AS',
  orgnr: '1234567890',
  godkjent: resultat === 'GODKJENT',
});

const lagOpptjeningAktivitetArbeidUtenNavn = (resultat: string): OpptjeningAktiviteter => ({
  erEndring: resultat === 'ENDRING',
  aktivitetType: 'Arbeid',
  arbeidsgiverNavn: undefined,
  orgnr: '1234567890',
  godkjent: resultat === 'GODKJENT',
});

const lagOpptjeningAktivitet = (resultat: string): OpptjeningAktiviteter => ({
  erEndring: resultat === 'ENDRING',
  aktivitetType: 'Aktivitet',
  arbeidsgiverNavn: undefined,
  orgnr: undefined,
  godkjent: resultat === 'GODKJENT',
});

describe('<OpptjeningTotrinnnText>', () => {
  ModalWrapper.setAppElement('body');
  it('skal vise korrekt tekst for opptjening med endring av arbeid med navn', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <OpptjeningTotrinnText
          aktivitet={lagOpptjeningAktivitetArbeidMedNavn('ENDRING')}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText(/Perioden arbeid for Andersen Transport AS/)).toBeInTheDocument();
    expect(screen.getByText(/(1234567890)/)).toBeInTheDocument();
    expect(screen.getByText(/er endret./)).toBeInTheDocument();
  });

  it('skal vise korrekt tekst for opptjening med endring av arbeid uten navn', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <OpptjeningTotrinnText
          aktivitet={lagOpptjeningAktivitetArbeidUtenNavn('ENDRING')}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Perioden arbeid for organisasjonen med orgnr. 1234567890 er endret.')).toBeInTheDocument();
  });

  it('skal vise korrekt tekst for opptjening med endring av aktivitet', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <OpptjeningTotrinnText
          aktivitet={lagOpptjeningAktivitet('ENDRING')}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Perioden aktivitet er endret.')).toBeInTheDocument();
  });

  it('skal vise korrekt tekst for opptjening med godkjenning av arbeid med navn', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <OpptjeningTotrinnText
          aktivitet={lagOpptjeningAktivitetArbeidMedNavn('GODKJENT')}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Aktivitet arbeid for Andersen Transport AS (1234567890) er godkjent.')).toBeInTheDocument();
  });

  it('skal vise korrekt tekst for opptjening med godkjenning av arbeid uten navn', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <OpptjeningTotrinnText
          aktivitet={lagOpptjeningAktivitetArbeidUtenNavn('GODKJENT')}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Aktivitet arbeid for organisasjonen med orgnr. 1234567890 er godkjent.')).toBeInTheDocument();
  });

  it('skal vise korrekt tekst for opptjening med godkjenning av aktivitet', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <OpptjeningTotrinnText
          aktivitet={lagOpptjeningAktivitet('GODKJENT')}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText('Aktivitet aktivitet er godkjent.')).toBeInTheDocument();
  });

  it('skal vise korrekt tekst for opptjening med underkjenning av arbeid med navn', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <OpptjeningTotrinnText
          aktivitet={lagOpptjeningAktivitetArbeidMedNavn('UNDERKJENNING')}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText(/Aktivitet arbeid for Andersen Transport AS/)).toBeInTheDocument();
    expect(screen.getByText(/ikke/)).toBeInTheDocument();
    expect(screen.getByText(/godkjent./)).toBeInTheDocument();
  });

  it('skal vise korrekt tekst for opptjening med underkjenning av arbeid uten navn', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <OpptjeningTotrinnText
          aktivitet={lagOpptjeningAktivitetArbeidUtenNavn('UNDERKJENNING')}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText(/Aktivitet arbeid for organisasjonen med orgnr. 1234567890 er/)).toBeInTheDocument();
    expect(screen.getByText(/ikke/)).toBeInTheDocument();
    expect(screen.getByText(/godkjent./)).toBeInTheDocument();
  });

  it('skal vise korrekt tekst for opptjening med underkjenning av aktivitet', async () => {
    render(
      <RawIntlProvider value={intlMock}>
        <OpptjeningTotrinnText
          aktivitet={lagOpptjeningAktivitet('UNDERKJENNING')}
        />
      </RawIntlProvider>,
    );

    expect(await screen.findByText(/Aktivitet aktivitet er/)).toBeInTheDocument();
    expect(screen.getByText(/ikke/)).toBeInTheDocument();
    expect(screen.getByText(/godkjent/)).toBeInTheDocument();
  });
});
