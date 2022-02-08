import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import dayjs from 'dayjs';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import Modal from 'nav-frontend-modal';
import { ISO_DATE_FORMAT } from '@fpsak-frontend/utils';
import * as stories from './PermisjonFaktaIndex.stories';

const {
  InnhentInntektsmelding,
} = composeStories(stories);

const frist = dayjs().add(28, 'days').format(ISO_DATE_FORMAT);

describe('<PermisjonFaktaIndex>', () => {
  Modal.setAppElement('body');

  it('skal avklare arbeidsforhold som mangler inntektsmelding og så sette på vent', async () => {
    const settPåVent = jest.fn(() => Promise.resolve());
    const lagreVurdering = jest.fn(() => Promise.resolve());

    const utils = render(<InnhentInntektsmelding settBehandlingPåVentCallback={settPåVent} lagreVurdering={lagreVurdering} />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();
    expect(screen.getByText('Skjæringstidspunkt for opptjening: 10.11.2021')).toBeInTheDocument();
    expect(screen.getByText('Innhent manglende inntektsmeldinger')).toBeInTheDocument();

    expect(screen.getByText('Stillingsprosent')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('Inntekter (fra A-inntekt)')).toBeInTheDocument();

    expect(screen.getByText('Lagre')).toBeDisabled();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
    expect(screen.queryByText('Sett på vent')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Jeg tar kontakt med arbeidsgiver for å innhente inntektsmelding'));

    userEvent.type(utils.getByLabelText('Begrunn valget'), 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Lagre'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, {
      arbeidsgiverIdent: '910909088',
      begrunnelse: 'Dette er en begrunnelse',
      behandlingUuid: '1223-2323-2323-22332',
      internArbeidsforholdRef: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
      vurdering: 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING',
    });

    userEvent.click(screen.getByText('Sett på vent'));
    userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(settPåVent).toHaveBeenCalledTimes(1));
    expect(settPåVent).toHaveBeenNthCalledWith(1, {
      frist,
      ventearsak: 'VENT_OPDT_INNTEKTSMELDING',
    });
  });
});
