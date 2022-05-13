import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './ArbeidsforholdFaktaIndex.stories';

const {
  ArbeidsforholdetErIkkeAktivt, FjernArbeidsforholdet, FlereArbeidsforholdITabell, IngenArbeidsforholdRegistrert,
  OppdaterArbeidsforholdOgAvslaGrunnetManglendeOpplysninger, OppdaterArbeidsforholdOgFortsettUtenIM,
  SokerErIPermisjon, SokerErIkkeIPermisjon,
} = composeStories(stories);

describe('<ArbeidsforholdFaktaIndex>', () => {
  it('skal vise at det er valgt at arbeidsforholdet ikke er aktivt', async () => {
    render(<ArbeidsforholdetErIkkeAktivt />);

    expect(await screen.findByText('Arbeidsforhold som er aktive ved permisjonsstart')).toBeInTheDocument();
    expect(screen.getByText('Vy(23232)')).toBeInTheDocument();
    expect(screen.getByText(/01.01.2018/)).toBeInTheDocument();
    expect(screen.getByText('Inntektsmelding')).toBeInTheDocument();
    expect(screen.getByText('100.00 %')).toBeInTheDocument();
    expect(screen.getByAltText('Arbeidsforhold skal brukes')).toBeInTheDocument();

    userEvent.click(screen.getByText('Inntektsmelding')); // Klikk på rad

    expect(await screen.findByText('Detaljer')).toBeInTheDocument();
    expect(screen.getByText('Arbeidsforholdet er ikke aktivt. Inntektsmelding er ikke nødvendig.')).toBeInTheDocument();
    expect(screen.getByText('Arbeidsforhold aktivt tom. dato')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019')).toBeInTheDocument();

    expect(screen.getByText('Begrunn endringene')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });

  it('skal vise at det er valgt at arbeidsforholdet skal fjernes', async () => {
    render(<FjernArbeidsforholdet />);

    expect(await screen.findByText('Arbeidsforhold som er aktive ved permisjonsstart')).toBeInTheDocument();
    expect(screen.getByText('Vy(23232)')).toBeInTheDocument();
    expect(screen.getByText(/01.01.2018/)).toBeInTheDocument();
    expect(screen.getByText('Inntektsmelding')).toBeInTheDocument();
    expect(screen.getByText('100.00 %')).toBeInTheDocument();
    expect(screen.queryByAltText('Arbeidsforhold skal brukes')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Inntektsmelding')); // Klikk på rad

    expect(await screen.findByText('Detaljer')).toBeInTheDocument();
    expect(screen.getByText('Fjern arbeidsforholdet for denne behandlingen')).toBeInTheDocument();

    expect(screen.getByText('Begrunn endringene')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });

  it('skal vise tabell med flere arbeidsforhold', async () => {
    render(<FlereArbeidsforholdITabell />);

    expect(await screen.findByText('Arbeidsforhold som er aktive ved permisjonsstart')).toBeInTheDocument();
    expect(screen.getByText('KIWI(999999999)...0001')).toBeInTheDocument();
    expect(screen.getByText(/03.06.2019/)).toBeInTheDocument();
    expect(screen.getAllByText('AA-Registeret')).toHaveLength(2);
    expect(screen.getAllByText('100.00 %')).toHaveLength(3);
    expect(screen.getByText('14.05.2020')).toBeInTheDocument();
    expect(screen.getAllByAltText('Arbeidsforhold skal brukes')).toHaveLength(2);

    expect(screen.getByText('KIWI(999999999)')).toBeInTheDocument();
    expect(screen.getByText(/01.05.2015/)).toBeInTheDocument();

    expect(screen.getByText('REMA 1000(999999998)')).toBeInTheDocument();
    expect(screen.getByText(/15.05.2020/)).toBeInTheDocument();
    expect(screen.getByText('19.04.2019')).toBeInTheDocument();

    userEvent.click(screen.getAllByText('AA-Registeret')[1]); // Klikk på rad 2

    expect(await screen.findByText('Detaljer')).toBeInTheDocument();
    expect(screen.getByText('Arbeidsforholdet er aktivt og skal benyttes i behandlingen. Nødvendig inntektsmelding er ikke mottatt.')).toBeInTheDocument();
    expect(screen.getByText('Ytelsen kan avslås på grunn av manglende opplysninger.')).toBeInTheDocument();

    expect(screen.getByText('Begrunn endringene')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();

    userEvent.click(screen.getAllByText('AA-Registeret')[0]); // Klikk på rad 1

    await waitFor(() => expect(screen.queryByText('Detaljer')).not.toBeInTheDocument());

    userEvent.click(screen.getByText('Inntektsmelding')); // Klikk på rad 3

    expect(await screen.queryByText('Detaljer')).toBeInTheDocument();
    expect(screen.getByText('Inntektsmeldingen er ikke relevant, gå videre uten disse opplysningene')).toBeInTheDocument();

    expect(screen.getByText('Begrunn endringene')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });

  it('skal vise at ingen arbeidsforhold er registrert', async () => {
    render(<IngenArbeidsforholdRegistrert />);

    expect(await screen.findByText('Arbeidsforhold som er aktive ved permisjonsstart')).toBeInTheDocument();
    expect(screen.getByText('Ingen arbeidsforhold registrert')).toBeInTheDocument();
  });

  it('skal vise at arbeidsforholdet er oppdatert og ytelsen avslått grunnet manglende opplysninger', async () => {
    render(<OppdaterArbeidsforholdOgAvslaGrunnetManglendeOpplysninger />);

    expect(await screen.findByText('Arbeidsforhold som er aktive ved permisjonsstart')).toBeInTheDocument();
    expect(screen.getByText('Vy(23232)')).toBeInTheDocument();

    userEvent.click(screen.getByText('Inntektsmelding')); // Klikk på rad

    expect(await screen.findByText('Detaljer')).toBeInTheDocument();
    expect(screen.getByText('Oppdater arbeidsforholdet basert på inntektsmelding med følgene opplysninger.')).toBeInTheDocument();
    expect(screen.getByText('Ytelsen kan avslås på grunn av manglende opplysninger.')).toBeInTheDocument();

    expect(screen.getByText('Begrunn endringene')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });

  it('skal vise at arbeidsforholdet er oppdatert og behandlingen har fortsatt uten IM', async () => {
    render(<OppdaterArbeidsforholdOgFortsettUtenIM />);

    expect(await screen.findByText('Arbeidsforhold som er aktive ved permisjonsstart')).toBeInTheDocument();
    expect(screen.getByText('Vy(23232)')).toBeInTheDocument();

    userEvent.click(screen.getByText('Inntektsmelding')); // Klikk på rad

    expect(await screen.findByText('Detaljer')).toBeInTheDocument();
    expect(screen.getByText('Oppdater arbeidsforholdet basert på inntektsmelding med følgene opplysninger.')).toBeInTheDocument();
    expect(screen.getByText('Fortsett behandling uten inntektsmelding, inntekt fra A-inntekt benyttes i beregningsgrunnlaget.')).toBeInTheDocument();

    expect(screen.getByText('Begrunn endringene')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });

  it('skal vise at søker er i permisjon og at IM ikke er nødvendig', async () => {
    render(<SokerErIPermisjon />);

    expect(await screen.findByText('Arbeidsforhold som er aktive ved permisjonsstart')).toBeInTheDocument();
    expect(screen.getByText('Vy(23232)')).toBeInTheDocument();

    userEvent.click(screen.getByText('Inntektsmelding')); // Klikk på rad

    expect(await screen.findByText('Detaljer')).toBeInTheDocument();
    expect(screen.getByText('Permisjon')).toBeInTheDocument();
    expect(screen.getByText(/01.01.2020/)).toBeInTheDocument();
    expect(screen.getByText('Søker er i permisjon. Inntektsmelding er ikke nødvendig.')).toBeInTheDocument();

    expect(screen.getByText('Begrunn endringene')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });

  it('skal vise at søker ikke er i permisjon og at en fortsetter behandlingen uten IM', async () => {
    render(<SokerErIkkeIPermisjon />);

    expect(await screen.findByText('Arbeidsforhold som er aktive ved permisjonsstart')).toBeInTheDocument();
    expect(screen.getByText('Vy(23232)')).toBeInTheDocument();

    userEvent.click(screen.getByText('Inntektsmelding')); // Klikk på rad

    expect(await screen.findByText('Detaljer')).toBeInTheDocument();
    expect(screen.getByText('Permisjoner')).toBeInTheDocument();
    expect(screen.getByText(/01.01.2015/)).toBeInTheDocument();
    expect(screen.getByText(/01.01.2017/)).toBeInTheDocument();
    expect(screen.getByText('Søker er ikke i permisjon. Arbeidsforholdet er aktivt og skal benyttes i behandlingen.')).toBeInTheDocument();
    expect(screen.getByText('Fortsett behandling uten inntektsmelding, inntekt fra A-inntekt benyttes i beregningsgrunnlaget.')).toBeInTheDocument();

    expect(screen.getByText('Begrunn endringene')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });
});
