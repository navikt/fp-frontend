import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './BeregningsgrunnlagProsessIndex.stories';

const {
  ArbeidstakerMedAvvik,
  ArbeidstakerUtenAvvik,
  SelvstendigNæringsdrivendeMedAksjonspunkt,
  SelvstendigNæringsdrivendNyIArbeidslivet,
  NaturalYtelse,
  TidsbegrensetArbeidsforholdMedAvvik,
} = composeStories(stories);

describe('<BeregningsgrunnlagProsessIndex>', () => {
  it('skal vise informasjon om arbeidstakerinntekt', async () => {
    render(<ArbeidstakerUtenAvvik />);
    expect(await screen.findByText('Skjæringstidspunkt for beregning')).toBeInTheDocument();
    expect(screen.getByText('01.01.2021')).toBeInTheDocument();
    expect(screen.getByText('Arbeidstaker')).toBeInTheDocument();
    expect(screen.queryByText('Frilanser.')).not.toBeInTheDocument();
    expect(screen.queryByText('Selvstendig Næringsdrivende')).not.toBeInTheDocument();

    // Årsgrunnlag arbeid
    expect(screen.getByText('Arbeidsinntekt')).toBeInTheDocument();
    expect(screen.getByText('BEDRIFT AS (999999996)')).toBeInTheDocument();
    expect(screen.getByText('Beregningsmann 100%')).toBeInTheDocument();
    expect(screen.getByText('28.11.2019 - 31.12.2070')).toBeInTheDocument();
    expect(screen.getByText('16 667')).toBeInTheDocument();

    // Sammenligningsgrunnlag
    expect(screen.getByText('Beregnet årsinntekt')).toBeInTheDocument();
    expect(screen.getByText('Sammenligningsgrunnlag')).toBeInTheDocument();
    expect(screen.getByText('Beregnet avvik')).toBeInTheDocument();
    expect(screen.getByText('0%')).toBeInTheDocument();

    // Beregningsresultat
    expect(screen.getByText('Beregningsgrunnlag - beregnet årsinntekt arbeid')).toBeInTheDocument();
    expect(screen.getByText('Redusert til 80% dekningsgrad')).toBeInTheDocument();
    expect(screen.getByText('Dagsats')).toBeInTheDocument();
    expect(screen.getByText('(360 000/260 dager)')).toBeInTheDocument();
    expect(screen.queryByText('Beregningsgrunnlag - beregnet årsinntekt frilans')).not.toBeInTheDocument();
    expect(screen.queryByText('Beregningsgrunnlag - beregnet årsinntekt næring')).not.toBeInTheDocument();
  });

  it('skal bekrefte aksjonspunkt for avvik', async () => {
    const lagre = jest.fn();

    const utils = render(<ArbeidstakerMedAvvik submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    // Årsgrunnlag arbeid
    expect(screen.getByText('Arbeidsinntekt')).toBeInTheDocument();
    expect(screen.getAllByText('BEDRIFT AS (999999996)')).toHaveLength(2);
    expect(screen.getByText('Beregningsmann 100%')).toBeInTheDocument();
    expect(screen.getByText('28.11.2019 - 31.12.2070')).toBeInTheDocument();
    expect(screen.getByText('16 667')).toBeInTheDocument();

    // Aksjonspunkt avvik
    expect(screen.getByText('Skjønnsmessig fastsettelse av årsinntekt ved avvik')).toBeInTheDocument();
    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
    const bruttoFelt = alleInputfelt[0];
    const begrunnelseFelt = alleInputfelt[1];
    userEvent.paste(bruttoFelt, '260 000');
    userEvent.paste(begrunnelseFelt, 'Min begrunnelse for inntekt');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: 'Min begrunnelse for inntekt',
      inntektPrAndelList: [
        {
          andelsnr: 1,
          inntekt: 260000,
        },
      ],
      inntektFrilanser: null,
      kode: '5038',
    }]);
  });

  it('skal bekrefte aksjonspunkt for vurder varig endring selvstendig næringsdrivende', async () => {
    const lagre = jest.fn();

    const utils = render(<SelvstendigNæringsdrivendeMedAksjonspunkt submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    // Årsgrunnlag næring
    expect(screen.getByText('3 siste ferdigliknede år fra skatteetaten')).toBeInTheDocument();
    expect(screen.getByText('2017')).toBeInTheDocument();
    expect(screen.getByText('2016')).toBeInTheDocument();
    expect(screen.getByText('2015')).toBeInTheDocument();
    expect(screen.getByText('124 412')).toBeInTheDocument();
    expect(screen.getByText('98 456')).toBeInTheDocument();
    expect(screen.getByText('9 861 482')).toBeInTheDocument();

    // Næringsopplysinger
    expect(screen.getByText('Ukjent bedriftsnavn')).toBeInTheDocument();
    expect(screen.getByText('Regnskapsfører Regn S. Fører-99999999')).toBeInTheDocument();
    expect(screen.getByText('Søker har oppgitt varig endring fra')).toBeInTheDocument();
    expect(screen.getByText('01.05.2016')).toBeInTheDocument();
    expect(screen.getByText('Jeg utvidet virksomheten fra en ren frisørsalong til også å tilby hudpleie.'
      + ' Jeg jobbet opprinnelig alene men har ansatt to stykker i løpet av det siste året')).toBeInTheDocument();

    // Aksjonspunkt
    expect(screen.queryByText('Næringsinntekt fastsettes til')).not.toBeInTheDocument();
    userEvent.click(screen.getByLabelText('Ingen varig endring'));
    await waitFor(() => expect(screen.queryByText('Næringsinntekt fastsettes til')).not.toBeInTheDocument());
    userEvent.click(screen.getByLabelText('Varig endring - Årsinntekt må fastsettes.'));
    expect(await screen.findByText('Næringsinntekt fastsettes til')).toBeInTheDocument();
    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
    const bruttoFelt = alleInputfelt[0];
    const begrunnelseFelt = alleInputfelt[1];
    userEvent.paste(bruttoFelt, '260 000');
    userEvent.paste(begrunnelseFelt, 'Min begrunnelse for vurdering av varig endring');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: 'Min begrunnelse for vurdering av varig endring',
      bruttoBeregningsgrunnlag: 260000,
      erVarigEndretNaering: true,
      kode: '5039',
    }]);
  });

  it('skal bekrefte aksjonspunkt for ny i arbeidslivet selvstendig næringsdrivende', async () => {
    const lagre = jest.fn();

    const utils = render(<SelvstendigNæringsdrivendNyIArbeidslivet submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    // Næringsopplysinger
    expect(screen.getByText('Ukjent bedriftsnavn')).toBeInTheDocument();
    expect(screen.getByText('Regnskapsfører Regn S. Fører-99999999')).toBeInTheDocument();
    expect(screen.getByText('01.11.2015-')).toBeInTheDocument();

    // Aksjonspunkt
    expect(screen.getByText('Søker er ny i arbeidslivet. Det foretas derfor ingen avviksvurdering.')).toBeInTheDocument();
    expect(screen.getByText('Skjønnsmessig fastsettelse av årsinntekt når søker er ny i arbeidslivet')).toBeInTheDocument();
    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
    const bruttoFelt = alleInputfelt[0];
    const begrunnelseFelt = alleInputfelt[1];
    userEvent.paste(bruttoFelt, '500 000');
    userEvent.paste(begrunnelseFelt, 'Min begrunnelse for inntekt');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: 'Min begrunnelse for inntekt',
      bruttoBeregningsgrunnlag: 500000,
      kode: '5049',
    }]);
  });

  it('skal ha korrekt visning ved naturalytelser', async () => {
    render(<NaturalYtelse />);
    expect(await screen.findByText('Skjæringstidspunkt for beregning')).toBeInTheDocument();
    expect(screen.getByText('Arbeidstaker')).toBeInTheDocument();
    expect(screen.queryByText('Frilanser.')).not.toBeInTheDocument();
    expect(screen.queryByText('Selvstendig Næringsdrivende')).not.toBeInTheDocument();

    expect(screen.getAllByText('Naturalytelser')).toHaveLength(5);

    expect(screen.getByText('01.01.2021 - 21.01.2021')).toBeInTheDocument();
    expect(screen.getByText('417')).toBeInTheDocument();

    expect(screen.getByText('22.01.2021 - 31.01.2021')).toBeInTheDocument();
    expect(screen.getByText('333')).toBeInTheDocument();

    expect(screen.getByText('01.02.2021 - 20.02.2021')).toBeInTheDocument();
    expect(screen.getByText('250')).toBeInTheDocument();

    expect(screen.getByText('21.02.2021 -')).toBeInTheDocument();
    expect(screen.getByText('167')).toBeInTheDocument();
  });

  it('skal bekrefte aksjonspunkt for avvik ved tidsbegrenset arbeidsforhold', async () => {
    const lagre = jest.fn();

    const utils = render(<TidsbegrensetArbeidsforholdMedAvvik submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    // Årsgrunnlag arbeid
    expect(screen.getAllByText('Andeby bank (999999999)')).toHaveLength(2);

    // Aksjonspunkt
    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
    const bruttoFeltAg1P1 = alleInputfelt[0];
    const bruttoFeltAg1P2 = alleInputfelt[1];

    const begrunnelseFelt = alleInputfelt[2];

    userEvent.paste(bruttoFeltAg1P1, '222 000');
    userEvent.paste(bruttoFeltAg1P2, '333 000');

    userEvent.paste(begrunnelseFelt, 'Min begrunnelse for tidsbegrenset inntekt');

    expect(await screen.findByText('222 000')).toBeInTheDocument();
    expect(screen.getByText('333 000')).toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett')).toBeEnabled();
    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      fastsatteTidsbegrensedePerioder: [
        {
          periodeFom: '2021-01-01',
          periodeTom: '2021-01-21',
          fastsatteTidsbegrensedeAndeler: [
            {
              andelsnr: 1,
              bruttoFastsattInntekt: 222000,
            },
          ],
        },
        {
          periodeFom: '2021-01-22',
          periodeTom: '2021-02-05',
          fastsatteTidsbegrensedeAndeler: [
            {
              andelsnr: 1,
              bruttoFastsattInntekt: 333000,
            },
          ],
        },
      ],
      begrunnelse: 'Min begrunnelse for tidsbegrenset inntekt',
      frilansInntekt: null,
      kode: '5047',
    }]);
  });
});
