import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './ArbeidsforholdFaktaIndex.stories';

const {
  ArbeidsforholdetErIkkeAktivt,
  FjernArbeidsforholdet,
  FlereArbeidsforholdITabell,
  IngenArbeidsforholdRegistrert,
  OppdaterArbeidsforholdOgAvslaGrunnetManglendeOpplysninger,
  ManueltOpprettetArbeidsforhold,
  SokerErIPermisjon,
  SokerErIkkeIPermisjon,
  ArbeidsforholdetSkalBenyttesUtenInntektsmelding,
} = composeStories(stories);

describe('ArbeidsforholdFaktaIndex', () => {
  it('skal vise at arbeidsforholdet er oppdatert og behandlingen har fortsatt uten IM', async () => {
    render(<ArbeidsforholdetSkalBenyttesUtenInntektsmelding />);

    expect(await screen.findByText('Arbeidsforhold som er aktive ved permisjonsstart')).toBeInTheDocument();
    expect(screen.getByText('KIWI (999999999)')).toBeInTheDocument();
    expect(screen.getByText('19.04.2000 -')).toBeInTheDocument();
    expect(screen.getByText('Aa-registeret')).toBeInTheDocument();
    expect(screen.getByText('100.00 %')).toBeInTheDocument();
    expect(screen.getByTitle('Arbeidsforhold skal brukes')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Aa-registeret')); // Klikk på rad

    expect(await screen.findByText('Detaljer')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Arbeidsforholdet er aktivt og skal benyttes i behandlingen. Nødvendig inntektsmelding er ikke mottatt.',
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Fortsett behandling uten inntektsmelding, inntekt fra A-inntekt benyttes i beregningsgrunnlaget.',
      ),
    ).toBeInTheDocument();

    expect(screen.getByText('Begrunn endringene')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse 3')).toBeInTheDocument();
  });

  it('skal vise at arbeidsforholdet er manuelt oppdatert av saksbehandler', async () => {
    render(<ManueltOpprettetArbeidsforhold />);

    expect(await screen.findByText('Arbeidsforhold som er aktive ved permisjonsstart')).toBeInTheDocument();
    expect(screen.getByText('KIWI')).toBeInTheDocument();
    expect(screen.getByText('31.01.2022 -')).toBeInTheDocument();
    expect(screen.getByText('Saksbehandler')).toBeInTheDocument();
    expect(screen.getByText('100.00 %')).toBeInTheDocument();
    expect(screen.getByText('13.12.2021')).toBeInTheDocument();
    expect(screen.queryByAltText('Arbeidsforhold skal brukes')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Saksbehandler')); // Klikk på rad

    expect(await screen.findByText('Detaljer')).toBeInTheDocument();
    expect(screen.getByText('Arbeidsforhold er manuelt opprettet av saksbehandler')).toBeInTheDocument();

    expect(screen.getByText('Begrunn endringene')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse 4')).toBeInTheDocument();
  });

  it('skal vise at det er valgt at arbeidsforholdet ikke er aktivt', async () => {
    render(<ArbeidsforholdetErIkkeAktivt />);

    expect(await screen.findByText('Arbeidsforhold som er aktive ved permisjonsstart')).toBeInTheDocument();
    expect(screen.getByText('KIWI (999999999)')).toBeInTheDocument();
    expect(screen.getByText(/06.12.2019/)).toBeInTheDocument();
    expect(screen.getByText('Aa-registeret')).toBeInTheDocument();
    expect(screen.getByText('100.00 %')).toBeInTheDocument();
    expect(screen.queryByAltText('Arbeidsforhold skal brukes')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Aa-registeret')); // Klikk på rad

    expect(await screen.findByText('Detaljer')).toBeInTheDocument();
    expect(screen.getByText('Arbeidsforholdet er ikke aktivt. Inntektsmelding er ikke nødvendig.')).toBeInTheDocument();
    expect(screen.getByText('Arbeidsforhold aktivt tom. dato')).toBeInTheDocument();
    expect(screen.getByText('31.12.9999')).toBeInTheDocument();

    expect(screen.getByText('Begrunn endringene')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse 5')).toBeInTheDocument();
  });

  it('skal vise at det er valgt at arbeidsforholdet skal fjernes', async () => {
    render(<FjernArbeidsforholdet />);

    expect(await screen.findByText('Arbeidsforhold som er aktive ved permisjonsstart')).toBeInTheDocument();
    expect(screen.getByText('KIWI (999999999)')).toBeInTheDocument();
    expect(screen.getByText(/06.12.2019/)).toBeInTheDocument();
    expect(screen.getByText('Aa-registeret')).toBeInTheDocument();
    expect(screen.getByText('100.00 %')).toBeInTheDocument();
    expect(screen.queryByAltText('Arbeidsforhold skal brukes')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Aa-registeret')); // Klikk på rad

    expect(await screen.findByText('Detaljer')).toBeInTheDocument();
    expect(screen.getByText('Fjern arbeidsforholdet for denne behandlingen')).toBeInTheDocument();

    expect(screen.getByText('Begrunn endringene')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse 9')).toBeInTheDocument();
  });

  it('skal vise tabell med flere arbeidsforhold', async () => {
    render(<FlereArbeidsforholdITabell />);

    expect(await screen.findByText('Arbeidsforhold som er aktive ved permisjonsstart')).toBeInTheDocument();
    expect(screen.getByText('KIWI (999999999)')).toBeInTheDocument();
    expect(screen.getByText(/06.12.2019/)).toBeInTheDocument();
    expect(screen.getAllByText('Aa-registeret')).toHaveLength(3);
    expect(screen.getAllByText('100.00 %')).toHaveLength(3);
    expect(screen.getByText('06.12.2021')).toBeInTheDocument();

    expect(screen.getByText('REMA 1000 (999999998)')).toBeInTheDocument();
    expect(screen.getByText(/12.05.2019/)).toBeInTheDocument();
    expect(screen.getByText('06.12.2021')).toBeInTheDocument();
    expect(screen.getByTitle('Arbeidsforhold skal brukes')).toBeInTheDocument();

    expect(screen.getByText('Vy (23232)')).toBeInTheDocument();
    expect(screen.getByText(/06.12.2020/)).toBeInTheDocument();

    expect(await screen.findAllByText('Detaljer')).toHaveLength(2);
    expect(
      screen.getByText(
        'Arbeidsforholdet er aktivt og skal benyttes i behandlingen. Nødvendig inntektsmelding er ikke mottatt.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Ytelsen kan avslås på grunn av manglende opplysninger.')).toBeInTheDocument();

    expect(screen.getAllByText('Begrunn endringene')).toHaveLength(2);
    expect(screen.getByText('Dette er en begrunnelse 1')).toBeInTheDocument();

    expect(screen.getByText('Fjern arbeidsforholdet for denne behandlingen')).toBeInTheDocument();

    expect(screen.getByText('Dette er en begrunnelse 2')).toBeInTheDocument();
  });

  it('skal vise at ingen arbeidsforhold er registrert', async () => {
    render(<IngenArbeidsforholdRegistrert />);

    expect(await screen.findByText('Arbeidsforhold som er aktive ved permisjonsstart')).toBeInTheDocument();
    expect(screen.getByText('Ingen arbeidsforhold registrert')).toBeInTheDocument();
  });

  it('skal vise at arbeidsforholdet er oppdatert og ytelsen avslått grunnet manglende opplysninger', async () => {
    render(<OppdaterArbeidsforholdOgAvslaGrunnetManglendeOpplysninger />);

    expect(await screen.findByText('Arbeidsforhold som er aktive ved permisjonsstart')).toBeInTheDocument();
    expect(screen.getByText('KIWI (999999999)')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Aa-registeret')); // Klikk på rad

    expect(await screen.findByText('Detaljer')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Arbeidsforholdet er aktivt og skal benyttes i behandlingen. Nødvendig inntektsmelding er ikke mottatt.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Ytelsen kan avslås på grunn av manglende opplysninger.')).toBeInTheDocument();

    expect(screen.getByText('Begrunn endringene')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse 8')).toBeInTheDocument();
  });

  it('skal vise at søker er i permisjon og at IM ikke er nødvendig', async () => {
    render(<SokerErIPermisjon />);

    expect(await screen.findByText('Arbeidsforhold som er aktive ved permisjonsstart')).toBeInTheDocument();
    expect(screen.getByText('KIWI (999999999)')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Aa-registeret')); // Klikk på rad

    expect(await screen.findByText('Detaljer')).toBeInTheDocument();
    expect(screen.getByText('Permisjon')).toBeInTheDocument();
    expect(screen.getByText(/01.01.2020/)).toBeInTheDocument();
    expect(screen.getByText('Søker er i permisjon. Inntektsmelding er ikke nødvendig.')).toBeInTheDocument();

    expect(screen.getByText('Begrunn endringene')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse 6')).toBeInTheDocument();
  });

  it('skal vise at søker ikke er i permisjon og at en fortsetter behandlingen uten IM', async () => {
    render(<SokerErIkkeIPermisjon />);

    expect(await screen.findByText('Arbeidsforhold som er aktive ved permisjonsstart')).toBeInTheDocument();
    expect(screen.getByText('KIWI (999999999)')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Aa-registeret')); // Klikk på rad

    expect(await screen.findByText('Detaljer')).toBeInTheDocument();
    expect(screen.getByText('Permisjon')).toBeInTheDocument();
    expect(screen.getByText(/01.01.2020/)).toBeInTheDocument();
    expect(screen.getByText(/01.01.2021/)).toBeInTheDocument();
    expect(
      screen.getByText('Søker er ikke i permisjon. Arbeidsforholdet er aktivt og skal benyttes i behandlingen.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Fortsett behandling uten inntektsmelding, inntekt fra A-inntekt benyttes i beregningsgrunnlaget.',
      ),
    ).toBeInTheDocument();

    expect(screen.getByText('Begrunn endringene')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse 7')).toBeInTheDocument();
  });
});
