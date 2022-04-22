import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './FordelBeregningsgrunnlagFaktaIndex.stories';

const {
  AapOgRefusjon,
  ViseVurderTilkommetRefusjonskrav,
  SkalVurdereTilkommetØktRefusjonPåTidligereInnvilgetDelvisRefusjon,
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

  it('skal kunne løse aksjonspunkt for tilkommet refusjonskrav', async () => {
    const lagre = jest.fn();

    const utils = render(<ViseVurderTilkommetRefusjonskrav submitCallback={lagre} />);

    expect(await screen.findByText('Nytt refusjonskrav overlapper tidligere utbetalinger. Sett endringsdato for ny refusjon.')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();
    expect(screen.getAllByText('JENS MAGNE (01.01.2000)')).toHaveLength(2);
    expect(screen.getByText('krever refusjon fra og med 01.06.2020')).toBeInTheDocument();
    expect(screen.getByText('Refusjonsbeløpet skal gjelde fra og med')).toBeInTheDocument();

    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
    expect(alleInputfelt).toHaveLength(2);
    const datofelt = alleInputfelt[0];
    const begrunnelsefelt = alleInputfelt[1];

    userEvent.paste(datofelt, '01.07.2020');
    userEvent.paste(begrunnelsefelt, 'Begrunnelse for refusjonsdato');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Begrunnelse for refusjonsdato',
      kode: '5059',
      fastsatteAndeler: [
        {
          arbeidsgiverAktoerId: '999999998',
          arbeidsgiverOrgnr: undefined,
          delvisRefusjonPrMndFørStart: null,
          fastsattRefusjonFom: '2020-07-01',
          internArbeidsforholdRef: undefined,
        },
      ],
    });
  });

  it('skal kunne løse aksjonspunkt for tilkommet refusjonskrav med delvis refusjon', async () => {
    const lagre = jest.fn();

    const utils = render(<SkalVurdereTilkommetØktRefusjonPåTidligereInnvilgetDelvisRefusjon submitCallback={lagre} />);

    expect(await screen.findByText('Nytt refusjonskrav overlapper tidligere utbetalinger. Sett endringsdato for ny refusjon.')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();
    expect(screen.getAllByText('KATOLSK KEBAB A/S (999999999)')).toHaveLength(3);
    expect(screen.getByText('krever refusjon fra og med 01.06.2020. Det er tidligere innvilget et lavere refusjonsbeløp')).toBeInTheDocument();
    expect(screen.getByText('Refusjonsbeløpet skal gjelde fra og med')).toBeInTheDocument();
    expect(screen.getByText('Før denne datoen skal refusjonsbeløpet per måned være')).toBeInTheDocument();

    const alleInputfelt = utils.getAllByRole('textbox', { hidden: true });
    expect(alleInputfelt).toHaveLength(3);
    const datofelt = alleInputfelt[0];
    const delvisRefFelt = alleInputfelt[1];
    const begrunnelsefelt = alleInputfelt[2];

    userEvent.paste(datofelt, '01.07.2020');
    userEvent.paste(delvisRefFelt, '12 000');
    userEvent.paste(begrunnelsefelt, 'Begrunnelse for refusjonsdato');

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    userEvent.click(screen.getByText('Bekreft og fortsett'));
    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Begrunnelse for refusjonsdato',
      kode: '5059',
      fastsatteAndeler: [
        {
          arbeidsgiverAktoerId: undefined,
          arbeidsgiverOrgnr: '999999999',
          delvisRefusjonPrMndFørStart: 12000,
          fastsattRefusjonFom: '2020-07-01',
          internArbeidsforholdRef: undefined,
        },
      ],
    });
  });
});
