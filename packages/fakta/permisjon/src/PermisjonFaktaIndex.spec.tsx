import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './PermisjonFaktaIndex.stories';

const { EttArbeidsforholdUtenSluttdatoForPermisjon, FlereArbeidsforhold } = composeStories(stories);

describe('PermisjonFaktaIndex', () => {
  it('skal velge å ta med arbeidsforholdet og så bekrefte', async () => {
    const lagreVurdering = vi.fn(() => Promise.resolve());

    render(<EttArbeidsforholdUtenSluttdatoForPermisjon submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Fakta om permisjon')).toBeInTheDocument();
    expect(
      screen.getByText('Vi fant en permisjon uten sluttdato. Vurder om arbeidsforholdet skal tas med.'),
    ).toBeInTheDocument();

    expect(screen.getByText('BEDRIFT AS')).toBeInTheDocument();

    expect(screen.getByText('Stillingsprosent')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();

    expect(screen.getByText('Inntekter (fra A-inntekt)')).toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.click(
      screen.getByText('Fjern permisjonen og ta med arbeidsforholdet. Vurder om inntektsmelding må innhentes'),
    );

    await userEvent.type(screen.getByLabelText('Begrunn valget'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, {
      kode: '5041',
      begrunnelse: 'Dette er en begrunnelse',
      arbeidsforhold: [
        {
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
          arbeidsgiverIdent: '910909088',
          permisjonStatus: 'IKKE_BRUK_PERMISJON',
        },
      ],
    });
  });

  it('skal ta med ett av to arbeidsforhold og så bekrefte', async () => {
    const lagreVurdering = vi.fn(() => Promise.resolve());

    render(<FlereArbeidsforhold submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Fakta om permisjon')).toBeInTheDocument();
    expect(
      screen.getByText('Vi fant en permisjon uten sluttdato. Vurder om arbeidsforholdet skal tas med.'),
    ).toBeInTheDocument();

    expect(screen.getByText('Autoservice AS')).toBeInTheDocument();
    expect(screen.getByText('BEDRIFT AS')).toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.click(
      screen.getByLabelText('Fjern permisjonen og ta med arbeidsforholdet. Vurder om inntektsmelding må innhentes'),
    );
    await userEvent.click(screen.getAllByLabelText('Ikke ta med arbeidsforholdet')[1]!);

    await userEvent.type(screen.getByLabelText('Begrunn valget'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, {
      kode: '5041',
      begrunnelse: 'Dette er en begrunnelse',
      arbeidsforhold: [
        {
          internArbeidsforholdId: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
          arbeidsgiverIdent: '910909090',
          permisjonStatus: 'IKKE_BRUK_PERMISJON',
        },
        {
          internArbeidsforholdId: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
          arbeidsgiverIdent: '910909088',
          permisjonStatus: 'BRUK_PERMISJON',
        },
      ],
    });
  });
});
