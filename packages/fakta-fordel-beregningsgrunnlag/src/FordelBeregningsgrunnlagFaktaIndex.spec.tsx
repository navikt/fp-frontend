import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './FordelBeregningsgrunnlagFaktaIndex.stories';

const {
  AapOgRefusjon,
  ArbeidOgGradertNæringUtenBeregningsgrunnlag,
} = composeStories(stories);

describe('<FordelBeregningsgrunnlagFaktaIndex>', () => {
  it('skal kunne løse aksjonspunkt for nytt refusjonskrav', async () => {
    const lagre = jest.fn();

    const utils = render(<AapOgRefusjon submitCallback={lagre} />);

    expect(await screen.findByText('Nytt refusjonskrav hos KATOLSK KEBAB A/S (999999999)...-001 f.o.m. 27.11.2019.')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    // Første periode
    expect(screen.getByText('Gjeldende 05.08.2019 - 26.11.2019')).toBeInTheDocument();

    // Andre periode
    expect(screen.getByText('Gjeldende f.o.m. 27.11.2019')).toBeInTheDocument();
    expect(screen.getByText('Legg til aktivitet')).toBeEnabled();

    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
    expect(alleInputfelt).toHaveLength(3);
    const fordelingAAP = alleInputfelt[0];
    const fordelingAT = alleInputfelt[1];
    const begrunnelseFelt = alleInputfelt[2];

    userEvent.paste(fordelingAAP, '200 000');
    userEvent.paste(fordelingAT, '300 000');
    userEvent.paste(begrunnelseFelt, 'Begrunnelse for fordeling');
    expect(screen.queryByText('Summen må være lik 400 000.')).not.toBeInTheDocument();

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    userEvent.click(screen.getByText('Bekreft og fortsett'));

    // Forventer at validering slår til
    expect(await screen.findByText('Summen må være lik 400 000')).toBeInTheDocument();
    userEvent.clear(fordelingAAP);
    userEvent.paste(fordelingAAP, '100 000');
    expect(await screen.queryByText('Summen må være lik 400 000.')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Begrunnelse for fordeling',
      kode: '5046',
      endretBeregningsgrunnlagPerioder: [
        {
          andeler: [
            {
              aktivitetStatus: 'AAP',
              andelsnr: 2,
              arbeidsforholdId: null,
              arbeidsforholdType: '-',
              arbeidsgiverId: null,
              beregningsperiodeFom: '2019-06-01',
              beregningsperiodeTom: '2019-08-31',
              fastsatteVerdier: {
                fastsattÅrsbeløpInklNaturalytelse: 100000,
                inntektskategori: 'ARBEIDSAVKLARINGSPENGER',
                refusjonPrÅr: null,
              },
              forrigeArbeidsinntektPrÅr: 0,
              forrigeInntektskategori: 'ARBEIDSAVKLARINGSPENGER',
              forrigeRefusjonPrÅr: 0,
              kilde: null,
              lagtTilAvSaksbehandler: false,
              nyAndel: false,
            },
            {
              aktivitetStatus: 'AT',
              andelsnr: 1,
              arbeidsforholdId: 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF',
              arbeidsforholdType: '-',
              arbeidsgiverId: '999999999',
              beregningsperiodeFom: '2019-06-01',
              beregningsperiodeTom: '2019-08-31',
              fastsatteVerdier: {
                fastsattÅrsbeløpInklNaturalytelse: 300000,
                inntektskategori: 'ARBEIDSTAKER',
                refusjonPrÅr: null,
              },
              forrigeArbeidsinntektPrÅr: 0,
              forrigeInntektskategori: 'ARBEIDSTAKER',
              forrigeRefusjonPrÅr: 0,
              kilde: null,
              lagtTilAvSaksbehandler: false,
              nyAndel: false,
            },
          ],
          fom: '2019-11-27',
          tom: undefined,
        },
      ],
    });
  });

  it('skal kunne løse aksjonspunkt og legge til andel', async () => {
    const lagre = jest.fn();

    const utils = render(<AapOgRefusjon submitCallback={lagre} />);

    expect(await screen.findByText('Nytt refusjonskrav hos KATOLSK KEBAB A/S (999999999)...-001 f.o.m. 27.11.2019.')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    // Første periode
    expect(screen.getByText('Gjeldende 05.08.2019 - 26.11.2019')).toBeInTheDocument();

    // Andre periode
    expect(screen.getByText('Gjeldende f.o.m. 27.11.2019')).toBeInTheDocument();
    expect(screen.getByText('Legg til aktivitet')).toBeEnabled();

    userEvent.click(screen.getByText('Legg til aktivitet'));

    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
    expect(alleInputfelt).toHaveLength(4);

    const fordelingAAP = alleInputfelt[0];
    const fordelingAT = alleInputfelt[1];
    const fordelingNy = alleInputfelt[2];
    const begrunnelseFelt = alleInputfelt[3];

    userEvent.paste(fordelingAAP, '200 000');
    userEvent.paste(fordelingAT, '200 000');
    userEvent.paste(begrunnelseFelt, 'Begrunnelse for fordeling');

    const selectfelt = utils.getAllByRole('combobox', { hidden: true });
    expect(selectfelt).toHaveLength(4);
    const selectAndel = selectfelt[2];
    const selectInntektskategori = selectfelt[3];
    userEvent.selectOptions(selectAndel, '1');
    userEvent.selectOptions(selectInntektskategori, 'SELVSTENDIG_NÆRINGSDRIVENDE');
    userEvent.paste(fordelingNy, '100 000');

    screen.debug(undefined, 500000);

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    // expect(lagre).toHaveBeenNthCalledWith(1, {
    //   begrunnelse: 'Begrunnelse for fordeling',
    //   kode: '5046',
    //   endretBeregningsgrunnlagPerioder: [
    //     {
    //       andeler: [
    //         {
    //           aktivitetStatus: 'AAP',
    //           andelsnr: 2,
    //           arbeidsforholdId: null,
    //           arbeidsforholdType: '-',
    //           arbeidsgiverId: null,
    //           beregningsperiodeFom: '2019-06-01',
    //           beregningsperiodeTom: '2019-08-31',
    //           fastsatteVerdier: {
    //             fastsattÅrsbeløpInklNaturalytelse: 100000,
    //             inntektskategori: 'ARBEIDSAVKLARINGSPENGER',
    //             refusjonPrÅr: null,
    //           },
    //           forrigeArbeidsinntektPrÅr: 0,
    //           forrigeInntektskategori: 'ARBEIDSAVKLARINGSPENGER',
    //           forrigeRefusjonPrÅr: 0,
    //           kilde: null,
    //           lagtTilAvSaksbehandler: false,
    //           nyAndel: false,
    //         },
    //         {
    //           aktivitetStatus: 'AT',
    //           andelsnr: 1,
    //           arbeidsforholdId: 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF',
    //           arbeidsforholdType: '-',
    //           arbeidsgiverId: '999999999',
    //           beregningsperiodeFom: '2019-06-01',
    //           beregningsperiodeTom: '2019-08-31',
    //           fastsatteVerdier: {
    //             fastsattÅrsbeløpInklNaturalytelse: 300000,
    //             inntektskategori: 'ARBEIDSTAKER',
    //             refusjonPrÅr: null,
    //           },
    //           forrigeArbeidsinntektPrÅr: 0,
    //           forrigeInntektskategori: 'ARBEIDSTAKER',
    //           forrigeRefusjonPrÅr: 0,
    //           kilde: null,
    //           lagtTilAvSaksbehandler: false,
    //           nyAndel: false,
    //         },
    //       ],
    //       fom: '2019-11-27',
    //       tom: undefined,
    //     },
    //   ],
    // });
  });
  // it('skal skal kunne løse aksjonspunkt gradering på næring uten beregningsgrunnlag, legger til andel.', async () => {
  //   const lagre = jest.fn();
  //
  //   const utils = render(<ArbeidOgGradertNæringUtenBeregningsgrunnlag submitCallback={lagre} />);
  //
  //   expect(await screen.findByText('Søkt gradering hos Næring f.o.m. 04.11.2019 - t.o.m. 09.12.2019.')).toBeInTheDocument();
  //   expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();
  //
  //   // Første periode
  //   expect(screen.getByText('Gjeldende 05.03.2019 - 03.11.2019')).toBeInTheDocument();
  //
  //   // Andre periode
  //   expect(screen.getByText('Gjeldende 04.11.2019 - 09.12.2019')).toBeInTheDocument();
  //
  //   // Tredje periode
  //   expect(screen.getByText('Gjeldende 10.12.2019 - 31.12.9999')).toBeInTheDocument();
  //   expect(screen.getAllByText('Legg til aktivitet')).toHaveLength(2);
  //
  //   const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
  //   expect(alleInputfelt).toHaveLength(5);
  //   const leggTilKnappP2 = utils.getAllByText('Legg til aktivitet')[0];
  //   userEvent.click(leggTilKnappP2);
  //   // Forenter at rad er blitt lagt til
  //   const selectfelt = utils.getAllByRole('combobox', { hidden: true });
  //   const inputFelterEtterNyAndel = utils.getAllByRole('textbox', { hidden: true });
  //   expect(inputFelterEtterNyAndel).toHaveLength(6);
  //   expect(selectfelt).toHaveLength(6);
  //
  //   const fordelingATP2 = inputFelterEtterNyAndel[0];
  //   const fordelingSNP2 = inputFelterEtterNyAndel[1];
  //   const fordelingNyAktivitet = inputFelterEtterNyAndel[2];
  //
  //   console.log(inputFelterEtterNyAndel);
  //
  //   const selectNyAktivitet = selectfelt[2];
  //   const selectNyInntektskategori = selectfelt[3];
  //   expect(await screen.findByText('Gjeldende 10.12.2019 - 31.12.9999')).toBeInTheDocument();
  //   userEvent.selectOptions(selectNyAktivitet, '1');
  //   userEvent.selectOptions(selectNyInntektskategori, 'SELVSTENDIG_NÆRINGSDRIVENDE');
  //   userEvent.paste(fordelingATP2, '255 555');
  //   userEvent.paste(fordelingSNP2, '111 111');
  //   userEvent.clear(fordelingNyAktivitet);
  //   userEvent.type(fordelingNyAktivitet, '100 000');
  //
  //   const begrunnelseFelt = inputFelterEtterNyAndel[5];
  //   userEvent.paste(begrunnelseFelt, 'Begrunnelse for fordelingen');
  //
  //   // const selectfelt = utils.getAllByRole('combobox', { hidden: true });
  //   // expect(selectfelt).toHaveLength(2);
  //   // const selectAAP = selectfelt[0];
  //   // const selectAT = selectfelt[1];
  //
  //   // userEvent.paste(fordelingAAP, '200 000');
  //   // userEvent.paste(fordelingAT, '300 000');
  //   // userEvent.paste(begrunnelseFelt, 'Begrunnelse for fordeling');
  //   // expect(screen.queryByText('Summen må være lik 400 000.')).not.toBeInTheDocument();
  //   //
  //   // userEvent.click(screen.getByText('Bekreft og fortsett'));
  //   //
  //   // // Forventer at validering slår til
  //   // expect(await screen.findByText('Summen må være lik 400 000')).toBeInTheDocument();
  //   // userEvent.clear(fordelingAAP);
  //   // userEvent.paste(fordelingAAP, '100 000');
  //   // expect(await screen.queryByText('Summen må være lik 400 000.')).not.toBeInTheDocument();
  //   //
  //   expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
  //   userEvent.click(screen.getByText('Bekreft og fortsett'));
  //   screen.debug(undefined, 500000);
  //   await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
  //   // expect(lagre).toHaveBeenNthCalledWith(1, {
  //   //   begrunnelse: 'Begrunnelse for fordeling',
  //   //   kode: '5046',
  //   //   endretBeregningsgrunnlagPerioder: [
  //   //     {
  //   //       andeler: [
  //   //         {
  //   //           aktivitetStatus: 'AAP',
  //   //           andelsnr: 2,
  //   //           arbeidsforholdId: null,
  //   //           arbeidsforholdType: '-',
  //   //           arbeidsgiverId: null,
  //   //           beregningsperiodeFom: '2019-06-01',
  //   //           beregningsperiodeTom: '2019-08-31',
  //   //           fastsatteVerdier: {
  //   //             fastsattÅrsbeløpInklNaturalytelse: 100000,
  //   //             inntektskategori: 'ARBEIDSAVKLARINGSPENGER',
  //   //             refusjonPrÅr: null,
  //   //           },
  //   //           forrigeArbeidsinntektPrÅr: 0,
  //   //           forrigeInntektskategori: 'ARBEIDSAVKLARINGSPENGER',
  //   //           forrigeRefusjonPrÅr: 0,
  //   //           kilde: null,
  //   //           lagtTilAvSaksbehandler: false,
  //   //           nyAndel: false,
  //   //         },
  //   //         {
  //   //           aktivitetStatus: 'AT',
  //   //           andelsnr: 1,
  //   //           arbeidsforholdId: 'AD-ASD-ADF-SADGF-ASGASDF-SDFASDF',
  //   //           arbeidsforholdType: '-',
  //   //           arbeidsgiverId: '999999999',
  //   //           beregningsperiodeFom: '2019-06-01',
  //   //           beregningsperiodeTom: '2019-08-31',
  //   //           fastsatteVerdier: {
  //   //             fastsattÅrsbeløpInklNaturalytelse: 300000,
  //   //             inntektskategori: 'ARBEIDSTAKER',
  //   //             refusjonPrÅr: null,
  //   //           },
  //   //           forrigeArbeidsinntektPrÅr: 0,
  //   //           forrigeInntektskategori: 'ARBEIDSTAKER',
  //   //           forrigeRefusjonPrÅr: 0,
  //   //           kilde: null,
  //   //           lagtTilAvSaksbehandler: false,
  //   //           nyAndel: false,
  //   //         },
  //   //       ],
  //   //       fom: '2019-11-27',
  //   //       tom: undefined,
  //   //     },
  //   //   ],
  //   // });
  // });
});
